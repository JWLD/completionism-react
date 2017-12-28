import React from 'react';
import { Link } from 'react-router-dom';
import MdAdd from 'react-icons/lib/md/add';
import MdPerson from 'react-icons/lib/md/person';

import categories from 'constants/categories';
import { ICON_URL } from 'constants/urls';
import './Landing.scss';

const Landing = () => {
	const wraps = Object.keys(categories).map((sub) => (
		<ul key={sub}>
			{categories[sub].map((cat) =>
				<li key={cat.key}>
					<button className="cat-button">
						<MdAdd />
					</button>

					<Link to={`/category/${cat.key.toLowerCase()}`} className="cat-link">
						<img src={`${ICON_URL}${cat.icon}.jpg`}/>
						<span>{cat.name}</span>
					</Link>

					<Link to='/import' className="cat-button">
						<MdPerson />
					</Link>
				</li>
			)}
		</ul>
	));

	return (
		<div className="landing-page">
			{wraps}
		</div>
	);
};

export default Landing;
