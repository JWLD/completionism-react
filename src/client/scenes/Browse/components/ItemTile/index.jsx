import React from 'react'
import PropTypes from 'prop-types'

import { ICON_URLS } from 'constants/urls'

import * as SC from 'ItemTile/styled'

const ItemTile = ({ collected, icon }) => {
  const iconUrl = icon ? `url(${ICON_URLS.large}${icon}.jpg)` : 'none'

  return (
    <SC.Tile collected={collected}>
      <SC.TileIcon iconUrl={iconUrl} />
    </SC.Tile>
  )
}

ItemTile.propTypes = {
  collected: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired
}

export default ItemTile
