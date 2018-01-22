import React, { Component } from 'react';

import CATEGORIES from 'constants/categories';
import { ICON_URLS } from 'constants/urls';

import NavBar from 'components/NavBar/NavBar';
import * as SC from './styled';

class Landing extends Component {
	renderPortrait(category) {
		if (!localStorage[category.key]) return null;

		const { region, thumb } = JSON.parse(localStorage[category.key]).char;
		const portrait = <SC.Portrait src={`http://render-${region}.worldofwarcraft.com/character/${thumb}`} />;

		return portrait;
	}

	renderCategoryPanel(category) {
		const { key, name } = category;

		const categoryPanel = (
			<SC.CategoryPanel key={key}>
				<SC.ExpandButton>+</SC.ExpandButton>

				<SC.BrowseLink to={`/browse/${key}/1`}>
					<SC.CategoryImg alt="Category Icon" src={`${ICON_URLS.large}${category.icon}.jpg`} />
					<span>{name}</span>
				</SC.BrowseLink>

				<SC.CharacterLink to="/import">
					<i className="fa fa-user" />
					{this.renderPortrait(category)}
				</SC.CharacterLink>
			</SC.CategoryPanel>
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
			<SC.CategoryBlock key={categoryBlock}>
				{this.renderCategoryPanels(CATEGORIES[categoryBlock])}
			</SC.CategoryBlock>
		));

		return categoryBlocks;
	}

	render() {
		return (
			<SC.LandingPage>
				<NavBar />

				{this.renderCategoryBlocks()}
			</SC.LandingPage>
		);
	}
}

export default Landing;
