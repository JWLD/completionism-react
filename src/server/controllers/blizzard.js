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
const constructFieldsArray = (cats) => {
	const catsArray = typeof cats === 'string' ? [cats] : cats;

	const fields = [];

	catsArray.forEach((cat) => {
		if (cat === 'mounts' || cat === 'pets') {
			fields.push(cat);
		} else if (!fields.includes('professions')) {
			fields.push('professions');
		}
	});

	return fields;
};

const constructCharDataUrl = (params) => {
	const { cats, region, realm, char } = params;

	const fields = constructFieldsArray(cats);
	const locale = region === 'eu' ? 'en_GB' : 'en_US';

	const url = `https://${region}.api.battle.net/wow/character/${realm}/${char}
		?fields=${fields}&locale=${locale}&apikey=${process.env.BATTLENET_KEY}`;

	return url;
};

const constructCharDataObject = data => ({
	char: {
		thumb: data.thumbnail,
		faction: data.faction,
		class: data.class
	}
});

const extractMountCollectionData = blizzData =>
	blizzData.mounts.collected.map(mount => mount.spellId);

const extractPetCollectionData = blizzData =>
	blizzData.pets.collected.map(pet => ({
		id: pet.creatureId,
		quality: pet.qualityId
	}));

const extractProfessionData = (collectionData, blizzData, cat) => {
	const data = Object.assign({}, collectionData);

	const profType = PRIMARY.includes(cat) ? 'primary' : 'secondary';

	const profIndex = blizzData.professions[profType].findIndex(prof =>
		prof.name.toLowerCase().split(' ').join('') === cat);

	const charHasThisProfession = profIndex !== -1;

	if (charHasThisProfession) {
		data[cat] = blizzData.professions[profType][profIndex].recipes;
	}

	return data;
};

const extractCollectionData = (cats, charData, blizzData) => {
	let data = Object.assign({}, charData);

	cats.forEach((cat) => {
		const catIsPrimaryProfession = PRIMARY.includes(cat);
		const catIsSecondaryProfession = SECONDARY.includes(cat);

		if (cat === 'mounts') {
			data.mounts = extractMountCollectionData(blizzData);
		} else if (cat === 'pets') {
			data.pets = extractPetCollectionData(blizzData);
		}	else if (catIsPrimaryProfession) {
			data = extractProfessionData(data, blizzData, cat);
		} else if (catIsSecondaryProfession) {
			data = extractProfessionData(data, blizzData, cat);
		}
	});

	return data;
};

blizzController.getCharData = (req, res) => {
	const url = constructCharDataUrl(req.query);

	request(url, (err, response, body) => {
		if (err) return res.status(500).send(err);

		const blizzData = JSON.parse(body);

		if (blizzData.status === 'nok') return res.status(500).send(blizzData.reason);

		let charData = constructCharDataObject(blizzData);
		charData = extractCollectionData(req.query.cats, charData, blizzData);

		return res.send(charData);
	});
};

module.exports = blizzController;
