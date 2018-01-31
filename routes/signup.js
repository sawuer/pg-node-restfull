const 
  body_parser = require('body-parser'),
  express = require('express'),
  pgfn = require('../pgfn.js'),
  { Router } = require('express')
;
const router = Router();

router

  .get('/', (req, res) => {  
    res.render('index', { 
      title: 'Home page!' 
    });
  })
  
  .get('/users', pgfn('select * from users'));

module.exports = router;