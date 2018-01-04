import React from 'react';
import FaCheckCircle from 'react-icons/lib/fa/check-circle';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';

import './ItemList.scss';
import { checkHigherRanks, filterByField, filterByFaction, orderByFields } from 'helpers/dataHelpers';
import { ICON_URLS } from 'constants/urls';

import ProgressBar from 'components/ProgressBar/ProgressBar';

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
	let itemList = <span>No Items</span>;

	if (data.length > 0) {
		itemList = data.map((item) => {
			let itemNameClass = `q${item.quality}`;

			let collected = false;

			if (item.rank === 1 || item.rank === 2) {
				collected = checkHigherRanks(item, props.categoryData, storageData);
			} else if (props.category === 'pets') {
				collected = storageData.find(el => el.id === item.id);
				itemNameClass = collected ? `q${collected.quality}` : 'q0';
			} else {
				collected = storageData.includes(item.id);
			}

			const progBox = collected
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
	}

	return (
		<div className="item-list-wrap">
			<ProgressBar data={data} storageData={storageData} routeProps={props.routeProps} />
			<ul className="item-list">{itemList}</ul>
		</div>
	);
};

export default ItemList;
