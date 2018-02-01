const 
  body_parser = require('body-parser'),
  pgfn = require('../pgfn.js'),
  router = require('express').Router(),
  email = require('email')
  keygen = require('keygenerator')
;

module.exports = router

  .get('/', (req, res) => {
    res.render('signup', { 
      title: 'Signup'
    });
  })

  .post('/', (req, res) => {
    let verifycode = keygen._();
    pgfn(
      'insert into users (user_name, user_email, user_password, user_verifycode) values ($1, $2, $3, $4)',
      [req.body.user_name, req.body.user_email, req.body.user_password, verifycode], 
      _ => {
        var Email = email.Email;
        email.from = 'pg@restfull.com'
        var mail = new Email({
          to: req.body.user_email,
          subject: 'Verification',
          body: `localhost:3000/verification?email=${req.body.user_email}&verifycode=${verifycode}`
        });
        mail.send();
        res.render('success_reg', {
          title: 'Success registration',
          name: req.body.user_name,
          email: req.body.user_email
        });
      }
    )
  })

;