import React from 'react';
import { Link } from 'react-router-dom';

import categories from 'constants/categories';
import './Landing.scss';

const Landing = () => {
	const wraps = Object.keys(categories).map((sub) => (
		<div key={sub}>
			{categories[sub].map((cat) =>
				<Link to={`/${cat.toLowerCase()}`} key={cat}>{cat}</Link>
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
