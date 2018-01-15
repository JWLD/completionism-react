import React from 'react';
import PropTypes from 'prop-types';

import content from 'constants/content';
import './ProgressBar.scss';

const ProgressBar = (props) => {
	const title = content[props.routeProps.content].xpac;

	const total = props.data.length;
	const collected = props.data.filter(item => props.storageData.includes(item.id)).length;
	const percentage = collected ? (collected / total) * 100 : 0;
	const progStyle = { width: `${percentage}%` };

	return (
		<div className="prog-bar-wrap">
			<div>
				<h2>{title}</h2>
				<span>{collected} / {total}</span>
			</div>

			<div className="prog-bar">
				<div style={progStyle} />
			</div>
		</div>
	);
};

ProgressBar.propTypes = {
	data: PropTypes.array.isRequired,
	routeProps: PropTypes.object.isRequired,
	storageData: PropTypes.array.isRequired
};

export default ProgressBar;
