const cookieSession = require('cookie-session');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionConfig = require('./session');

const serverConfig = (app) => {
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(cookieParser());
  app.use(
    cookieSession({
      name: 'user_sid',
      keys: process.env.SECRET,
      cookie: {
        maxAge: 1000 * 60 * 60 * 12,
      },
    })
  );

  app.use(session(sessionConfig));
  app.disable('x-powered-by');
};

module.exports = serverConfig;
