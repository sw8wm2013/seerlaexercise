const express = require('express');

const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/usercontroller');

router.post('/signup', authController.signup, (req, res) => {
  res.status(200).send(res.locals.user);
});

router.get('/details', userController.getProfileDetails, (req, res) => {
  res.status(200).send(res.locals.allUsers);
});

router.post('/login', authController.login, (req, res) => {
  res.status(200).send(res.locals.password);
});

router.post('/shelf', userController.getUserID, userController.addShelf, (req, res) => {
  res.status(200).send(res.locals.shelf);
});

router.delete('/shelf', userController.deleteShelf, (req, res) => {
  res.status(200).send("Shelf Deleted");
});

module.exports = router;