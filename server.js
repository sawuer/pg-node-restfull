const 
  body_parser = require('body-parser'),
  express = require('express'),
  path = require('path'),
  ejs = require('ejs'),
  app = express(),
  pgfn = require('./pgfn.js'),
  { Router } = require('express'),
  signup = require('./routes/signup.js')
;

// conf
app
  .set('view engine', 'ejs')
  .set('views', `${__dirname}/views`)
  .use(express.static(path.join(__dirname, 'public')))
  .use(body_parser.json())
  .use(body_parser.urlencoded({ extended: false }))
  .listen(3000, _ => console.log('server up'))
;

// routes
app
  .use('/signup', signup);