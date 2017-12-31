import React from 'react';

import './ProgressBar.scss';
import content from 'constants/content';

const ProgressBar = (props) => {
	const title = content[props.routeProps.content].xpac;

	const total = props.data.length;
	const collected = props.data.filter((item) => props.storageData.includes(item.id)).length;
	const percentage = collected ? collected / total * 100 : 0;
	const progStyle = { width: `${percentage}%` };

	return (
		<div className="prog-bar-wrap">
			<div>
				<h2>{title}</h2>
				<span>{collected} / {total}</span>
			</div>

			<div className="prog-bar">
				<div style={progStyle}></div>
			</div>
		</div>
	);
};

export default ProgressBar;
