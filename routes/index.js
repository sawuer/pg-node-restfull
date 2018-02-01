const 
  body_parser = require('body-parser'),
  pgfn = require('../pgfn.js'),
  router = require('express').Router()
;

module.exports = router

  .get('/', (req, res) => {  
    if (!req.session.userid) {
      return res.redirect('/signin');
    }
    res.render('index', { 
      title: 'Home page',
      user: req.session.userid
    });
  })

;