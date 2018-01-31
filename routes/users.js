const 
  body_parser = require('body-parser'),
  pgfn = require('../pgfn.js'),
  router = require('express').Router()
;

module.exports = router

  .get('/', (_, res) => {
    pgfn(
      'select * from users', 
      [], 
      out => {
        res.send(out.rows)
      }
    );
  })

  .get('/:id', (req, res) => {
    pgfn(
      'select * from users where user_id = $1', 
      [req.params.id], 
      out => {
        res.send(out.rows)
      }
    );
  })

  .post('/add', (req, res) => {
    pgfn(
      'insert into users (user_email, user_password) values ($1, $2)',
      [req.body.user_email, req.body.user_password], 
      _ => {
        return res.status(200).json('Пользователь добавлен')
      }
    )
  })

  .post('/:id', (req, res) => {
    pgfn(
      'update users set user_email = $1, user_password = $2 where user_id = $3',
      [req.body.user_email, req.body.user_password, req.params.id], 
      _ => {
        return res.status(200).json('Пользователь обновлен')
      }
    )
  })

  .delete('/:id', (req, res) => {
    pgfn(
      'delete from users where user_id = $1',
      [req.params.id],
      _ => {
        return res.status(200).json('Пользователь удален')
      }
    )
  })
  
;