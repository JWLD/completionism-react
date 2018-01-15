import React from 'react';
import { Link } from 'react-router-dom';
import MdAdd from 'react-icons/lib/md/add';
import MdPerson from 'react-icons/lib/md/person';

import categories from 'constants/categories';
import { ICON_URLS } from 'constants/urls';
import './Landing.scss';

const Landing = () => {
	const wraps = Object.keys(categories).map(sub => (
		<ul key={sub}>
			{categories[sub].map((cat) => {
				if (!cat.enabled) return null;

				const catIcon = { backgroundImage: `url(${ICON_URLS.large}${cat.icon}.jpg)` };

				let portrait = null;

				if (localStorage[cat.key]) {
					const { region, thumb } = JSON.parse(localStorage[cat.key]).char;
					const portraitIcon = { backgroundImage: `url(http://render-${region}.worldofwarcraft.com/character/${thumb})` };
					portrait = <i style={portraitIcon} />;
				}

				return (
					<li key={cat.key}>
						<button className="cat-button">
							<MdAdd />
						</button>

						<Link to={`/category/${cat.key.toLowerCase()}/1`} className="cat-link">
							<i style={catIcon} />
							<span>{cat.name}</span>
						</Link>

						<Link to="/import" className="cat-button">
							<MdPerson />
							{portrait}
						</Link>
					</li>
				);
			})}
		</ul>
	));

	return (
		<div className="landing-page">
			{wraps}
		</div>
	);
};

export default Landing;
