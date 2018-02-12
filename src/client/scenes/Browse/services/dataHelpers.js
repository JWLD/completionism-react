import _ from 'lodash';
import { SOURCES } from 'constants/sources';

// FILTER FUNCTIONS

export const filterByField = (data, field, value) =>
	data.filter(item => item[field] === value);

export const filterByFaction = (data, faction) =>
	data.filter(item => item.faction === faction || item.faction === 2);

// ORDERING FUNCTIONS

export const orderByFields = (data, fields) => _.sortBy(data, [...fields]);

export const orderObjectByKeys = obj =>
	_(obj)
		.toPairs()
		.sortBy(0)
		.fromPairs()
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
