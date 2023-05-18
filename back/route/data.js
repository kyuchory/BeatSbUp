const express = require('express');
const mysql = require('mysql2');


const router = express.Router();

const connection = require('../db');


connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL server(data): ' + error.stack);
        return;
    }
    console.log('Connected to MySQL server as id(data) ' + connection.threadId);
});

router.get('/show', (req, res) => {
    connection.query(`select * from sight`,
        function (error, results, fields) {
            console.log(results.length + '개의 데이터')
            if (error) throw error;
            res.json(results);
        })
})

// 여행지 데이터 추가
router.post('/insert', async (req, res, next) => {
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
            console.log('Insert data : ' + element.title);
            insertCount++;
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                // console.log('Duplicate data : ' + element.title);
                errorCount++;
            } else {
                console.log('Error while inserting data : ' + error + '\ntitle : ' + JSON.stringify(element));
                errorCount++;
            }
        }
    }

    console.log("에러 or 중복된 데이터 개수 : " + errorCount);
    console.log("추가된 데이터 개수 : " + insertCount);
    res.send('Data inserted successfully.');
});

// 여행지 데이터 전부 삭제
router.get('/init', (req, res, next) => {
    connection.query(`truncate sight`,
        function (error, results, fields) {
            console.log(results)
            if (error) throw error;
            res.json(results);
        })
});

router.post('/recommand', (req, res, next) => {
    const type = req.body.type;
    const cat = req.body.cat;

    console.log(typeString + cat);
    const query = `SELECT * FROM sight WHERE contentTypeId = ${type}${cat ? ` AND cat LIKE '${cat}%'` : ''}`;

    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});

module.exports = router;