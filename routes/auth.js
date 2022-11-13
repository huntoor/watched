const express = require('express');
const { validationResult } = require('express-validator');

const signInTemplate = require('../views/auth/signIn');
const signUpTemplate = require('../views/auth/signUp');
const db = require('../db/connect');
const { checkUsername, checkPassword } = require('./helpers/validators');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/login');
})

// Login page and functionality
router.get("/login", (req, res) => {
  res.send(signInTemplate());
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  if (username && password) {
    const sqlQuery = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(sqlQuery, [username, password], (error, result, field) => {
      if (error) throw error;

      if (result.length > 0) {
        req.session.loggedin = true;
        req.session.username = username;

        // res.send(`logged in. first_name: ${result[0].first_name}`);
        res.redirect('/home');
      } else {
        res.send('Incorrect Username and/or Password!');
      }
      res.end();
    });
  }
});


// Signup Page
router.get('/signup', (req, res) => {
  res.send(signUpTemplate());
});

router.post(
  '/signup',
  checkUsername,
  checkPassword,
  async (req, res) => {
    let { firstName, lastName, username, userPassword } = req.body;
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send('Fail');
    }

    const sqlQuery = 'INSERT INTO users (first_name, last_name, username, password, isAdmin) VALUES (?,?,?,?,0)';
    db.query(sqlQuery, [firstName, lastName, username, userPassword], (error, result) => {
      if (error) throw error;

      req.session.loggedin = true;
      req.session.username = username;
      res.send('Success');
    });
  });

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.status(400).send('Unable to log out')
    } else {
      // res.send('Logout successful')
      res.redirect('/login')
    }
  });
});

module.exports = router;
