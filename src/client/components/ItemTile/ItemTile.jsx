import React from 'react';
import FaCheckCircle from 'react-icons/lib/fa/check-circle';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';

import { ICON_URLS } from 'constants/urls';
import { checkHigherRanks } from 'helpers/dataHelpers';

const ItemTile = (props) => {
	const { category, categoryData, icon, id, name, quality, rank, storageData } = props;

	let itemNameClass = `q${quality}`;

	let collected = false;

	if (rank === 1 || rank === 2) {
		collected = checkHigherRanks(category, categoryData, storageData);
	} else if (category === 'pets') {
		collected = storageData.find(el => el.id === id);
		itemNameClass = collected ? `q${collected.quality}` : 'q0';
	} else {
		collected = storageData.includes(id);
	}

	const progBox = collected
		? <div><FaCheckCircle className="pos" /></div>
		: <div><FaTimesCircle className="neg" /></div>;

	const itemIcon = icon ? { backgroundImage: `url(${ICON_URLS.large}${icon}.jpg)` } : null;

	return <li className="item">
		<i style={itemIcon}/>
		<span className={itemNameClass}>{name}</span>
		{progBox}
	</li>
};

export default ItemTile;
