const { getCategoryData, getRankedData } = require('../../database/queries')

const dbController = {}

// GET DB-CATEGORY - GET DATA FOR A SPECIFIC CATEGORY FROM DB

dbController.getCategoryData = (req, res) => {
  getCategoryData(req.query.category, (err, dbRes) => {
    if (err) return res.status(500).send(err)

    return res.send(dbRes)
  })
}

// GET DB-RANKED - GET ALL RECIPES WITH RANKS FROM DB

dbController.getRankedData = (req, res) => {
  getRankedData(req.query.q, (err, dbRes) => {
    if (err) return res.status(500).send(err)

    return res.send(dbRes)
  })
}

module.exports = dbController
