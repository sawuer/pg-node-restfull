const 
  body_parser = require('body-parser'),
  pgfn = require('../pgfn.js'),
  router = require('express').Router()
;

module.exports = router

  .get('/', (req, res) => {  
    res.render('signin', { 
      title: 'Signin'
    });
  })

  .post('/', (req, res) => {
    pgfn(
      'select * from users where user_email = $1 and user_password = $2',
      [req.body.user_email, req.body.user_password], 
      _ => {
        if (req.body.user_email && req.body.user_password) {
          req.session.userid = req.body.user_email;
        }
        res.redirect('/?user=' + req.body.user_email)
        // return res.status(200).json('Авторизация прошла успешно')
      }
    )
  })
  
;