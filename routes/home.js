const express = require('express');

const homePageTemplate = require('../views/main/home');
const addShowTemplate = require('../views/main/addShow');
const { requireAuth } = require('./helpers/middleware')
const { addToDatabase, getUserID, getMovies, getSeries, getMatches } = require('./helpers/dbHelper');

const router = express.Router();

router.get('/home', requireAuth, async (req, res) => {
  const userID = await getUserID(req.session.username);

  const movies = await getMovies(userID)
  const series = await getSeries(userID);
  const matches = await getMatches(userID);


  // const myMovies = [
  //   {
  //     name: "MyMovie",
  //     description: "MyDescription",
  //     episodes: 123
  //   },
  //   {
  //     name: "MyMovie2",
  //     description: "MyDescription2",
  //     episodes: 1234
  //   }
  // ];

  res.send(homePageTemplate(movies, series, matches));
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

module.exports = router;