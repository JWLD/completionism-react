import React from 'react';
import { Link } from 'react-router-dom';

import FaHome from 'react-icons/lib/fa/home';
import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';

import './NavBar.scss';

const NavBar = () => {
	const path = window.location.pathname.split('/');

	let titleNav = null;

	if (path[1] === 'category') {
		const page = Number(path[3]);

		titleNav = (
			<nav className="category-nav">
				<Link to={`/category/${path[2]}/${page - 1}`} className={page === 1 ? 'inactive' : null}>
					<FaArrowCircleLeft />
				</Link>

				<h1>{path[2]}</h1>

				<Link to={`/category/${path[2]}/${page + 1}`} className={page === 9 ? 'inactive' : null}>
					<FaArrowCircleRight />
				</Link>
			</nav>
		);
	}

	return (
		<nav className="main-nav">
			<Link className="home-btn" to="/">
				<FaHome />
			</Link>
			{titleNav}
		</nav>
	);
};

export default NavBar;
