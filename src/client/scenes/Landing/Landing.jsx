import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MdAdd from 'react-icons/lib/md/add';
import MdPerson from 'react-icons/lib/md/person';

import NavBar from 'components/NavBar/NavBar';
import CATEGORIES from 'data/constants/categories';
import { ICON_URLS } from 'data/constants/urls';
import './Landing.scss';

class Landing extends Component {
	renderCategoryIcon(category) {
		const iconStyle = { backgroundImage: `url(${ICON_URLS.large}${category.icon}.jpg)` };
		const categoryIcon = <i style={iconStyle} />;

		return categoryIcon;
	}

	renderPortraitIcon(category) {
		if (!localStorage[category.key]) return null;

		const { region, thumb } = JSON.parse(localStorage[category.key]).char;
		const iconStyle = { backgroundImage: `url(http://render-${region}.worldofwarcraft.com/character/${thumb})` };
		const portraitIcon = <i style={iconStyle} />;

		return portraitIcon;
	}

	renderCategoryPanel(category) {
		const { key, name } = category;

		return (
			<li key={key}>
				<button className="cat-button">
					<MdAdd />
				</button>

				<Link to={`/browse/${key.toLowerCase()}/1`} className="cat-link">
					{this.renderCategoryIcon(category)}
					<span>{name}</span>
				</Link>

				<Link to="/import" className="cat-button">
					<MdPerson />
					{this.renderPortraitIcon(category)}
				</Link>
			</li>
		);
	}

	renderCategoryPanels(categoryBlock) {
		return categoryBlock.map(category => (category.enabled
			? this.renderCategoryPanel(category)
			: null));
	}

	renderCategoryBlocks() {
		return Object.keys(CATEGORIES).map(categoryBlock => (
			<ul key={categoryBlock}>
				{this.renderCategoryPanels(CATEGORIES[categoryBlock])}
			</ul>
		));
	}

	render() {
		return (
			<div className="landing-page">
				<NavBar />

				{this.renderCategoryBlocks()}
			</div>
		);
	}
}

export default Landing;
