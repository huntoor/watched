const express = require('express');

const homePageTemplate = require('../views/main/home');
const addShowTemplate = require('../views/main/addShow');
const { requireAuth } = require('./helpers/middleware')
const { addToDatabase,
        getUserID,
        getMovies,
        getSeries,
        getMatches,
        getBooks,
        deleteRow,
      } = require('./helpers/dbHelper');

const router = express.Router();

router.get('/home', requireAuth, async (req, res) => {
  const userID = await getUserID(req.session.username);

  const movies  = await getMovies(userID)
  const series  = await getSeries(userID);
  const matches = await getMatches(userID);
  const books   = await getBooks(userID);
  res.send(homePageTemplate(movies, series, matches, books));
  // res.send('Holaaaa!');
});

router.get('/add', requireAuth, (req, res) => {
  res.send(addShowTemplate());
});

router.post('/add', requireAuth, async (req, res) => {
  const userID = await getUserID(req.session.username);
  addToDatabase(req.body, userID);
  // res.redirect('/add');
  res.redirect('/home');
});

router.post('/home/delete', requireAuth, (req, res) => {
  const { table, id } = req.body;
  deleteRow(table, id)
  res.redirect('/home');
});

router.post('/home/edit', requireAuth, (req, res) => {
  res.send('under construction GTFO!!');
});

module.exports = router;