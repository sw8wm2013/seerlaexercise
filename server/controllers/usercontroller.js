const DB = require('../models/database'); 

const userController = {
getProfileDetails: (req, res, next) => {
    DB.query('SELECT * FROM users;', (err, data) => {
      if (err) {
        return next(err);
      } else {
        const users = data.rows;
        res.locals.allUsers = users;
        return next();
      }
    })
  },

  getUserID: (req, res, next) => {
    const { userName } = req.body;
    const param = [userName];
    DB.query(`SELECT id FROM users WHERE username = ($1);`, param, (err, data) => {
      if (err) {
        return next({log: { where: "Check addshelf", message: err}});
      } else {
        const id = data.rows[0].id;
        res.locals.userID = id;
        // console.log(res.locals.userID)
        return next()
      }
    });
  },

  addShelf: (req, res, next) => {
    const {shelfName, shelfDescription, } = req.body;
   // console.log(res.locals.id)
    const params = [res.locals.userID, shelfName, shelfDescription];
    
    DB.query(`INSERT INTO shelf (user_id, shelf_name, shelf_description) VALUES ($1, $2, $3) returning *;`, params, (err, data) => {
      if (err) {
        console.log(err)
        return next({log: { where: "Check addshelf", message: err}});
      } else {
        const shelf = data.rows[0]
        console.log(shelf);
        res.locals.shelf = shelf;
        return next()
      }
    })
  },

  deleteShelf: (req, res, next) => {
    const { shelfID } = req.body;
    const param = [shelfID];
    DB.query(`DELETE from shelf WHERE id = $1;`, param, (err, data) => {
      if (err) {
        console.log(err)
        return next({log: { where: "Check deleteShelf", message: err}});
      } else {
        return next()
      }
    })
  },

  addBookReview: (req, res, next) => {
    const { bookID, rating, review, status } = req.body;
    const params = [res.locals.userID, bookID, rating, review, status];
    DB.query(`INSERT INTO user_books (user_id, book_id, rating, review, status) VALUES ($1, $2, $3, $4, $5) returning *;`, params, (err, data) => {
      if (err) {
        console.log(err)
        return next({log: { where: "Check bookreview", message: err}});
      } else {
        const bookReview = data.rows;
        res.locals.bookReview = bookReview;
        console.log(res.locals.bookReview);
        return next();
      }
    }) 
  },

  addStatus: (req, res, next) => {
    const { bookID, rating, status } = req.body;
    const params = [res.locals.userID, bookID, rating, status];
    DB.query(`INSERT INTO user_books (user_id, book_id, rating, status) VALUES ($1, $2, $3, $4) returning *;`, params, (err, data) => {
      if (err) {
        console.log(err)
        return next({log: { where: "Check bookreview", message: err}});
      } else {
        const status = data.rows;
        res.locals.status = status;
        console.log(res.locals.status);
        return next();
      }
    }) 
  },

  addRating: (req, res, next) => {
    const { bookID, rating, status } = req.body;
    const params = [res.locals.userID, bookID, rating, status];
    DB.query(`INSERT INTO user_books (user_id, book_id, rating, status) VALUES ($1, $2, $3, $4) returning *;`, params, (err, data) => {
      if (err) {
        console.log(err)
        return next({log: { where: "Check bookreview", message: err}});
      } else {
        const status = data.rows;
        res.locals.status = status;
        console.log(res.locals.status);
        return next();
      }
    }) 
  },

}



module.exports = userController;
