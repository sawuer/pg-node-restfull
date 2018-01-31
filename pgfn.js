const { Client } = require('pg');

module.exports = function pgfn(sql, params, cb) {
  client = new Client({
    user: 'sowyer',
    host: 'localhost',
    database: 'pgdb',
    password: 'sowyer',
    port: 5432,
  });
  client.connect();
  client.query(sql, params, (err, result) => {
    if (err) {
      throw Error(err.stack);
    }
    if (cb) {
      cb(result);
    }
    client.end();
  });
}