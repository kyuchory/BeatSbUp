const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('HelloWorld')
})
app.get('/test', (req, res) => {
    console.log('hi')
    res.json({message: 'This is a test endpoint'})
})
app.listen(3001, () => {
  console.log('3001 port running')
})