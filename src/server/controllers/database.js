const dbConnect = require('../db_connect')
const dbQueries = require('../db_queries')

const dbController = {}

// GET DB-CATEGORY - GET ALL CATEGORY DATA FROM DB

dbController.getCategoryData = (req, res) => {
  dbQueries.getCategoryData(dbConnect, req.query.category, (err, dbRes) => {
    if (err) return res.status(500).send(err)

    return res.send(dbRes)
  })
}

// GET DB-RANKED - GET ALL RECIPES WITH RANKS FROM DB

dbController.getRankedData = (req, res) => {
  dbQueries.getRankedData(dbConnect, req.query.q, (err, dbRes) => {
    if (err) return res.status(500).send(err)

    return res.send(dbRes)
  })
}

module.exports = dbController
