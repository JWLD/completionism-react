import React from 'react';
import { Link } from 'react-router-dom';
import FaHome from 'react-icons/lib/fa/home';

import './NavBar.scss';

const NavBar = () => (
	<nav className="main-nav">
		<Link to="/">
			<FaHome />
		</Link>
	</nav>
);

export default NavBar;
