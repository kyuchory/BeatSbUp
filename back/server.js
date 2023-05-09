const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "manager",
  password: "test1234",
  database: "travel",
  port: "3306",
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL server: ' + error.stack);
    return;
  }
  console.log('Connected to MySQL server as id ' + connection.threadId);
});

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

app.get('/', (req, res) => {
  res.send('HelloWorld')
})
//DB테스트
app.get('/showdata', (req, res) => {
  connection.query(`select * from sight`,
    function (error, results, fields) {
      console.log(results)
      if (error) throw error;
      res.json(results);
    })
})

// 여행지 데이터 추가
app.post('/insertdata', async (req, res, next) => {
  let errorCount = 0;
  let insertCount = 0;
  const data = req.body.data;

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    try {
      const result = await connection.promise().query(
        "INSERT INTO sight (title, addr, cat, image, tel, contentId, contentTypeId) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [element.title, element.addr1, element.cat3, element.firstimage, element.tel, element.contentid, element.contenttypeid]
      );
      insertCount++;
      console.log('Insert data : ' + element.title);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        console.log('Duplicate data : ' + element.title);
        errorCount++;
      } else {
        console.log('Error while inserting data : ' + element.title);
        errorCount++;
      }
    }
  }

  console.log("에러 or 중복된 데이터 개수 : " + errorCount);
  console.log("추가된 데이터 개수 : " + insertCount);
  res.send('Data inserted successfully.');
});

// 여행지 데이터 전부 삭제
app.get('/initdata', (req, res, next) => {
  connection.query(`truncate sight`,
    function (error, results, fields) {
      console.log(results)
      if (error) throw error;
      res.json(results);
    })
});

app.listen(3001, () => {
  console.log('3001 port running')
})