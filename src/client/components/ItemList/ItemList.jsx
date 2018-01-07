import React from 'react';

import './ItemList.scss';
import { checkHigherRanks, filterByField, filterByFaction, orderByFields, orderObjectByKeys, organiseIntoSubcats } from 'helpers/dataHelpers';

import ProgressBar from 'components/ProgressBar/ProgressBar';
import ItemTile from 'components/ItemTile/ItemTile';

const filterData = (props) => {
	let data = props.categoryData;
	data = data.filter((item) => item.name.toLowerCase().includes(props.filterVal));
	data = filterByField(data, 'content', props.content);

	const { faction } = localStorage[props.category] ? JSON.parse(localStorage[props.category]).char : 2;
	data = filterByFaction(data, faction);

	return data;
};

const ItemList = (props) => {
	const storageData = localStorage[props.category] ? JSON.parse(localStorage[props.category]).ids : [];

	const data = filterData(props);

	let organised = organiseIntoSubcats(data);
	organised = orderObjectByKeys(organised);

	// create item lists
	let itemLists = (
		<div className="item-list">
			<span className="no-items">No Items</span>
		</div>
	);

	if (data.length > 0) {
		itemLists = Object.keys(organised).map((subCat) => {
			const subCatHeader = <span>{subCat}</span>;

			const tiles = organised[subCat].map((item) =>
				<ItemTile
					{...item}
					category={props.category}
					categoryData={props.categoryData}
					key={item.id}
					storageData={storageData}
				/>
			);

			return (
				<ul className="item-list" key={subCat}>
					{subCatHeader}
					{tiles}
				</ul>
			);
		});
	}

	return (
		<div className="item-list-wrap">
			<ProgressBar data={data} storageData={storageData} routeProps={props.routeProps} />
			{itemLists}
		</div>
	);
};

export default ItemList;
