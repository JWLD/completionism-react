import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { ICON_URLS } from 'constants/urls'
import { getCharacterDataFromLocalStorage } from 'services/local_storage'
import ProgressBar from 'ProgressBar'

import { getProgressData } from 'CategoryPanel/selectors'
import * as SC from 'CategoryPanel/styled'

const CategoryPanel = ({ category, icon, name, progress }) => {
  const renderPortrait = () => {
    const characterData = getCharacterDataFromLocalStorage(category)

    if (!characterData) return <SC.UserIcon />

    const { region, thumb } = characterData
    const portraitUrl = `http://render-${region}.worldofwarcraft.com/character/${thumb}`

    return <SC.Portrait src={portraitUrl} />
  }

  return (
    <SC.CategoryPanel>
      <SC.BrowseLink to={`/browse/${category}/1`}>
        <SC.CategoryImg
          alt="Category Icon"
          src={`${ICON_URLS.large}/${icon}.jpg`}
        />
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

      <SC.ImportPageLink to="/import">{renderPortrait()}</SC.ImportPageLink>
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
