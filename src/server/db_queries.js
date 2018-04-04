const db_queries = {}

db_queries.getCategoryData = (con, category, callback) => {
  con.query(
    `SELECT * FROM ${category} WHERE source != 300 ORDER BY name, id`,
    callback
  )
}

db_queries.getRankedData = (con, category, callback) => {
  con.query(
    `SELECT id, name, rank FROM ${category} WHERE rank IS NOT NULL`,
    callback
  )
}

module.exports = db_queries
