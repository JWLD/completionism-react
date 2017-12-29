import React from 'react';

import './Spinner.scss';

const Spinner = (props) => {
	const style = {
		height: `${props.size}rem`,
		width: `${props.size}rem`,
		borderWidth: `${props.size * .15}rem`
	};

	return (
		<div>
			<div className="spinner" style={style}></div>
		</div>
	);
};

export default Spinner;
