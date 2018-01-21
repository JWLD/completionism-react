import React, { Component } from 'react';

import CATEGORIES from 'data/constants/categories';
import { ICON_URLS } from 'data/constants/urls';

import NavBar from 'components/NavBar/NavBar';
import { BrowseLink, CategoryBlock, CategoryIcon, CategoryPanel, CharacterLink, ExpandButton, LandingPage, Portrait } from './style';

class Landing extends Component {
	renderPortrait(category) {
		if (!localStorage[category.key]) return null;

		const { region, thumb } = JSON.parse(localStorage[category.key]).char;
		const iconStyle = { backgroundImage: `url(http://render-${region}.worldofwarcraft.com/character/${thumb})` };
		const portraitIcon = <Portrait style={iconStyle} />;

		return portraitIcon;
	}

	renderCategoryPanel(category) {
		const { key, name } = category;

		return (
			<CategoryPanel key={key}>
				<ExpandButton>+</ExpandButton>

				<BrowseLink to={`/browse/${key.toLowerCase()}/1`}>
					<CategoryIcon src={`${ICON_URLS.large}${category.icon}.jpg`} />
					<span>{name}</span>
				</BrowseLink>

				<CharacterLink to="/import">
					<i className="fa fa-user" />
					{this.renderPortrait(category)}
				</CharacterLink>
			</CategoryPanel>
		);
	}

	renderCategoryPanels(categoryBlock) {
		return categoryBlock.map(category => (category.enabled
			? this.renderCategoryPanel(category)
			: null));
	}

	renderCategoryBlocks() {
		return Object.keys(CATEGORIES).map(categoryBlock => (
			<CategoryBlock key={categoryBlock}>
				{this.renderCategoryPanels(CATEGORIES[categoryBlock])}
			</CategoryBlock>
		));
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
