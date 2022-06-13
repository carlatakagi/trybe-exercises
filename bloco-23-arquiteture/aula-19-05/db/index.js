const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'locahost',
  user: 'root',
  password: 'root',
  database: 'comics',
  /* port: a porta que esta rodando o mysql */
});

module.exports = connection;