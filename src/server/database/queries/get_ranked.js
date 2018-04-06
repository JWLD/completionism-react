const dbConnect = require('../connect')

const getRankedData = (category, callback) => {
  dbConnect.query(
    `SELECT id, name, rank FROM ${category} WHERE rank IS NOT NULL`,
    callback
  )
}

module.exports = getRankedData
