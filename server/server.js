const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authController = require('./controllers/authController');
const userController = require('./controllers/usercontroller');
const booksController = require('./controllers/booksController');

const userRouter = require('./routes/user');
const app = express();
const PORT = 3000; 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/user', userRouter);

app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.get('/*', (req, res, next) => res.sendFile(path.join(__dirname, '../index.html')));

// app.get('/', authController.signup, (req, res) => {
//   res.status(200).send(res.locals.user);
// });

app.post('/addTitle', booksController.addBookByTitle, (req, res) => {
  res.status(200).send(res.locals.results)
})

app.post('/signup', authController.signup, (req, res) => {
  res.status(200).send(res.locals.user);
});



app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: {err: 'An error occurred'},
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log('Listening on Port 3000')
}); 