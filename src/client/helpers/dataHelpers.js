import _ from 'lodash';
import SOURCES from 'constants/sources';

// DATA PROCESSING

export const checkHigherRanks = (item, categoryData, storageData) => {
	const higherRankItems = categoryData.filter((el) => el.name === item.name && el.rank > item.rank);

	let higherRankObtained = false;

	higherRankItems.forEach((el) => {
		if (storageData.includes(el.id)) higherRankObtained = true;
	});

	return higherRankObtained;
}

// FILTER FUNCTIONS

export const filterByField = (data, field, value) => {
	return data.filter((item) => item[field] === value);
};

export const filterByFaction = (data, faction) => {
	return data.filter((item) => item.faction === faction || item.faction === 2);
};

// ORDERING FUNCTIONS

export const orderByFields = (data, fields) => {
	return _.sortBy(data, [...fields, 'quality', 'name']);
};

export const orderObjectByKeys = (obj) => {
	return _(obj).toPairs().sortBy(0).fromPairs().value();
};

// ORGANISING FUNCTIONS

export const organiseIntoSubcats = (data) => {
 	return data.reduce((obj, item) => {
		const sourceType = SOURCES[item.source];

		if (!obj[sourceType]) {
			obj[sourceType] = [ item ];
		} else {
			obj[sourceType].push(item);
		}

		return obj;
	}, {});
};
