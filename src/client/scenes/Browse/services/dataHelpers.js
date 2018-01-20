import _ from 'lodash';
import { SOURCES } from 'data/constants/sources';

// DATA PROCESSING

export const checkHigherRanks = (item, categoryData, storageData) => {
	const higherRankItems = categoryData.filter(el => el.name === item.name && el.rank > item.rank);

	let higherRankObtained = false;

	higherRankItems.forEach((el) => {
		if (storageData.includes(el.id)) higherRankObtained = true;
	});

	return higherRankObtained;
};

// FILTER FUNCTIONS

export const filterByField = (data, field, value) =>
	data.filter(item => item[field] === value);

export const filterByFaction = (data, faction) =>
	data.filter(item => item.faction === faction || item.faction === 2);

// ORDERING FUNCTIONS

export const orderByFields = (data, fields) =>
	_.sortBy(data, [...fields]);

export const orderObjectByKeys = obj =>
	_(obj).toPairs().sortBy(0).fromPairs()
		.value();

// ORGANISING FUNCTIONS

export const organiseIntoSubcats = data =>
	data.reduce((obj, item) => {
		const newObj = obj;
		const sourceType = SOURCES[item.source];

		if (!obj[sourceType]) {
			newObj[sourceType] = [item];
		} else {
			newObj[sourceType].push(item);
		}

		return newObj;
	}, {});
