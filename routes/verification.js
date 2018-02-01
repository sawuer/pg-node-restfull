const 
  body_parser = require('body-parser'),
  pgfn = require('../pgfn.js'),
  router = require('express').Router(),
  email = require('email')
  keygen = require('keygenerator')
;

module.exports = router

  .get('/', (req, res) => {
    console.log(req.query.email, req.query.verifycode)
    pgfn(
      'update users set user_is_verified = true where user_email = $1 and user_verifycode = $2',
      [req.query.email, req.query.verifycode], 
      _ => {
        res.redirect('/signin?message=Success+verification');
      }
    )
  })

;