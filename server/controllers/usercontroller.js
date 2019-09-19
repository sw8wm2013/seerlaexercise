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
        next()
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
        next()
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
        next()
      }
    })
  },

}



module.exports = userController;
