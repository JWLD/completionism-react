import React from 'react';
import PropTypes from 'prop-types';
import FaCheckCircle from 'react-icons/lib/fa/check-circle';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';

import { ICON_URLS } from 'constants/urls';
import { checkHigherRanks } from 'helpers/dataHelpers';

const isCollected = (props) => {
	const { category, categoryData, id, rank, storageData } = props;

	let collected = false;

	if (rank === 1 || rank === 2) {
		collected = checkHigherRanks(category, categoryData, storageData);
	} else if (category === 'pets') {
		collected = storageData.find(el => el.id === id);
	} else {
		collected = storageData.includes(id);
	}

	return collected;
};

const ItemTile = (props) => {
	const { icon, name, quality } = props;

	const itemNameClass = `q${quality}`;

	const progBox = isCollected(props)
		? <div><FaCheckCircle className="pos" /></div>
		: <div><FaTimesCircle className="neg" /></div>;

	const itemIcon = icon ? { backgroundImage: `url(${ICON_URLS.large}${icon}.jpg)` } : null;

	return (
		<li className="item">
			<i style={itemIcon} />
			<span className={itemNameClass}>{name}</span>
			{progBox}
		</li>
	);
};

ItemTile.propTypes = {
	icon: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	quality: PropTypes.number.isRequired
};

export default ItemTile;
