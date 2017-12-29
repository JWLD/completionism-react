const request = require('request');
const { parallel } = require('async');

const { PRIMARY, SECONDARY } = require('../constants/categories');

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
	let { region, realm, char, cats } = req.query;

	// convert cats to array if string (happens when user chooses only one category)
	if (typeof cats === 'string') cats = [ cats ];

	// work out what data to request from battle-net
	let fields = [];

	for (let i = 0; i < cats.length; i++) {
		if (cats[i] === 'mounts' || cats[i] === 'pets') {
			fields.push(cats[i]);
		} else if (!fields.includes('professions')){
			fields.push('professions');
		}
	}

	// make the request
	const url = `https://${region}.api.battle.net/wow/character/${realm}/${char}?fields=${fields}&locale=en_GB&apikey=${process.env.BATTLENET_KEY}`;

	request(url, (err, response, body) => {
		if (err) return res.status(500).send(err);

		const data = JSON.parse(body);

		let sorted = {
			char: {
				thumb: data.thumbnail,
				faction: data.faction,
				class: data.class
			}
		};

		// filter data from battle-net
		cats.forEach((cat) => {
			if (cat === 'mounts') {
				sorted.mounts = data.mounts.collected.map((mount) => mount.spellId);
			}

			if (cat === 'pets') {
				sorted.pets = data.pets.collected.map((pet) => ({
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

		res.send(sorted);
	});
};
