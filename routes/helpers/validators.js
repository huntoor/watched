const { check, validationResult } = require('express-validator');
const db = require('../../db/connect');
const { usernameCheck } = require('./dbHelper');

module.exports = {
  checkUsername: check('username')
    .trim()
    .custom(async (username) => {
      await usernameCheck(username).catch(() => {
        throw new Error('username in use');
      });
    }),

  checkPassword: check('userPassword')
    .trim()
    .isLength({ min: 5, max: 20 })
    .withMessage("Password must be between 5 & 20 char")

}