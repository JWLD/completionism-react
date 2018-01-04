import React from 'react';
import { Link } from 'react-router-dom';

import FaHome from 'react-icons/lib/fa/home';
import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';

import content from 'constants/content';
import './NavBar.scss';

const NavBar = () => {
	const path = window.location.pathname.split('/');

	let titleNav = null;

	if (path[1] === 'category') {
		const page = Number(path[3]);

		titleNav = (
			<nav className="category-nav">
				<Link
					to={`/category/${path[2]}/${page - 1}`}
					className={page === 1 ? 'nav-link inactive' : 'nav-link'}
				>
					<FaArrowCircleLeft />
				</Link>

				<h1>{content[path[3]].content}</h1>

				<Link
					to={`/category/${path[2]}/${page + 1}`}
					className={page === 9 ? 'nav-link inactive' : 'nav-link'}
				>
					<FaArrowCircleRight />
				</Link>
			</nav>
		);
	}

	const catBtn = path[1] ? <span className="nav-link">{path[2]}</span> : null;

	return (
		<nav className="main-nav">
			<div className="nav-left">
				<Link className="nav-link" to="/">
					<FaHome />
				</Link>

				{catBtn}
			</div>

			{titleNav}
		</nav>
	);
};

export default NavBar;
