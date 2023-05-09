const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const session = require('express-session')
var MySQLStore = require('express-mysql-session')(session);
var sessionStore = new MySQLStore(sessionOption);
var sessionOption = {  
  host: 'localhost',
  user: 'manager',
  password: 'test1234',
  database: 'travel',
  port: 3306,
  
  clearExpired : true ,             // 만료된 세션 자동 확인 및 지우기 여부
  checkExpirationInterval: 10000,   // 만료된 세션이 지워지는 빈도 (milliseconds)
  expiration: 1000*60*60*2,         // 유효한 세션의 최대 기간 2시간으로 설정 (milliseconds) 
};
app.use(session({  
	key: 'session_cookie_name',
  secret: '~',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}))
const connection = mysql.createConnection({
  host: "localhost",
  user: "manager",
  password: "test1234",
  database: "travel"
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
//권한 있으면 True반환 없으면 False반환
app.get('/authcheck', (req, res) => {      
  const sendData = { isLogin: "" };
  if (req.session.is_logined) {
      sendData.isLogin = "True"
  } else {
      sendData.isLogin = "False"
  }
  res.send(sendData);
})
//로그아웃하면 메인페이지로
app.get('/logout', function (req, res) {
  req.session.destroy(function (err) {
      res.redirect('/');
  });
});
app.post("/login", (req, res) => { // 데이터 받아서 결과 전송
  const username = req.body.userId;
  const password = req.body.userPassword;
  const sendData = { isLogin: "" };

  if (username && password) {             // id와 pw가 입력되었는지 확인
      connection.query('SELECT * FROM userTable WHERE username = ?', [username], function (error, results, fields) {
          if (error) throw error;
          if (results.length > 0) {       // db에서의 반환값이 있다 = 일치하는 아이디가 있다.      

              bcrypt.compare(password , results[0].userchn, (err, result) => {    // 입력된 비밀번호가 해시된 저장값과 같은 값인지 비교

                  if (result === true) {                  // 비밀번호가 일치하면
                      req.session.is_logined = true;      // 세션 정보 갱신
                      req.session.nickname = username;
                      req.session.save(function () {
                          sendData.isLogin = "True"
                          res.send(sendData);
                      });
                      connection.query(`INSERT INTO logTable (created, username, action, command, actiondetail) VALUES (NOW(), ?, 'login' , ?, ?)`
                          , [req.session.nickname, '-', `React 로그인 테스트`], function (error, result) { });
                  }
                  else{                                   // 비밀번호가 다른 경우
                      sendData.isLogin = "로그인 정보가 일치하지 않습니다."
                      res.send(sendData);
                  }
              })                      
          } else {    // db에 해당 아이디가 없는 경우
              sendData.isLogin = "아이디 정보가 일치하지 않습니다."
              res.send(sendData);
          }
      });
  } else {            // 아이디, 비밀번호 중 입력되지 않은 값이 있는 경우
      sendData.isLogin = "아이디와 비밀번호를 입력하세요!"
      res.send(sendData);
  }
});
app.post("/signin", (req, res) => {  // 데이터 받아서 결과 전송
  const username = req.body.userId;
  const password = req.body.userPassword;
  const password2 = req.body.userPassword2;
  
  const sendData = { isSuccess: "" };

  if (username && password && password2) {
    connection.query('SELECT * FROM userTable WHERE username = ?', [username], function(error, results, fields) { // DB에 같은 이름의 회원아이디가 있는지 확인
          if (error) throw error;
          if (results.length <= 0 && password == password2) {         // DB에 같은 이름의 회원아이디가 없고, 비밀번호가 올바르게 입력된 경우
              const hasedPassword = bcrypt.hashSync(password, 10);    // 입력된 비밀번호를 해시한 값
              connection.query('INSERT INTO userTable (username, userchn) VALUES(?,?)', [username, hasedPassword], function (error, data) {
                  if (error) throw error;
                  req.session.save(function () {                        
                      sendData.isSuccess = "True"
                      res.send(sendData);
                  });
              });
          } else if (password != password2) {                     // 비밀번호가 올바르게 입력되지 않은 경우                  
              sendData.isSuccess = "입력된 비밀번호가 서로 다릅니다."
              res.send(sendData);
          }
          else {                                                  // DB에 같은 이름의 회원아이디가 있는 경우            
              sendData.isSuccess = "이미 존재하는 아이디 입니다!"
              res.send(sendData);  
          }            
      });        
  } else {
      sendData.isSuccess = "아이디와 비밀번호를 입력하세요!"
      res.send(sendData);  
  }
  
});
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
      } else {
        console.log('Error while inserting data : ' + element.title);
      }
      errorCount++;
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