import React from 'react';
import FaCheck from 'react-icons/lib/fa/check';
import FaPlus from 'react-icons/lib/fa/plus';

import './ItemList.scss';
import { checkHigherRanks, filterByField, filterByFaction, orderByFields } from 'helpers/dataHelpers';

const ItemList = (props) => {
	const storageData = localStorage[props.category] ? JSON.parse(localStorage[props.category]).ids : [];
	const { faction } = localStorage[props.category] ? JSON.parse(localStorage[props.category]).char : 2;

	// process data
	let data = props.categoryData;
	data = filterByField(data, 'content', props.content);
	data = filterByFaction(data, faction);
	data = orderByFields(data, ['source', 'sub1']);

	// create item list
	const itemList = data.map((item) => {
		const itemNameClass = `q${item.quality}`;

		let checkRanks = false;
		if (item.rank === 1 || item.rank === 2) checkRanks = checkHigherRanks(item, props.categoryData, storageData);

		const progBox = storageData.includes(item.id) || checkRanks
			? <div><FaCheck className="pos" /></div>
			: <div><FaPlus className="neg rot" /></div>;

		return (
			<li className="item" key={item.id}>
				<span className={itemNameClass}>{item.name} {item.rank} {item.source}</span>
				{progBox}
			</li>
		);
	});

	return <ul className="item-list">{itemList}</ul>;
};

export default ItemList;
