const dbConnect = require('../dbConnect');
const dbQueries = require('../dbQueries');

const dbController = module.exports = {};

// GET DB-CATEGORY - GET ALL CATEGORY DATA FROM DB
dbController.getCategoryData = (req, res) => {
	dbQueries.getCategoryData(dbConnect, req.query.q, (err, dbRes) => {
		if (err) return res.status(500).send(err);

		res.send(dbRes);
	});
};
