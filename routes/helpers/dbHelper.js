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
      db.query(sqlQuery, [username], (error, result) => {
        if (error) throw reject(error);

        resolve(result[0]['id']);
      });
    });
  },

  async addToDatabase(body, userID) {
    console.log(body);
    if (body.movie_name) {
      const { movie_name, movie_description } = body;
      const sqlQuery = 'INSERT INTO movies (movie_name, movie_description, want_to_watch, user_id) VALUES (?,?,?,?)';
      if (body.want_to_watch_movie) {
        console.log("wantToWatch");
        db.query(sqlQuery, [movie_name, movie_description, 1, userID], (error, result) => {
          if (error) throw error;
        });
      } else {
        db.query(sqlQuery, [movie_name, movie_description, 0, userID], (error, result) => {
          if (error) throw error;
        });
        console.log("watched");
      }

    } else if (body.series_name) {
      const { series_name, series_description, watched_episodes } = body;
      const sqlQuery = 'INSERT INTO series (series_name, series_description, watched_episodes, want_to_watch, user_id) VALUES (?,?,?,?,?)';
      if (body.want_to_watch_series) {
        db.query(sqlQuery, [series_name, series_description, watched_episodes, 1, userID], (error, result) => {
          if (error) throw error;
        });
      } else {
        db.query(sqlQuery, [series_name, series_description, watched_episodes, 0, userID], (error, result) => {
          if (error) throw error;
        });
      }

    } else if (body.team_one) {
      const { team_one, team_two, tournament, stadium, match_date, match_description } = body;
      const sqlQuery = 'INSERT INTO watched.matches (team_one, team_two, tournament, stadium, date, match_description, want_to_watch, user_id) VALUES (?,?,?,?,?,?,?,?)'
      if (body.want_to_watch_match) {
        db.query(sqlQuery, [team_one, team_two, tournament, stadium, match_date, match_description, 1, userID], (error, result) => {
          if (error) throw error;
        });
      } else {
        db.query(sqlQuery, [team_one, team_two, tournament, stadium, match_date, match_description, 0, userID], (error, result) => {
          if (error) throw error;
        });
      }

    } else if (body.book_name) {
      const { book_name, book_auther, book_description } = body;
      const sqlQuery = 'INSERT INTO watched.books (book_name, book_auther, book_description, want_to_read, user_id) VALUES (?,?,?,?,?);';
      if (body.want_to_read) {
        db.query(sqlQuery, [book_name, book_auther, book_description, 1, userID], (error, result) => {
          if (error) throw error;
        })
      } else {
        db.query(sqlQuery, [book_name, book_auther, book_description, 0, userID], (error, result) => {
          if (error) throw error;
        })
      }
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
      db.query(sqlQuery, [userID], (error, result) => {
        if (error) throw reject(error);

        resolve(result);
      });
    });
  },
  async getMovies(userID) {
    return new Promise((resolve, reject) => {
      const sqlQuery = 'SELECT movie_name,movie_description,id,want_to_watch FROM watched.movies WHERE user_id=?';
      db.query(sqlQuery, [userID], (error, result) => {
        if (error) throw reject(error);

        resolve(result);
      });
    });
  },
  async getSeries(userID) {
    return new Promise((resolve, reject) => {
      const sqlQuery = 'SELECT series_name,series_description,watched_episodes,want_to_watch,id FROM watched.series WHERE user_id=?';
      db.query(sqlQuery, [userID], (error, result) => {
        if (error) throw reject(error);

        resolve(result);
      });
    });
  },
  async getMatches(userID) {
    return new Promise((resolve, reject) => {
      const sqlQuery = 'SELECT team_one,team_two,tournament,stadium,date,match_description,want_to_watch,id FROM watched.matches WHERE user_id=? ';
      db.query(sqlQuery, [userID], (error, result) => {
        if (error) throw reject(error);

        resolve(result);
      });
    });
  },
  async getBooks(userID) {
    return new Promise((resolve, reject) => {
      const sqlQuery = 'SELECT id,book_name,book_auther,book_description,want_to_read from watched.books WHERE user_id=?';
      db.query(sqlQuery, [userID], (error, result) => {
        if (error) throw reject(error)

        resolve(result);
      })
    })
  },
  deleteRow(table, id) {
    if (table === 'books') {
      const sqlQuery = 'DELETE FROM watched.book_review WHERE book_id=?';
      db.query(sqlQuery, [id], (error, result) => {
        if (error) throw error;
      });
    } else if (table === 'movies') {
      const sqlQuery = 'DELETE FROM watched.movie_review WHERE movie_id=?';
      db.query(sqlQuery, [id], (error, result) => {
        if (error) throw error;
      });
    } else if (table === 'series') {
      const sqlQuery = 'DELETE FROM watched.series_review WHERE series_id=?';
      db.query(sqlQuery, [id], (error, result) => {
        if (error) throw error;
      });
    }
    const sqlQuery = `DELETE FROM watched.${table} WHERE id=?`;
    db.query(sqlQuery, [id], (error, result) => {
      if (error) throw error;
    });
  },
  isReviewd(table, id) {
    return new Promise((resolve, reject) => {
      if (table === 'books') {
        const sqlQuery = 'SELECT * FROM watched.book_review WHERE book_id=?';
        db.query(sqlQuery, [id], (error, result) => {
          if (error || result.length === 0) reject(-1);
          resolve(result);
        });
      } else if (table === 'movies') {
        const sqlQuery = 'SELECT * FROM watched.movie_review WHERE movie_id=?';
        db.query(sqlQuery, [id], (error, result) => {
          if (error || result.length === 0) reject(-1);
          resolve(result);
        });
      } else if (table === 'series') {
        const sqlQuery = 'SELECT * FROM watched.series_review WHERE series_id=?';
        db.query(sqlQuery, [id], (error, result) => {
          if (error || result.length === 0) reject(-1);
          resolve(result);
        });
      } else {
        reject(-1);
      }
    });
  },
  addReview(reqBody) {
    const { name, review, rating, userID, id, table } = reqBody;
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
  },
  isWatched(table, id) {
    return new Promise((resolve, reject) => {
      if (table === 'books') {
        const sqlQuery = 'SELECT want_to_read FROM watched.books WHERE id=?';
        db.query(sqlQuery, [id], (error, result) => {
          if (error) reject(-1);
          resolve(result[0].want_to_read);
        });
      } else if (table === 'movies') {
        const sqlQuery = 'SELECT want_to_watch FROM watched.movies WHERE id=?';
        db.query(sqlQuery, [id], (error, result) => {
          console.log(result[0].want_to_watch);
          if (error) reject(-1);
          resolve(result[0].want_to_watch);
        });
      } else if (table === 'series') {
        const sqlQuery = 'SELECT want_to_watch FROM watched.series WHERE id=?';
        db.query(sqlQuery, [id], (error, result) => {
          if (error) reject(-1);
          resolve(result[0].want_to_watch);
        });
      } else if(table === 'matches') {
        const sqlQuery = 'SELECT want_to_watch FROM watched.matches WHERE id=?';
        db.query(sqlQuery, [id], (error, result) => {
          if (error) reject(-1);
          resolve(result[0].want_to_watch);
        });
      } else {
        reject(0);
      }
    });
  },
  toggleWatch(table, isWatched, id) {
    if (table === 'books') {
      const sqlQuery = `UPDATE watched.books SET want_to_read = ${!isWatched} WHERE id=?;`;
      db.query(sqlQuery, [id], (error, result) => {
        if (error) throw error;
      });
    } else if (table ==='movies') {
      const sqlQuery = `UPDATE watched.movies SET want_to_watch = ${!isWatched} WHERE id=?;`;
      db.query(sqlQuery, [id], (error, result) => {
        if (error) throw error;
      });

    } else if (table === 'series') {
      const sqlQuery = `UPDATE watched.series SET want_to_watch = ${!isWatched} WHERE id=?;`;
      db.query(sqlQuery, [id], (error, result) => {
        if (error) throw error;
      });
    } else if (table === 'matches') {
      const sqlQuery = `UPDATE watched.matches SET want_to_watch = ${!isWatched} WHERE id=?;`;
      db.query(sqlQuery, [id], (error, result) => {
        if (error) throw error;
      });
    } else {
      console.log('something went wrong in toggleWatch')
    }
    if (isWatched) {
      const sqlQuery = 'UPDATE watched.movies SET want_to_watch = 1 WHERE id=?'
    }
  }
}