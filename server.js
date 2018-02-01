const 
  body_parser = require('body-parser'),
  express = require('express'),
  session = require('express-session'),
  path = require('path'),
  ejs = require('ejs'),
  app = express(),
  pgfn = require('./pgfn.js'),
  { Router } = require('express'),
  signup = require('./routes/signup.js'),
  signin = require('./routes/signin.js'),
  users = require('./routes/users.js'),
  index = require('./routes/index.js'),
  verification = require('./routes/verification.js')
;

// conf
app
  .use(session({
    secret: '123',
    resave: false,
    saveUninitialized: true,
    cookie: { 
      maxAge: 100000000 
    }
  }))
  .set('view engine', 'ejs')
  .set('views', `${__dirname}/views`)
  .use(express.static(path.join(__dirname, 'public')))
  .use(body_parser.json())
  .use(body_parser.urlencoded({ extended: false }))
  .use('/', index)
  .use('/users', users)
  .use('/signup', signup)
  .use('/signin', signin)
  .use('/verification', verification)
  .listen(3000, _ => console.log('server up'))
;