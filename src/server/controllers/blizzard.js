const request = require('request');

const blizzardController = module.exports = {};

// GET REALMS - GET REALM LIST FROM BLIZZARD API
blizzardController.getRealmData = (req, res) => {
	const url = `https://${req.query.q}.api.battle.net/wow/realm/status?locale=en_GB&apikey=${process.env.BATTLENET_KEY}`;

	request(url, (err, response, body) => {
		if (err) return res.status(500).send(err);

		const data = JSON.parse(body).realms.map((realm) => ({
			'name': realm.name,
			'slug': realm.slug
		}));

		res.send(data);
	});
};
