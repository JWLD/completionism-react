import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { ICON_URLS } from 'constants/urls'
import { getCharacterDataFromLocalStorage } from 'services/local_storage'
import ProgressBar from 'ProgressBar'

import { getProgressData } from 'CategoryPanel/selectors'
import * as SC from 'CategoryPanel/styled'

const CategoryPanel = ({ category, icon, name, progress }) => {
  // eslint-disable-next-line
  const renderPortrait = ({ region, thumb }) => {
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
        <SC.CategoryDetails>
          <SC.TextWrap>
            <SC.CategoryName>{name}</SC.CategoryName>
            <SC.CategoryProgress>
              {progress.count} / {progress.total}
            </SC.CategoryProgress>
          </SC.TextWrap>
          <ProgressBar
            count={progress.count}
            height={1}
            total={progress.total}
          />
        </SC.CategoryDetails>
      </SC.BrowseLink>

      <SC.ImportPageLink to="/import">
        {characterData ? renderPortrait(characterData) : <SC.UserIcon />}
      </SC.ImportPageLink>
    </SC.CategoryPanel>
  )
}

CategoryPanel.propTypes = {
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  progress: getProgressData(state, ownProps)
})

export default connect(mapStateToProps)(CategoryPanel)
