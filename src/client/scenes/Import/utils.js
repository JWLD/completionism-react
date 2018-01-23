import querystring from 'querystring';
import axios from 'axios';

// pre-fetchCharData

const extractCategoriesArray = (categories) => {
	const categoriesArray = Object.keys(categories).reduce((acc, key) => {
		if (categories[key]) acc.push(key);
		return acc;
	}, []);

	return categoriesArray;
};

const constructUrlParams = (values) => {
	const { categories, character, realm, region } = values;

	const urlParams = querystring.stringify({
		cats: extractCategoriesArray(categories),
		char: character,
		realm,
		region
	});

	return urlParams;
};

// post-fetchCharData

const saveCharDataToLocalStorage = ({ char, collections }) => {
	Object.keys(collections).forEach((key) => {
		localStorage[key] = JSON.stringify({
			char,
			ids: collections[key]
		});
	});
};

export const fetchCharData = (values) => {
	const urlParams = constructUrlParams(values);

	return axios.get(`/api/import?${urlParams}`)
		.then(response => saveCharDataToLocalStorage(response.data))
		.catch(err => console.log(err));
};

export default fetchCharData;
