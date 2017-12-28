const router = require('express').Router();

// controllers
const dbController = require('./database');

// DATABASE
router.route('/db-category')
	.get(dbController.getCategoryData);

module.exports = router;
