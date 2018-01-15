const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Models
const WebData = require('./models/WebData');

// Routes
const data = require('./routes/data');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS from app
const originWhiteList = ['http://localhost:4200'];
const corsOrigin = {
  origin: function(origin, callback) {
    const isWhitelisted = originWhiteList.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials: false
};

app.use(cors(corsOrigin));
app.use('/', data);

const dbAddress = 'mongodb://localhost:27017/';
const dbName = 'IntSights';

mongoose.connect(dbAddress + dbName, (error, db) => {
  if (error) {
    console.log('error');
  }
  console.log('success');
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.error(err);
  res.send(err);
});

module.exports = app;
