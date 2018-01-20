const dbConnect = require('../dbConnect');
const dbQueries = require('../dbQueries');

const dbController = {};

// GET DB-CATEGORY - GET ALL CATEGORY DATA FROM DB
dbController.getCategoryData = (req, res) => {
	dbQueries.getCategoryData(dbConnect, req.query.q, (err, dbRes) => {
		if (err) return res.status(500).send(err);

		return res.send(dbRes);
	});
};

// GET DB-RANKED - GET ALL RECIPES WITH RANKS FROM DB
dbController.getRankedData = (req, res) => {
	dbQueries.getRankedData(dbConnect, req.query.q, (err, dbRes) => {
		if (err) return res.status(500).send(err);

		return res.send(dbRes);
	});
};

module.exports = dbController;
