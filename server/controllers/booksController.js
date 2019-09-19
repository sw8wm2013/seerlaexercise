const fetch = require('node-fetch');
const DB = require('../models/database');
// Bconst userName = require('../secret');
const booksController = {};


booksController.addBookByAuthor = (req, res, next) => {
    function findNames(string) {
        string.toLowerCase();
        const newNames = string.toLowerCase().split(' ');
        return {
            firstName: newNames[0],
            lastName: newNames[1],
        };
    }
    const names = findNames(req.body.author);
    const firstName = names.firstName;
    const lastName = names.lastName;
    fetch(`http://www.librarything.com/api_getdata.php?${userName}=${firstName}${lastName}`)
    .then(data => data.json())
    .then((data) => {
      res.locals.bookTitles = data.results;
    })
    .then(booksDB.query(`INSERT INTO books ()`))
}

booksController.addBookByTitle = (req, res, next) => {
   
}

booksController.testDatabase = (req, res, next) => {
    const {isbn, bookTitle, author, genre, yearPublished, language, medium, publisher} = req.body; 
    console.log(bookTitle)
    const params = [isbn, bookTitle, author, genre, yearPublished, language, medium, publisher]
    DB.query(`INSERT INTO books (
        isbn, book_title, author, genre, year_published, language, medium, publisher
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *;`, params, (err, data) => {
        if (err) {
          console.log(err)
          return next({log: { where: "Check books", message: err}});
        } else {
          const book = data.rows;
          console.log(book);
          res.locals.book = book;
          return next()
        }
      })
};

booksController.putBookOnShelf = (req, res, next) => {
    const {bookID, shelfID} = req.body;
    const params = [bookID, shelfID]; 
    DB.query(`INSERT INTO book_shelf (book_id, shelf_id) VALUES ($1, $2) returning *;`, params, (err, data) => {
        if (err) {
          return next({log: { where: "Check bookONSHelf", message: err}});
        } else {
          const bookShelf = data.rows;
          res.locals.bookshelf = bookShelf;
          console.log(res.locals.bookshelf)
          return next()
        }
      });
};

















module.exports = booksController;