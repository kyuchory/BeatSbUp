const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

const connection = require("../db");
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL server(schedule): " + error.stack);
    return;
  }
  console.log(
    "Connected to MySQL server as id(schedule) " + connection.threadId
  );
});

router.get("/checkDate", function (req, res) {
  connection.query(
    `SELECT *
    FROM schedule_info
    WHERE id IN (
        SELECT id
        FROM gathering
        WHERE name = '${req.query.name}' AND admin = '${req.query.admin}' AND user = '${req.query.admin}'
    );`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
        res.json(results);
      }
    }
  );
});

router.get("/addSch", function (req, res) {
  console.log(req.query)
  connection.query(
    `INSERT INTO schedule (id, sight_id, start, end, date, offset) VALUES ('${req.query.id}', '${req.query.sight}', '${req.query.start}', '${req.query.end}', '${req.query.date}','${req.query.offset}');`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
        res.json(results);
      }
    }
  );
});

router.get("/getSchedule", function (req, res) {
  connection.query(
    `SELECT * FROM schedule WHERE id='${req.query.id}' AND offset='${req.query.offset}';`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        res.json(results);
      }
    }
  );
});

router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
router.use(bodyParser.json({ limit: "50mb" }));

module.exports = router;
