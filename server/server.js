const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authController = require('./authController');
const userController = require('./usercontroller');

const app = express();
const PORT = 8080; 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


app.post('/signup', authController.signup, (req, res) => {
  res.status(200).send(res.locals.user);
});

app.get('/user', userController.getProfileDetails, (req, res) => {
  res.status(200).send(res.locals.allUsers);
});


app.post('/login', authController.login, (req, res) => {
  res.status(200).send(res.locals.password);
});

app.listen(PORT, () => {
  console.log('Listening on Port 8080')
}); 