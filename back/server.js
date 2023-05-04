const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "travel"
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('HelloWorld')
})
//DB테스트
app.get('/test', (req, res) => {
    connection.query('select * from sight',
    function(error,results,fields){
      console.log(results)
      if(error) throw error;
      res.json(results);
    })
})

app.listen(3001, () => {
  console.log('3001 port running')
})