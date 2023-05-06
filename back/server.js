const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "localhost",
  user: "manager",
  password: "test1234",
  database: "travel"
});

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

app.get('/', (req, res) => {
  res.send('HelloWorld')
})
//DB테스트
app.get('/test', (req, res) => {
  connection.query(`select * from sight`,
    function (error, results, fields) {
      console.log(results)
      if (error) throw error;
      res.json(results);
    })
})

app.post('/insertdata', (req, res, next) => {
  const data = req.body.data;
  data.map((element, index) => {
    // console.log(element.title);
    connection.query(
      "INSERT INTO sight (title, addr, cat, image, tel, contentId, contentTypeId) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [element.title, element.addr1, element.cat3, element.firstimage, element.tel, element.contentid, element.contenttypeid],
      function (error, results, fields) {
        if (error) {  // 중복되었으면
          // console.log('중복 발생');
        }
        else {  // 추가된 데이터 출력
          console.log('Insert data : ' + element.title);
        }
      }
    );
  });
  res.send('Data inserted successfully.');
});

app.listen(3001, () => {
  console.log('3001 port running')
})