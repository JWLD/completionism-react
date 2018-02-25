import React from 'react'
import PropTypes from 'prop-types'

import { ICON_URLS } from 'constants/urls'

import * as SC from './styled'

const ItemTile = props => {
  const { collected, icon, name, quality } = props

  const iconUrl = icon ? `url(${ICON_URLS.large}${icon}.jpg)` : 'none'
  const progressIcon = collected ? <SC.CheckIcon /> : <SC.CrossIcon />

  return (
    <SC.ItemTile>
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
  name: PropTypes.string.isRequired,
  quality: PropTypes.number.isRequired
}

export default ItemTile
