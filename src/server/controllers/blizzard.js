const request = require('request')
const async = require('async')

const { PRIMARY, SECONDARY } = require('../constants/categories')

const dbConnect = require('../dbConnect')
const dbQueries = require('../dbQueries')

const blizzController = {}

// GET REALMS - GET REALM LIST FROM BLIZZARD API

const constructRealmDataUrl = params =>
  `https://${params.q}.api.battle.net/wow/realm/status
	?locale=en_GB&apikey=${process.env.BATTLENET_KEY}`

const extractRealmData = responseBody => {
  const { realms } = JSON.parse(responseBody)

  const realmData = realms.map(realm => ({
    name: realm.name,
    slug: realm.slug
  }))

  return realmData
}

blizzController.getRealmData = (req, res) => {
  const url = constructRealmDataUrl(req.query)

  request(url, (err, response, body) => {
    if (err) return res.status(500).send(err)

    const realmData = extractRealmData(body)

    return res.send(realmData)
  })
}

// GET IMPORT - GET CHAR DATA FROM BLIZZARD API

const constructFieldsArray = cats => {
  const catsArray = typeof cats === 'string' ? [cats] : cats

  const fields = []

  catsArray.forEach(cat => {
    if (cat === 'mounts' || cat === 'pets') {
      fields.push(cat)
    } else if (!fields.includes('professions')) {
      fields.push('professions')
    }
  })

  return fields
}

const constructCharDataUrl = params => {
  const { cats, name, region, realm } = params

  const fields = constructFieldsArray(cats)
  const locale = region === 'eu' ? 'en_GB' : 'en_US'

  const url = `https://${region}.api.battle.net/wow/character/${realm}/${name}
		?fields=${fields}&locale=${locale}&apikey=${process.env.BATTLENET_KEY}`

  return url
}

const constructCharDataObject = (data, region) => ({
  char: {
    class: data.class,
    faction: data.faction,
    region,
    thumb: data.thumbnail
  }
})

const extractMountCollectionData = blizzData =>
  blizzData.mounts.collected.map(mount => mount.spellId)

const extractPetCollectionData = blizzData =>
  blizzData.pets.collected.map(pet => ({
    id: pet.creatureId,
    quality: pet.qualityId
  }))

const processRankedDataFromDB = data => {
  const rankedData = {
    one: data.filter(item => item.rank === 1),
    two: data.filter(item => item.rank === 2),
    three: data.filter(item => item.rank === 3)
  }

  return rankedData
}

const findMissingIds = (recipeIds, rankedData) => {
  const missingIds = []

  recipeIds.forEach(recipeId => {
    const rank3Recipe = rankedData.three.find(item => item.id === recipeId)
    const rank2Recipe = rankedData.two.find(item => item.id === recipeId)

    if (rank3Recipe) {
      const rank1Id = rankedData.one.find(item => item.name === rank3Recipe.name).id
      const rank2Id = rankedData.two.find(item => item.name === rank3Recipe.name).id

      missingIds.push(rank1Id, rank2Id)
    } else if (rank2Recipe) {
      const rank1Id = rankedData.one.find(item => item.name === rank2Recipe.name).id

      missingIds.push(rank1Id)
    }
  })

  return missingIds
}

const checkForRankedRecipes = (recipeIds, cat, blizzData, callback) => {
  dbQueries.getRankedData(dbConnect, cat, (err, res) => {
    if (err) return console.log(err)

    const rankedData = processRankedDataFromDB(res)
    const missingIds = findMissingIds(recipeIds, rankedData)

    const completeIds = recipeIds.concat(missingIds)

    const data = {
      name: cat,
      ids: completeIds
    }

    return callback(null, data)
  })
}

const extractProfessionData = (blizzData, cat, callback) => {
  const profType = PRIMARY.includes(cat) ? 'primary' : 'secondary'
  const profIndex = blizzData.professions[profType].findIndex(
    prof =>
      prof.name
        .toLowerCase()
        .split(' ')
        .join('') === cat
  )
  const charHasThisProfession = profIndex !== -1

  if (charHasThisProfession) {
    const recipeIds = blizzData.professions[profType][profIndex].recipes

    checkForRankedRecipes(recipeIds, cat, blizzData, callback)
  }
}

const extractCollectionData = (cats, charData, blizzData, res) => {
  const data = Object.assign({}, charData)

  data.collections = {}

  const catsArray = typeof cats === 'string' ? [cats] : cats

  const tasks = []

  catsArray.forEach(cat => {
    const catIsPrimaryProfession = PRIMARY.includes(cat)
    const catIsSecondaryProfession = SECONDARY.includes(cat)

    if (cat === 'mounts') {
      data.collections.mounts = extractMountCollectionData(blizzData)
    } else if (cat === 'pets') {
      data.collections.pets = extractPetCollectionData(blizzData)
    } else if (catIsPrimaryProfession) {
      tasks.push(callback => extractProfessionData(blizzData, cat, callback))
    } else if (catIsSecondaryProfession) {
      tasks.push(callback => extractProfessionData(blizzData, cat, callback))
    }
  })

  async.parallel(tasks, (err, results) => {
    if (err) return console.log(err)

    results.forEach(result => {
      data.collections[result.name] = result.ids
    })

    return res.send(data)
  })
}

blizzController.getCharData = (req, res) => {
  const url = constructCharDataUrl(req.query)

  request(url, (err, response, body) => {
    if (err) return res.status(500).send(err)

    const blizzData = JSON.parse(body)

    if (blizzData.status === 'nok') {
      return res.status(500).send(blizzData.reason)
    }

    const charData = constructCharDataObject(blizzData, req.query.region)
    return extractCollectionData(req.query.cats, charData, blizzData, res)
  })
}

module.exports = blizzController
