import React from 'react'

import CATEGORIES from 'constants/categories'
import { ICON_URLS } from 'constants/urls'

import * as SC from 'Landing/styled'
import NavBar from 'NavBar'

const Landing = () => {
  const renderPortrait = category => {
    if (!localStorage[category.key]) return null

    const { region, thumb } = JSON.parse(localStorage[category.key]).char

    return (
      <SC.Portrait
        src={`http://render-${region}.worldofwarcraft.com/character/${thumb}`}
      />
    )
  }

  const renderCategoryPanels = categoryBlock => {
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
            {renderPortrait(category)}
          </SC.ImportPageLink>
        </SC.CategoryPanel>
      )
    })
  }

  const renderCategoryBlocks = () => {
    return Object.keys(CATEGORIES).map(categoryBlock => (
      <SC.CategoryBlock key={categoryBlock}>
        {renderCategoryPanels(CATEGORIES[categoryBlock])}
      </SC.CategoryBlock>
    ))
  }

  return (
    <SC.LandingPage>
      <NavBar />

      {renderCategoryBlocks()}
    </SC.LandingPage>
  )
}

export default Landing
