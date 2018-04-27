import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { ICON_URLS } from 'constants/urls'
import { setActiveItem } from 'ItemList/actions'

import * as SC from 'TileGrid/styled'

const TileGrid = ({ items, setActiveItem }) => {
  const renderTiles = () => {
    return items.map(({ collected, icon, id }) => {
      const iconUrl = icon ? `url(${ICON_URLS.large}${icon}.jpg)` : 'none'

      return (
        <SC.Tile collected={collected} key={id} onClick={() => setActiveItem(id)}>
          <SC.TileIcon iconUrl={iconUrl} />
        </SC.Tile>
      )
    })
  }

  return <SC.TileGrid>{renderTiles()}</SC.TileGrid>
}

TileGrid.propTypes = {
  items: PropTypes.array.isRequired,
  setActiveItem: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  setActiveItem
}

export default connect(null, mapDispatchToProps)(TileGrid)
