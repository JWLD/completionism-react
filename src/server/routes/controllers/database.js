const dbQueries = require('../../database/queries/db_queries')

const dbController = {}

// GET DB-CATEGORY - GET ALL CATEGORY DATA FROM DB

dbController.getCategoryData = (req, res) => {
  dbQueries.getCategoryData(req.query.category, (err, dbRes) => {
    if (err) return res.status(500).send(err)

    return res.send(dbRes)
  })
}

// GET DB-RANKED - GET ALL RECIPES WITH RANKS FROM DB

dbController.getRankedData = (req, res) => {
  dbQueries.getRankedData(req.query.q, (err, dbRes) => {
    if (err) return res.status(500).send(err)

    return res.send(dbRes)
  })
}

module.exports = dbController
