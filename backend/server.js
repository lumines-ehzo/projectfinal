var express = require('express');
var cors = require('cors');
var app = express();
const mysql = require('mysql2');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const secret = 'secToken';
const saltRounds = 10;
require('dotenv').config();

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '20mb' }));
app.use(cors());

// Connect Database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'carparking',
});
console.log('Database  Connected!!');

// Auth
app.get('/api/users', function (req, res, next) {
  connection.query('SELECT * FROM `users', function (err, results, fields) {
    res.json(results);
  });
});
app.post('/api/register', function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    connection.execute(
      'INSERT INTO users (username,password,status) VALUES (?,?,?)',
      [username, hash, 'user'],
      function (err, results, fields) {
        if (err) {
          res.json({ status: 'error', message: err });
          return;
        }
        res.json({ status: 'ok' });
      }
    );
  });
});

app.post('/api/login', function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  connection.execute(
    'SELECT * FROM users WHERE username = ?',
    [username],
    function (err, users, fields) {
      if (err) {
        res.json({ status: 'error', message: err });
        return;
      }
      if (users.length == 0) {
        res.json({ status: 'error', message: 'User not found' });
        return;
      }
      bcrypt.compare(password, users[0].password, function (err, isLogin) {
        if (isLogin) {
          var token = jwt.sign({ username: users[0].username }, secret, {
            expiresIn: '1h',
          });
          res.json({ status: 'ok', message: 'Login Success!', token });
        } else {
          res.json({ status: 'error', message: 'Login Failed!' });
        }
      });
    }
  );
});

app.post('/api/authen', function (req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    var decoded = jwt.verify(token, secret);
    res.json({ status: 'ok', decoded });
  } catch (err) {
    res.json({ status: 'error', message: err.message });
  }
});

app.post('/api/auth/user', function (req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    var decoded = jwt.verify(token, secret);
    connection.query(
      'SELECT * FROM users WHERE username = ?',
      [decoded.username],
      function (err, results, fields) {
        res.json({ status: 'ok', user: results });
      }
    );
  } catch (err) {
    res.json({ status: 'error', message: err.message });
  }
});

//Carparking
app.get('/api/carparking', function (req, res, next) {
  connection.query('SELECT * FROM parking', function (err, results, fields) {
    res.json({ status: 'ok', data: results });
  });
});
app.get('/api/carparking/:id', function (req, res, next) {
  connection.query(
    'SELECT * FROM parking WHERE parking_id = ?',
    [req.params['id']],
    function (err, results, fields) {
      res.json({ status: 'ok', data: results });
    }
  );
});

// =============================
// @DESC::History Booking
// =============================
app.get('/api/booking', function (req, res, next) {
  connection.query('SELECT * FROM booking', function (err, results, fields) {
    res.json(results);
  });
});
app.get('/api/booking/:id', function (req, res, next) {
  connection.query(
    'SELECT * FROM booking WHERE booking_user = ?',
    [req.params['id']],
    function (err, results, fields) {
      res.json({ status: 'ok', data: results });
    }
  );
});

// app.get("/api/carparking", function (req, res, next) {
//   connection.query("SELECT * FROM `parking", function (err, results, fields) {
//     res.json(results);
//   });
// });

const PORT = process.env.PORT;
app.listen(6969, function () {
  console.log('Server is running on PORT:', PORT);
});
