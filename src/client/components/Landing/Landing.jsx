import React from 'react';
import { collections } from 'constants/categories';
import './Landing.scss';

const Landing = () => {
	const links = collections.map((section) => <a key={section}>{section}</a>);

	return (
		<div>{links}</div>
	);
};

export default Landing;
