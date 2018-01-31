const { Client } = require('pg');

module.exports = function pgfn(sql) {
  return function (req, res, next) {
    client = new Client({
      user: 'sowyer',
      host: 'localhost',
      database: 'pgdb',
      password: 'sowyer',
      port: 5432,
    })
    client.connect()
    client.query(sql, (err, result) => {
      if (err) {
        return err.stack;
      }
      res.send(result.rows);
      client.end();
    });
  }
}