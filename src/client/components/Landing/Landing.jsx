import React from 'react';
import { Link } from 'react-router-dom';

import categories from 'constants/categories';
import { WOWHEAD_ICON } from 'constants/urls';
import './Landing.scss';

const Landing = () => {
	const wraps = Object.keys(categories).map((sub) => (
		<div key={sub}>
			{categories[sub].map((cat) =>
				<Link to={`/${cat.key.toLowerCase()}`} key={cat.key}>
					<img src={`${WOWHEAD_ICON}${cat.icon}.jpg`}/>
					<span>{cat.name}</span>
				</Link>
			)}
		</div>
	));

	return (
		<div className="landing-page">
			{wraps}
		</div>
	);
};

export default Landing;
