import React, { Component } from 'react'

import CATEGORIES from 'constants/categories'
import { ICON_URLS } from 'constants/urls'

import * as SC from './styled'
import NavBar from 'components/NavBar/NavBar'

class Landing extends Component {
  renderPortrait(category) {
    if (!localStorage[category.key]) return null

    const { region, thumb } = JSON.parse(localStorage[category.key]).char

    return (
      <SC.Portrait
        src={`http://render-${region}.worldofwarcraft.com/character/${thumb}`}
      />
    )
  }

  renderCategoryPanels(categoryBlock) {
    return categoryBlock.map(category => {
      if (!category.enabled) return

      const { icon, key, name } = category

      return (
        <SC.CategoryPanel key={key}>
          <SC.ExpandButton>+</SC.ExpandButton>

          <SC.BrowseLink to={`/browse/${key}/1`}>
            <SC.CategoryImg
              alt="Category Icon"
              src={`${ICON_URLS.large}${icon}.jpg`}
            />
            {name}
          </SC.BrowseLink>

          <SC.ImportPageLink to="/import">
            <SC.UserIcon />
            {this.renderPortrait(category)}
          </SC.ImportPageLink>
        </SC.CategoryPanel>
      )
    })
  }

  renderCategoryBlocks() {
    return Object.keys(CATEGORIES).map(categoryBlock => (
      <SC.CategoryBlock key={categoryBlock}>
        {this.renderCategoryPanels(CATEGORIES[categoryBlock])}
      </SC.CategoryBlock>
    ))
  }

  render() {
    return (
      <SC.LandingPage>
        <NavBar />

        {this.renderCategoryBlocks()}
      </SC.LandingPage>
    )
  }
}

export default Landing
