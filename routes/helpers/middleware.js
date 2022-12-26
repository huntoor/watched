const { validationResult } = require('express-validator');
const { isReviewd } = require('./dbHelper');
const reviewTemplate = require('../../views/main/review/showReview');
const addReviewTemplate = require('../../views/main/review/addReview');

module.exports = {
  handleErrors(templateFunc, dataCB) {
    return async (req, res, next) => {
      const errors = validationResult(req);

      if(!errors.isEmpty()) {
        let data = {};
        if (dataCB) {
          data = await dataCB(req);
        }
        return res.send(errors.errors[0].msg);
      }
      
      next();
    }
  },

  requireAuth(req, res, next) {
    if (!req.session.username) {
      res.redirect('/login');
      return;
    }
    
    next();
  },

  async checkReview(req, res, next) {
    const { table, id } = req.body;
    req.session.content = req.body;
    try {
      const reviewResult = await isReviewd(table, id);
      // res.redirect('/home/showReview');
      if (table === 'books') {
        const {book_name, book_rating, book_review} = reviewResult[0];
        res.send(reviewTemplate(book_name, book_review, book_rating));
      } else if (table === 'movies') {
        const {movie_name, movie_rating, movie_review} = reviewResult[0];
        res.send(reviewTemplate(movie_name, movie_review, movie_rating));
        
      } else if (table === 'series') {
        const {series_name, series_rating, series_review} = reviewResult[0];
        res.send(reviewTemplate(series_name, series_review, series_rating));

      } else {

        res.send("Error");
      }
    } catch (err) {
      console.log(err);
      res.redirect('/home/addReview');
      // if (table === 'books') {
      //   const {book_name, book_rating, book_review} = reviewResult[0];
      //   res.send(reviewTemplate(book_name, book_review, book_rating));
      // } else if (table === 'movies') {
      //   const {movie_name, movie_rating, movie_review} = reviewResult[0];
      //   res.send(reviewTemplate(movie_name, movie_review, movie_rating));
        
      // } else if (table === 'series') {
      //   const {series_name, series_rating, series_review} = reviewResult[0];
      //   res.send(reviewTemplate(series_name, series_review, series_rating));

      // } else {
      //   res.send("Error");
      // }
    }
    next();  
  }
}