const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000; 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


app.post('signup', (req, res) => {
  res.status(200).redirect('/secret');
});

app.post('/login', (req, res) => {
  res.status(200).redirect('/secret')
})

app.listen(PORT, () => {
  console.log('Listening on Port 8080')
}); 