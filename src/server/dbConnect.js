const url = require('url');
const mysql = require('mysql');

if (!process.env.JAWSDB_URL) {
  throw new Error('Environment variable JAWSDB_URL must be set');
}

const params = url.parse(process.env.JAWSDB_URL);
const [user, password] = params.auth.split(':');

const conn = mysql.createConnection({
	host: params.hostname,
	user,
	password,
	database: params.path.slice(1)
});

module.exports = conn;
