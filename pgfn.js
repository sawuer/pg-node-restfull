const 
  { Client } = require('pg'),
  client = new Client({
    user: 'sowyer',
    host: 'localhost',
    database: 'pgdb',
    password: 'sowyer',
    port: 5432,
  })
;

module.exports = function pgfn(sql) {
  return function (req, res, next) {
    client.connect()
      .then(_ => {
        client.query(sql, (err, result) => {
          if (err) {
            return err.stack;
          }
          res.send(result.rows);
          client.end()
        });
      })
  }
}