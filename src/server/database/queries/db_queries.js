const dbQueries = {}

dbQueries.getCategoryData = (con, category, callback) => {
  con.query(
    `SELECT * FROM ${category} WHERE source != 300 ORDER BY name, id`,
    callback
  )
}

dbQueries.getRankedData = (con, category, callback) => {
  con.query(
    `SELECT id, name, rank FROM ${category} WHERE rank IS NOT NULL`,
    callback
  )
}

module.exports = dbQueries
