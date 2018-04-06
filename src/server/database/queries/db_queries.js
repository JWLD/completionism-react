const dbConnect = require('../connect')

const dbQueries = {}

dbQueries.getCategoryData = (category, callback) => {
  dbConnect.query(
    `SELECT * FROM ${category} WHERE source != 300 ORDER BY name, id`,
    callback
  )
}

dbQueries.getRankedData = (category, callback) => {
  dbConnect.query(
    `SELECT id, name, rank FROM ${category} WHERE rank IS NOT NULL`,
    callback
  )
}

module.exports = dbQueries
