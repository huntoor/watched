const db = require('../../db/connect');

module.exports = {
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

    } else {
      throw new Error('WTF!!!');
    }
  },

  getFromDatabase(userID, showType) {
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
    db.query('SELECT * FROM watched.users', (error, result) => {
      result.forEach(element => {
        console.log(element);
      });
    });
  },
  async getMovies(userID) { 
    return new Promise((resolve, reject) => {
      const sqlQuery = 'SELECT movie_name,movie_description FROM watched.movies WHERE user_id=?';
      db.query(sqlQuery, [ userID ], (error, result) => {
        if(error) throw reject(error);

        resolve(result);
      });
    });
  },
  async getSeries(userID) { 
    return new Promise((resolve, reject) => {
      const sqlQuery = 'SELECT series_name,series_description,watched_episodes FROM watched.series WHERE user_id=?';
      db.query(sqlQuery, [ userID ], (error, result) => {
        if(error) throw reject(error);

        resolve(result);
      });
    });
  },
  async getMatches(userID) {
    return new Promise((resolve, reject) => {
      const sqlQuery = 'SELECT team_one,team_two,tournament,stadium,date,match_description FROM watched.matches WHERE user_id=? ';
      db.query(sqlQuery, [ userID ], (error, result) => {
        if(error) throw reject(error);

        resolve(result);
      });
    });
   }
}