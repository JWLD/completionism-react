const mysql = require('mysql')

if (!process.env.DATABASE_URL) {
  throw new Error('Environment variable JAWSDB_URL must be set')
}

const con = mysql.createConnection(process.env.DATABASE_URL)

con.connect(err => {
  if (err) throw err
})

module.exports = con
