import React from 'react';
import PropTypes from 'prop-types';

import ProgressBar from 'components/ProgressBar/ProgressBar';
import ItemTile from 'components/ItemTile/ItemTile';
import Spinner from 'components/Spinner/Spinner';

import { filterByField, filterByFaction, orderByFields, orderObjectByKeys, organiseIntoSubcats } from 'helpers/dataHelpers';

import './ItemList.scss';

const filterData = (props) => {
	let filtered = props.categoryData;

	filtered = filtered.filter(item => item.name.toLowerCase().includes(props.filterVal));
	filtered = filterByField(filtered, 'content', props.content);
	filtered = orderByFields(filtered, ['name', 'quality']);

	const { faction } = localStorage[props.category] ? JSON.parse(localStorage[props.category]).char : 2;
	filtered = filterByFaction(filtered, faction);

	return filtered;
};

const organiseData = (data) => {
	let organised = organiseIntoSubcats(data);
	organised = orderObjectByKeys(organised);

	return organised;
};

const createItemLists = (category, categoryData, data, storageData) => {
	if (data.length === 0) {
		return <Spinner size="5" />;
	}

	if (Object.keys(data).length === 0) {
		return (
			<div className="item-list">
				<span className="no-items">No Items</span>
			</div>
		);
	}

	return Object.keys(data).map((subCat) => {
		const subCatHeader = <span>{subCat}</span>;

		const tiles = data[subCat].map(item => (
			<ItemTile
				key={item.id}
				{...item}
				category={category}
				categoryData={categoryData}
				storageData={storageData}
			/>
		));

		return (
			<ul className="item-list" key={subCat}>
				{subCatHeader}
				{tiles}
			</ul>
		);
	});
};

const ItemList = (props) => {
	const storageData = localStorage[props.category] ? JSON.parse(localStorage[props.category]).ids : [];
	const filteredData = filterData(props);
	const organisedData = organiseData(filteredData);
	const itemLists = createItemLists(props.category, props.categoryData, organisedData, storageData);

	return (
		<div className="item-list-wrap">
			<ProgressBar data={filteredData} storageData={storageData} routeProps={props.routeProps} />
			{itemLists}
		</div>
	);
};

ItemList.propTypes = {
	category: PropTypes.string.isRequired,
	categoryData: PropTypes.array.isRequired,
	routeProps: PropTypes.object.isRequired
};

export default ItemList;
