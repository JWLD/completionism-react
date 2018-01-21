import React, { Component } from 'react';

import CATEGORIES from 'data/constants/categories';
import { ICON_URLS } from 'data/constants/urls';

import NavBar from 'components/NavBar/NavBar';
import * as SC from './styled';

class Landing extends Component {
	renderPortrait(category) {
		if (!localStorage[category.key]) return null;

		const { region, thumb } = JSON.parse(localStorage[category.key]).char;
		const iconStyle = { backgroundImage: `url(http://render-${region}.worldofwarcraft.com/character/${thumb})` };
		const portraitIcon = <SC.Portrait style={iconStyle} />;

		return portraitIcon;
	}

	renderCategoryPanel(category) {
		const { key, name } = category;

		return (
			<SC.CategoryPanel key={key}>
				<SC.ExpandButton>+</SC.ExpandButton>

				<SC.BrowseLink to={`/browse/${key.toLowerCase()}/1`}>
					<SC.CategoryIcon src={`${ICON_URLS.large}${category.icon}.jpg`} />
					<span>{name}</span>
				</SC.BrowseLink>

				<SC.CharacterLink to="/import">
					<i className="fa fa-user" />
					{this.renderPortrait(category)}
				</SC.CharacterLink>
			</SC.CategoryPanel>
		);
	}

	renderCategoryPanels(categoryBlock) {
		return categoryBlock.map(category => (category.enabled
			? this.renderCategoryPanel(category)
			: null));
	}

	renderCategoryBlocks() {
		return Object.keys(CATEGORIES).map(categoryBlock => (
			<SC.CategoryBlock key={categoryBlock}>
				{this.renderCategoryPanels(CATEGORIES[categoryBlock])}
			</SC.CategoryBlock>
		));
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
