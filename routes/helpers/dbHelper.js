const db = require('../../db/connect');

module.exports = {
  async usernameCheck(username) {
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
  },

  async getUserID(username) {
    return new Promise((resolve, reject) => {
      const sqlQuery = 'SELECT id FROM watched.users WHERE username=?'
      db.query(sqlQuery, [ username ], (error, result) => {
        if (error) throw reject(error);
  
        resolve(result[0]['id']);
      });
    });
  },

  async addToDatabase(body, userID) {
    if(body.movie_name) {
      const {movie_name, movie_description} = body;
      const sqlQuery = 'INSERT INTO movies (movie_name, movie_description, user_id) VALUES (?,?,?)'
      db.query(sqlQuery, [movie_name, movie_description, userID], (error, result) => {
        if (error) throw error;
      });

    } else if (body.series_name) {
      const {series_name, series_description, watched_episodes} = body;
      const sqlQuery = 'INSERT INTO series (series_name, series_description, watched_episodes, user_id) VALUES (?,?,?,?)'
      db.query(sqlQuery, [series_name, series_description, watched_episodes, userID], (error, result) => {
        if (error) throw error;
      });

    } else if (body.team_one) {
      const { team_one, team_two, tournament, stadium, match_date, match_description } = body;
      const sqlQuery = 'INSERT INTO watched.matches (team_one, team_two, tournament, stadium, date, match_description, user_id) VALUES (?,?,?,?,?,?,?)'
      db.query(sqlQuery, [team_one, team_two, tournament, stadium, match_date, match_description, userID], (error, result) => {
        if (error) throw error;
      });

    } else if (body.book_name) {
      const { book_name, book_auther, book_description } = body;
      const sqlQuery = 'INSERT INTO watched.books (book_name, book_auther, book_description, user_id) VALUES (?,?,?,?);';
      db.query(sqlQuery, [ book_name, book_auther, book_description, userID ], (error, result) => {
        if (error) throw error;
      })
    } else {
      throw new Error('WTF!!!');
    }
  },
  getFromDatabase(userID, showType) {  // for testing
    return new Promise((resolve, reject) => {
      if (showType === "movie") {
        const sqlQuery = '';
      } else if (showType === "series") {
        const sqlQuery = '';
      } else if (showType === "match") {
        const sqlQuery = '';
      } else {
        reject();
      }
      db.query(sqlQuery, [ userID ], (error, result) => {
        if(error) throw reject(error);

        resolve(result);
      });
    });
  },
  async getMovies(userID) { 
    return new Promise((resolve, reject) => {
      const sqlQuery = 'SELECT movie_name,movie_description,id FROM watched.movies WHERE user_id=?';
      db.query(sqlQuery, [ userID ], (error, result) => {
        if(error) throw reject(error);

        resolve(result);
      });
    });
  },
  async getSeries(userID) { 
    return new Promise((resolve, reject) => {
      const sqlQuery = 'SELECT series_name,series_description,watched_episodes,id FROM watched.series WHERE user_id=?';
      db.query(sqlQuery, [ userID ], (error, result) => {
        if(error) throw reject(error);

        resolve(result);
      });
    });
  },
  async getMatches(userID) {
    return new Promise((resolve, reject) => {
      const sqlQuery = 'SELECT team_one,team_two,tournament,stadium,date,match_description,id FROM watched.matches WHERE user_id=? ';
      db.query(sqlQuery, [ userID ], (error, result) => {
        if(error) throw reject(error);

        resolve(result);
      });
    });
   },
   async getBooks(userID) {
    return new Promise((resolve, reject) => {
      const sqlQuery = 'SELECT id,book_name,book_auther,book_description from watched.books WHERE user_id=?';
      db.query(sqlQuery, [ userID ], (error, result) => {
        if (error) throw reject(error)

        resolve(result);
      })
    })
   },
   deleteRow(table, id) {
    if (table === 'books') {
      const sqlQuery = 'DELETE FROM watched.book_review WHERE book_id=?';
      db.query(sqlQuery, [ id ], (error, result) => {
        if(error) throw error;
      });
    } else if (table === 'movies') {
      const sqlQuery = 'DELETE FROM watched.movie_review WHERE movie_id=?';
      db.query(sqlQuery, [ id ], (error, result) => {
        if(error) throw error;
      });
    } else if (table === 'series') {
      const sqlQuery = 'DELETE FROM watched.series_review WHERE series_id=?';
      db.query(sqlQuery, [ id ], (error, result) => {
        if(error) throw error;
      });
    }
    const sqlQuery = `DELETE FROM watched.${table} WHERE id=?`;
    db.query(sqlQuery, [ id ], (error, result) => {
      if(error) throw error;
    });
   },
   isReviewd(table, id) {
    return new Promise((resolve, reject) => {
      if (table === 'books') {
        const sqlQuery = 'SELECT * FROM watched.book_review WHERE book_id=?';
        db.query(sqlQuery, [ id ], (error, result) => {
          if (error || result.length === 0) reject(-1);
          resolve(result);
        });
      } else if (table === 'movies') {
        const sqlQuery = 'SELECT * FROM watched.movie_review WHERE movie_id=?';
        db.query(sqlQuery, [ id ], (error, result) => {
          if (error || result.length === 0) reject(-1);
          resolve(result);
        });
      } else if (table === 'series') {
        const sqlQuery = 'SELECT * FROM watched.series_review WHERE series_id=?';
        db.query(sqlQuery, [ id ], (error, result) => {
          if (error || result.length === 0) reject(-1);
          resolve(result);
        });
      } else {
        reject(-1);
      }
    });
   },
   addReview(reqBody) {
    const {name, review, rating, userID, id, table} = reqBody;
     if (table === 'books') {
      const sqlQuery = "INSERT INTO watched.book_review (book_name, book_rating, book_review, book_id, user_id) VALUES (?,?,?,?,?);"
      db.query(sqlQuery, [name, rating, review, id, userID], (error, result) => {
        if (error) throw error;
      });
    } else if (table === 'movies') {
      const sqlQuery = "INSERT INTO watched.movie_review (movie_name, movie_rating, movie_review, movie_id, user_id) VALUES (?,?,?,?,?);"
      db.query(sqlQuery, [name, rating, review, id, userID], (error, result) => {
        if (error) throw error;
      });
    } else if (table === 'series') {
      const sqlQuery = "INSERT INTO watched.series_review (series_name, series_rating, series_review, series_id, user_id) VALUES (?,?,?,?,?);"
      db.query(sqlQuery, [name, rating, review, id, userID], (error, result) => {
        if (error) throw error;
      });
    } else {
      console.log("eroor in addReview");
    }
   }
}