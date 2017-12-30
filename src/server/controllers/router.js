const router = require('express').Router();

// controllers
const dbController = require('./database');
const blizzController = require('./blizzard');

// DATABASE
router.route('/db-category')
	.get(dbController.getCategoryData);

// BLIZZARD
router.route('/realms')
	.get(blizzController.getRealmData);

router.route('/import')
	.get(blizzController.getCharData);

module.exports = router;
