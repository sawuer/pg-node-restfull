const 
  body_parser = require('body-parser'),
  pgfn = require('../pgfn.js'),
  router = require('express').Router()
;

module.exports = router

  .get('/', (req, res) => {  
    res.render('index', { 
      title: 'Home page!' 
    });
  })
  
  .get('/users', pgfn('select * from users'));