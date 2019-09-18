const app = require('express')();
const path = require ('path');
const bodyParser = require ('body-parser');
const cookieParser = require ('cookie-parser');
const booksRouter = require('./routes/books');



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


app.listen(3000, () => {
    console.log('You are now listening on port 3000');
})