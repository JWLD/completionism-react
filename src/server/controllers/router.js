const router = require('express').Router();

// controllers
const dbController = require('./database');
const blizzardController = require('./blizzard');

// DATABASE
router.route('/db-category')
	.get(dbController.getCategoryData);

router.route('/realms')
	.get(blizzardController.getRealmData);

module.exports = router;
