import React from 'react';
import { Link } from 'react-router-dom';

import categories from 'constants/categories';
import { ICON_URL } from 'constants/urls';
import './Landing.scss';

const Landing = () => {
	const wraps = Object.keys(categories).map((sub) => (
		<div key={sub}>
			{categories[sub].map((cat) =>
				<Link className="cat-link" to={`/${cat.key.toLowerCase()}`} key={cat.key}>
					<img src={`${ICON_URL}${cat.icon}.jpg`}/>
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
