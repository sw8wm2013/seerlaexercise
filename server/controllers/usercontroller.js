const userDB = require('../models/database'); 

const userController = {
getProfileDetails: (req, res, next) => {
    userDB.query('SELECT * FROM users;', (err, data) => {
      if (err) {
        return next(err);
      } else {
        const users = data.rows;
        res.locals.allUsers = users;
        return next();
      }
    })
  },
}



module.exports = userController;
