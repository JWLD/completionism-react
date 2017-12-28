const request = require('request');

const blizzController = module.exports = {};

// GET REALMS - GET REALM LIST FROM BLIZZARD API
blizzController.getRealmData = (req, res) => {
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

// GET IMPORT - GET CHAR DATA FROM BLIZZARD API
blizzController.getCharData = (req, res) => {
	const url = `https://${req.query.region}.api.battle.net/wow/character/${req.query.realm}/${req.query.char}?fields=mounts&locale=en_GB&apikey=${process.env.BATTLENET_KEY}`;

	request(url, (err, response, body) => {
		if (err) return res.status(500).send(err);

		res.send(body);
	});
};
