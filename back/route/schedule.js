const express = require('express');
const bodyParser = require("body-parser");

const router = express.Router();

const connection = require('../db');
connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL server(schedule): ' + error.stack);
        return;
    }
    console.log('Connected to MySQL server as id(schedule) ' + connection.threadId);
});

router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
router.use(bodyParser.json({ limit: "50mb" }));

module.exports = router;