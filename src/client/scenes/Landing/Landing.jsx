import React, { Component } from 'react';

import CATEGORIES from 'data/constants/categories';
import { ICON_URLS } from 'data/constants/urls';

import NavBar from 'components/NavBar/NavBar';
import { BrowseLink, CategoryBlock, CategoryImg, CategoryPanel, CharacterLink, ExpandButton, LandingPage, Portrait } from './styled';

class Landing extends Component {
	renderPortrait(category) {
		if (!localStorage[category.key]) return null;

		const { region, thumb } = JSON.parse(localStorage[category.key]).char;
		const portrait = <Portrait src={`http://render-${region}.worldofwarcraft.com/character/${thumb}`} />;

		return portrait;
	}

	renderCategoryPanel(category) {
		const { key, name } = category;

		const categoryPanel = (
			<CategoryPanel key={key}>
				<ExpandButton>+</ExpandButton>

				<BrowseLink to={`/browse/${key}/1`}>
					<CategoryImg alt="Category Icon" src={`${ICON_URLS.large}${category.icon}.jpg`} />
					<span>{name}</span>
				</BrowseLink>

				<CharacterLink to="/import">
					<i className="fa fa-user" />
					{this.renderPortrait(category)}
				</CharacterLink>
			</CategoryPanel>
		);

		return categoryPanel;
	}

	renderCategoryPanels(categoryBlock) {
		const categoryPanels = categoryBlock.map(category => (category.enabled
			? this.renderCategoryPanel(category)
			: null));

		return categoryPanels;
	}

	renderCategoryBlocks() {
		const categoryBlocks = Object.keys(CATEGORIES).map(categoryBlock => (
			<CategoryBlock key={categoryBlock}>
				{this.renderCategoryPanels(CATEGORIES[categoryBlock])}
			</CategoryBlock>
		));

		return categoryBlocks;
	}

	render() {
		return (
			<LandingPage>
				<NavBar />

				{this.renderCategoryBlocks()}
			</LandingPage>
		);
	}
}

export default Landing;
