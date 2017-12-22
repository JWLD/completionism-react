import React from 'react';
import { Link } from 'react-router-dom';

import { collections } from 'constants/categories';
import './Landing.scss';

const Landing = () => {
	const links = collections.map((section) =>
		<Link to={`/${section}`} key={section}>{section}</Link>
	);

	return (
		<div className="landing-page">
			<nav>{links}</nav>
		</div>
	);
};

export default Landing;
