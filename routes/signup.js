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

  .post('/', (req, res) => {
    pgfn(
      'insert into users (user_email, user_password) values ($1, $2)',
      [req.body.user_email, req.body.user_password], 
      _ => {
        return res.status(200).json('Регистрация прошла успешно')
      }
    )
  })
  
;