const 
  body_parser = require('body-parser'),
  pgfn = require('../pgfn.js'),
  router = require('express').Router()
;

module.exports = router

  .get('/', (req, res) => {
    if (req.session.userid) {
      res.redirect('/');
    }
    res.render('signin', { 
      title: 'Signin',
      message: req.query.message
    });
  })

  .post('/', (req, res) => {
    pgfn(
      'select * from users where user_email = $1 and user_password = $2 and user_is_verified = true',
      [req.body.user_email, req.body.user_password], 
      out => {
        if (out.rows.length == 0) {
          return res.redirect('/signin?message=Signin+error');
        }
        req.session.userid = req.body.user_email;
        res.redirect('/');
      }
    )
  })
  
;