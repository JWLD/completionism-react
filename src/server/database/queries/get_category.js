const dbConnect = require('../connect')

const getCategoryData = (category, callback) => {
  dbConnect.query(
    `SELECT * FROM ${category} WHERE source != 300 ORDER BY name, id`,
    callback
  )
}

module.exports = getCategoryData
