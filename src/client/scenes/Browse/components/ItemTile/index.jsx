import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ICON_URLS } from 'constants/urls'
import { setActiveItem } from 'ItemTile/actions'
import { activeCategorySelector } from 'Browse/selectors'

import * as SC from 'ItemTile/styled'

export const ItemTile = ({
  category,
  collected,
  icon,
  id,
  name,
  quality,
  setActiveItem
}) => {
  const iconUrl = icon ? `url(${ICON_URLS.large}${icon}.jpg)` : 'none'
  const progressIcon = collected ? <SC.CheckIcon /> : <SC.CrossIcon />
  const petLevel = category === 'pets' && <SC.PetLevel>20</SC.PetLevel>

  return (
    <SC.ItemTile onClick={() => setActiveItem(id)}>
      <SC.ItemIcon iconUrl={iconUrl} />
      <SC.ItemTitle quality={quality}>{name}</SC.ItemTitle>
      {petLevel}
      {progressIcon}
    </SC.ItemTile>
  )
}

ItemTile.defaultProps = {
  icon: null
}

ItemTile.propTypes = {
  category: PropTypes.string.isRequired,
  collected: PropTypes.bool.isRequired,
  icon: PropTypes.string,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  quality: PropTypes.number.isRequired,
  setActiveItem: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  category: activeCategorySelector(state)
})

const mapDispatchToProps = {
  setActiveItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemTile)
