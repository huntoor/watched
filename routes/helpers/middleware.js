const { validationResult } = require('express-validator');

module.exports = {
  handleErrors(templateFunc, dataCB) {
    return async (req, res, next) => {
      const errors = validationResult(req);

      if(!errors.isEmpty()) {
        let data = {};
        if (dataCB) {
          data = await dataCB(req);
        }

        return res.send('error');
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
  }
}