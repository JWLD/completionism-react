import React from 'react'

import { CATEGORIES_BY_SECTION as CATEGORIES } from 'constants/categories'
import { ICON_URLS } from 'constants/urls'

import * as SC from 'Landing/styled'
import { PageWrap } from 'style/components'
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

  const renderCategoryPanels = section => {
    return section.categories.map(category => {
      const { icon, key, name } = category
      const iconUrl = `${ICON_URLS.large}${icon}.jpg`

      return (
        <SC.CategoryPanel key={key}>
          <SC.ExpandButton>+</SC.ExpandButton>

          <SC.BrowseLink to={`/browse/${key}/1`}>
            <SC.CategoryImg alt="Category Icon" src={iconUrl} />
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

  const categoryBlocks = CATEGORIES.map(section => (
    <SC.CategoryBlock key={section.key}>
      {renderCategoryPanels(section)}
    </SC.CategoryBlock>
  ))

  return (
    <PageWrap>
      <NavBar />

      {categoryBlocks}
    </PageWrap>
  )
}

export default Landing
