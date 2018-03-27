import React from 'react'
import PropTypes from 'prop-types'

import { ICON_URLS } from 'constants/urls'

import * as SC from 'TileGrid/styled'

const TileGrid = ({ items }) => {
  const renderTiles = () => {
    return items.map(({ collected, icon, id }) => {
      const iconUrl = icon ? `url(${ICON_URLS.large}${icon}.jpg)` : 'none'

      return (
        <SC.Tile collected={collected} key={id}>
          <SC.TileIcon iconUrl={iconUrl} />
        </SC.Tile>
      )
    })
  }

  return <SC.TileGrid>{renderTiles()}</SC.TileGrid>
}

TileGrid.propTypes = {
  items: PropTypes.array.isRequired
}

export default TileGrid
