const db_connect = require('../db_connect')
const db_queries = require('../db_queries')

const dbController = {}

// GET DB-CATEGORY - GET ALL CATEGORY DATA FROM DB
dbController.getCategoryData = (req, res) => {
  db_queries.getCategoryData(db_connect, req.query.category, (err, dbRes) => {
    if (err) return res.status(500).send(err)

    return res.send(dbRes)
  })
}

// GET DBRANKED  GET ALL RECIPES WITH RANKS FROM DB
dbController.getRankedData = (req, res) => {
  db_queries.getRankedData(db_connect, req.query.q, (err, dbRes) => {
    if (err) return res.status(500).send(err)

    return res.send(dbRes)
  })
}

module.exports = dbController
