const fetch = require('node-fetch');
const usersDB = require('../models/usermodel');
const userBooksDB = require('../models/userbooksmodel');
const shelfDB = require ('../models/shelfmodel');
const bookShelfDB = require('../models/bookshelfmodel');
const booksDB = require('../models/bookmodel');
const userName = require('../secret');
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
    .then(booksDB.query(`INSERT INTO books ()`))
    })
}

booksController.addBookByTitle = (req, res, next) => {
   
}















module.exports = booksController;