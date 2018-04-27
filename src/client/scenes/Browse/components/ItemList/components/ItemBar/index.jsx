import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ICON_URLS } from 'constants/urls'
import { setActiveItem } from 'ItemList/actions'
import { activeCategorySelector } from 'Browse/selectors'

import * as SC from 'ItemBar/styled'

export const ItemBar = ({
  category,
  collected,
  icon,
  id,
  level,
  name,
  quality,
  setActiveItem
}) => {
  const iconUrl = icon ? `url(${ICON_URLS.large}${icon}.jpg)` : 'none'

  let progressIcon = null

  if (collected && category === 'pets') {
    const maxPet = quality === 3 && level === 25

    progressIcon = <SC.PetLevel maxPet={maxPet}>{level}</SC.PetLevel>
  } else if (collected) {
    progressIcon = <SC.CheckIcon />
  } else {
    progressIcon = <SC.CrossIcon />
  }

  return (
    <SC.ItemBar onClick={() => setActiveItem(id)}>
      <SC.ItemIcon iconUrl={iconUrl} />
      <SC.ItemTitle quality={quality}>{name}</SC.ItemTitle>
      {progressIcon}
    </SC.ItemBar>
  )
}

ItemBar.propTypes = {
  category: PropTypes.string.isRequired,
  collected: PropTypes.bool.isRequired,
  icon: PropTypes.string,
  id: PropTypes.number.isRequired,
  level: PropTypes.number,
  name: PropTypes.string.isRequired,
  quality: PropTypes.number.isRequired,
  setActiveItem: PropTypes.func.isRequired
}

ItemBar.defaultProps = {
  icon: null,
  level: 0
}

const mapStateToProps = state => ({
  category: activeCategorySelector(state)
})

const mapDispatchToProps = {
  setActiveItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemBar)
