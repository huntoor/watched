const express = require("express");
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config()

const authRouter = require('./routes/auth');
const homeRouter = require('./routes/home');
// const cookieSession = require('cookie-session');


const app = express();

app.use(session({
	secret: 'secret',
  resave: false,
	saveUninitialized: false
}));
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(authRouter);
app.use(homeRouter);



// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'hunter',
//   password: 'password',
//   database: 'test'
// });

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/views/signUp.html'));
// });

// db.connect(function (err) {
//   if (err) {
//     console.log('Error connecting to Database', err);
//     return;
//   }
//   console.log('Connection established');
// });

// app.get('/users', (req, res) => {
//   const sql = 'SELECT * FROM tableName';

//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

app.listen(process.env.PORT, () => console.log("Server Up"));