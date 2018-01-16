import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import FaHome from 'react-icons/lib/fa/home';
import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';

import CONTENT from 'constants/content';
import './NavBar.scss';

class NavBar extends Component {
	renderContentNav() {
		const { category, content } = this.props.match.params;
		const prevPage = Number(content) - 1;
		const nextPage = Number(content) + 1;

		return (
			<nav className="category-nav">
				<Link
					to={`/category/${category}/${prevPage}`}
					className={prevPage === 0 ? 'nav-link inactive' : 'nav-link'}
				>
					<FaArrowCircleLeft />
				</Link>

				<h1>{CONTENT[content].content}</h1>

				<Link
					to={`/category/${category}/${nextPage}`}
					className={nextPage === 9 ? 'nav-link inactive' : 'nav-link'}
				>
					<FaArrowCircleRight />
				</Link>
			</nav>
		);
	}

	renderCategorySpan() {
		const { category } = this.props.match.params;

		return category ? <span className="nav-link cat">{category}</span> : null;
	}

	render() {
		return (
			<nav className="main-nav">
				<div className="nav-left">
					<Link className="nav-link" to="/">
						<FaHome />
					</Link>

					{this.renderCategorySpan()}
				</div>

				{this.renderContentNav()}
			</nav>
		);
	}
}

NavBar.propTypes = {
	match: PropTypes.object.isRequired,
};

export default withRouter(NavBar);
