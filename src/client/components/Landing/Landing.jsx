import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MdAdd from 'react-icons/lib/md/add';
import MdPerson from 'react-icons/lib/md/person';

import categories from 'constants/categories';
import { ICON_URLS } from 'constants/urls';
import './Landing.scss';

class Landing extends Component {
	retrievePortraitFromLocalStorage(category) {
		if (!localStorage[category.key]) return null;

		const { region, thumb } = JSON.parse(localStorage[category.key]).char;
		const portraitIcon = { backgroundImage: `url(http://render-${region}.worldofwarcraft.com/character/${thumb})` };
		const portrait = <i style={portraitIcon} />;

		return portrait;
	}

	setCategoryIcon(category) {
		return { backgroundImage: `url(${ICON_URLS.large}${category.icon}.jpg)` };
	}

	renderCategoryPanels(categoryBlock) {
		return categoryBlock.map((category) => {
			if (!category.enabled) return null;

			return (
				<li key={category.key}>
					<button className="cat-button">
						<MdAdd />
					</button>

					<Link to={`/category/${category.key.toLowerCase()}/1`} className="cat-link">
						<i style={this.setCategoryIcon(category)} />
						<span>{category.name}</span>
					</Link>

					<Link to="/import" className="cat-button">
						<MdPerson />
						{this.retrievePortraitFromLocalStorage(category)}
					</Link>
				</li>
			);
		});
	}

	renderCategoryBlocks() {
		return Object.keys(categories).map(categoryBlock => (
			<ul key={categoryBlock}>
				{this.renderCategoryPanels(categories[categoryBlock])}
			</ul>
		));
	}

	render() {
		return (
			<div className="landing-page">
				{this.renderCategoryBlocks()}
			</div>
		);
	}
}

export default Landing;
