const parallel = require('async/parallel')

const { getCategoryData, getRankedData } = require('../../database/queries')
const CATEGORIES = require('../../constants/cats')

const dbController = {}

// GET DB-CATEGORY - GET ALL CATEGORY DATA FROM DB

dbController.getCategoryData = (req, res) => {
  const tasks = CATEGORIES.map(category => {
    return callback => {
      return getCategoryData(category, (err, dbRes) => {
        if (err) return callback(err)

        const foo = {
          category,
          data: dbRes
        }

        return callback(null, foo)
      })
    }
  })

  parallel(tasks, (err, results) => {
    if (err) return res.status(500).send(err)

    const dataObject = results.reduce((acc, result) => {
      return { ...acc, [result.category]: result.data }
    }, {})

    return res.send(dataObject)
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
