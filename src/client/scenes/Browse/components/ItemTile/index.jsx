import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ICON_URLS } from 'constants/urls'
import { setActiveItem } from 'ItemTile/actions'

import * as SC from 'ItemTile/styled'

export const ItemTile = props => {
  const { collected, icon, id, name, quality } = props

  const iconUrl = icon ? `url(${ICON_URLS.large}${icon}.jpg)` : 'none'
  const progressIcon = collected ? <SC.CheckIcon /> : <SC.CrossIcon />

  return (
    <SC.ItemTile onClick={() => props.setActiveItem(id)}>
      <SC.ItemIcon iconUrl={iconUrl} />
      <SC.ItemTitle quality={quality}>{name}</SC.ItemTitle>
      {progressIcon}
    </SC.ItemTile>
  )
}

ItemTile.defaultProps = {
  icon: null
}

ItemTile.propTypes = {
  collected: PropTypes.bool.isRequired,
  icon: PropTypes.string,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  quality: PropTypes.number.isRequired,
  setActiveItem: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  setActiveItem
}

export default connect(null, mapDispatchToProps)(ItemTile)
