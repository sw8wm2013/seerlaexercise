const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const authController = require('./authController');
// const userController = require('./usercontroller');

const app = express();
const PORT = 3000; 

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cookieParser());
app.use('/build', express.static(path.resolve(__dirname, '../build')));
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '../index.html')));


// app.post('/signup', authController.signup, (req, res) => {
//   res.status(200).send(res.locals.user);
// });

// app.get('/user', userController.getProfileDetails, (req, res) => {
//   res.status(200).send(res.locals.allUsers);
// });

// app.post('/login', authController.login, (req, res) => {
//   res.status(200).send(res.locals.password);
// });

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log('Listening on Port 8080')
}); 