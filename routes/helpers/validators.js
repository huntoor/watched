const { check, validationResult } = require('express-validator');
const db = require('../../db/connect');

function usernameCheck(username) {
  return new Promise((resolve, reject) => {
    const sqlQuery = 'SELECT * FROM users WHERE username=?';
    db.query(sqlQuery, [username], (error, result) => {
      if (error) {
        return reject(error)
      }

      if (result.length > 0) {
        return reject();
      }

      return resolve()
    })
  })
}

module.exports = {
  checkUsername: check('username')
    .trim()
    .custom(async (username) => {
      // const sqlQuery = 'SELECT * FROM users WHERE username=?';
      // let sqlRes = db.query(sqlQuery, [username], (error, result) => {
      //   if (error) throw error;

      //   if (result.length > 0) {
      //     return "test1";
      //   }
      //   return "test2";
      // });

      // if (sqlRes) {
      //   console.log('user in use');
      //   throw new Error('username in use');
      // }

      await usernameCheck(username).catch(() => {
        throw new Error('username in use');
      });
    }),

  checkPassword: check('userPassword')
    .trim()
    .isLength({ min: 5, max: 20 })
    .withMessage("Error Password")

}