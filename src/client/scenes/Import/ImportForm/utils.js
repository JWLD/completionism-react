import querystring from 'querystring';
import axios from 'axios';

import { WITH_RANKS } from 'constants/categories';

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

const findMissingIds = (recipeIds, rankedRecipes) => {
	const missingIds = recipeIds.reduce((acc, recipeId) => {
		const rank3Recipe = rankedRecipes.rank3Recipes.find(recipe => recipe.id === recipeId);

		if (rank3Recipe) {
			const rank2Recipe = rankedRecipes.rank2Recipes.find(recipe => recipe.name === rank3Recipe.name);
			const rank1Recipe = rankedRecipes.rank1Recipes.find(recipe => recipe.name === rank3Recipe.name);
			acc.push(rank2Recipe.id, rank1Recipe.id);
			return acc;
		}

		const rank2Recipe = rankedRecipes.rank2Recipes.find(recipe => recipe.id === recipeId);

		if (rank2Recipe) {
			const rank1Recipe = rankedRecipes.rank1Recipes.find(recipe => recipe.name === rank2Recipe.name);
			acc.push(rank1Recipe.id);
			return acc;
		}

		return acc;
	}, []);

	return missingIds;
};

const extractCategoriesWithRanks = (collectionData) => {
	const categoriesWithRanks = Object.keys(collectionData).reduce((acc, key) => {
		if (WITH_RANKS.includes(key)) {
			acc.push({ key, recipeIds: collectionData[key] });
		}
		return acc;
	}, []);

	return categoriesWithRanks;
};

const fetchRankedRecipeDataFromDB = (category, callback) => {
	axios.get(`/api/db-ranked?q=${category}`)
		.then(response => callback(null, response.data))
		.catch(err => callback(err));
};

const saveCharDataToLocalStorage = ({ char, collections }) => {
	const categoriesWithRanks = extractCategoriesWithRanks(collections);

	categoriesWithRanks.forEach(category => fetchRankedRecipeDataFromDB(category.key, (err, rankedData) => {
		if (err) return console.log(err);

		const rankedRecipes = {
			rank1Recipes: rankedData.filter(item => item.rank === 1),
			rank2Recipes: rankedData.filter(item => item.rank === 2),
			rank3Recipes: rankedData.filter(item => item.rank === 3)
		};

		const missingIds = findMissingIds(category.recipeIds, rankedRecipes);
		const completeIds = category.recipeIds.concat(missingIds);

		localStorage[category.key] = JSON.stringify({
			char,
			ids: completeIds
		});

		return null;
	}));
};

// fetchCharData

export const fetchCharData = (values) => {
	const urlParams = constructUrlParams(values);

	return axios.get(`/api/import?${urlParams}`)
		.then(response => saveCharDataToLocalStorage(response.data))
		.catch(err => console.log(err));
};

export default fetchCharData;
