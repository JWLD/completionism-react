import React from 'react'
import PropTypes from 'prop-types'

import { ICON_URLS } from 'constants/urls'
import { getCharacterDataFromLocalStorage } from 'services/local_storage'

import * as SC from 'CategoryPanel/styled'

const CategoryPanel = ({ category, icon, name }) => {
  const renderPortrait = characterData => {
    const { region, thumb } = characterData
    const portraitUrl = `http://render-${region}.worldofwarcraft.com/character/${thumb}`

    return <SC.Portrait src={portraitUrl} />
  }

  const characterData = getCharacterDataFromLocalStorage(category)

  const iconUrl = `${ICON_URLS.large}/${icon}.jpg`
  const browsePageUrl = `/browse/${category}/1`

  return (
    <SC.CategoryPanel>
      <SC.ExpandButton>+</SC.ExpandButton>

      <SC.BrowseLink to={browsePageUrl}>
        <SC.CategoryImg alt="Category Icon" src={iconUrl} />
        {name}
      </SC.BrowseLink>

      <SC.ImportPageLink to="/import">
        {characterData ? renderPortrait(characterData) : <SC.UserIcon />}
      </SC.ImportPageLink>
    </SC.CategoryPanel>
  )
}

CategoryPanel.propTypes = {
  category: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string
}

export default CategoryPanel
