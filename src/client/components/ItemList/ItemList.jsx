import React from 'react';
import FaCheckCircle from 'react-icons/lib/fa/check-circle';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';

import './ItemList.scss';
import { checkHigherRanks, filterByField, filterByFaction, orderByFields } from 'helpers/dataHelpers';
import { ICON_URLS } from 'constants/urls';

const ItemList = (props) => {
	const storageData = localStorage[props.category] ? JSON.parse(localStorage[props.category]).ids : [];
	const { faction } = localStorage[props.category] ? JSON.parse(localStorage[props.category]).char : 2;

	// process data
	let data = props.categoryData;
	data = data.filter((item) => item.name.toLowerCase().includes(props.filterVal));
	data = filterByField(data, 'content', props.content);
	data = filterByFaction(data, faction);
	data = orderByFields(data, ['name']);

	// create item list
	const itemList = data.map((item) => {
		const itemNameClass = `q${item.quality}`;

		let checkRanks = false;
		if (item.rank === 1 || item.rank === 2) checkRanks = checkHigherRanks(item, props.categoryData, storageData);

		const progBox = storageData.includes(item.id) || checkRanks
			? <div><FaCheckCircle className="pos" /></div>
			: <div><FaTimesCircle className="neg" /></div>;

		const itemIcon = item.icon ? { backgroundImage: `url(${ICON_URLS.large}${item.icon}.jpg)` } : null;

		return (
			<li className="item" key={item.id}>
				<i style={itemIcon}/>
 				<span className={itemNameClass}>{item.name}</span>
				{progBox}
			</li>
		);
	});

	return <ul className="item-list">{itemList}</ul>;
};

export default ItemList;
