import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { ICON_URLS } from 'constants/urls'
import { setActiveItemId } from 'Browse/actions'

import * as SC from 'TileGrid/styled'

const TileGrid = ({ items, setActiveItemId }) => {
  const renderTiles = () => {
    return items.map(({ collected, icon, id }) => {
      const iconUrl = icon ? `url(${ICON_URLS.large}${icon}.jpg)` : 'none'

      return (
        <SC.Tile
          collected={collected}
          key={id}
          onClick={() => setActiveItemId(id)}
        >
          <SC.TileIcon iconUrl={iconUrl} />
        </SC.Tile>
      )
    })
  }

  return <SC.TileGrid>{renderTiles()}</SC.TileGrid>
}

TileGrid.propTypes = {
  items: PropTypes.array.isRequired,
  setActiveItemId: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  setActiveItemId
}

export default connect(null, mapDispatchToProps)(TileGrid)
