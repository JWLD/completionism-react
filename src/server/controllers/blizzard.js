const request = require('request');

const { PRIMARY, SECONDARY } = require('../constants/categories');

const blizzController = {};

// GET REALMS - GET REALM LIST FROM BLIZZARD API
const constructRealmDataUrl = params =>
	`https://${params.q}.api.battle.net/wow/realm/status
	?locale=en_GB&apikey=${process.env.BATTLENET_KEY}`;

const extractRealmData = (responseBody) => {
	const { realms } = JSON.parse(responseBody);

	const realmData = realms.map(realm => ({
		name: realm.name,
		slug: realm.slug
	}));

	return realmData;
};

blizzController.getRealmData = (req, res) => {
	const url = constructRealmDataUrl(req.query);

	request(url, (err, response, body) => {
		if (err) return res.status(500).send(err);

		const realmData = extractRealmData(body);

		return res.send(realmData);
	});
};

// GET IMPORT - GET CHAR DATA FROM BLIZZARD API
blizzController.getCharData = (req, res) => {
	const { region, realm, char } = req.query;
	let { cats } = req.query;

	// convert cats to array if string (happens when user chooses only one category)
	if (typeof cats === 'string') cats = [cats];

	// work out what data to request from battle-net
	const fields = [];

	for (let i = 0; i < cats.length; i++) {
		if (cats[i] === 'mounts' || cats[i] === 'pets') {
			fields.push(cats[i]);
		} else if (!fields.includes('professions')) {
			fields.push('professions');
		}
	}

	// make the request
	const locale = region === 'eu' ? 'en_GB' : 'en_US';
	const url = `https://${region}.api.battle.net/wow/character/${realm}/${char}?fields=${fields}&locale=${locale}&apikey=${process.env.BATTLENET_KEY}`;

	request(url, (err, response, body) => {
		if (err) return res.status(500).send(err);

		const data = JSON.parse(body);

		// usually if character not found
		if (data.status === 'nok') return res.status(500).send(data.reason);

		const sorted = {
			char: {
				thumb: data.thumbnail,
				faction: data.faction,
				class: data.class
			}
		};

		// filter data from battle-net
		cats.forEach((cat) => {
			if (cat === 'mounts') {
				sorted.mounts = data.mounts.collected.map(mount => mount.spellId);
			}

			if (cat === 'pets') {
				sorted.pets = data.pets.collected.map(pet => ({
					id: pet.creatureId,
					quality: pet.qualityId
				}));
			}

			if (PRIMARY.includes(cat)) {
				const index = data.professions.primary.findIndex(prof => prof.name.toLowerCase() === cat);
				if (index !== -1) sorted[cat] = data.professions.primary[index].recipes;
			}

			if (SECONDARY.includes(cat)) {
				const index = data.professions.secondary.findIndex(prof => prof.name.toLowerCase().replace(/\s/g, '') === cat);
				if (index !== -1) sorted[cat] = data.professions.secondary[index].recipes;
			}
		});

		return res.send(sorted);
	});
};

module.exports = blizzController;
