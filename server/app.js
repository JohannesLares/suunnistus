const express = require('express');
const mongoose = require('mongoose');
const conf = require('./utils/config');

// Create the app
const app = express();

console.log('-----------------------------');
console.log('App environment: ', conf.envir);
console.log('Connecting to Mongodb: ', conf.mongoUrl);
console.log('-----------------------------');

// Connect to MongoDB
mongoose.connect(conf.mongoUrl)
    .then(() => {
      console.log('-----------------------------');
      console.log('Connected to MongoDB');
      console.log('-----------------------------');
    })
    .catch((error) => {
      console.log('-----------------------------');
      console.log('error connection to MongoDB:', error.message);
      console.log('-----------------------------');
    });

module.exports = app;
