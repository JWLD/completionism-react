import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { ICON_URLS } from 'constants/urls'
import { setActiveItem } from 'ItemList/actions'
import { activeCategorySelector } from 'Browse/selectors'

import * as SC from 'TileGrid/styled'

const TileGrid = ({ category, items, setActiveItem }) => {
  const tiles = items.map(({ collected, icon, id, level, quality }) => {
    const iconUrl = icon ? `url(${ICON_URLS.large}/${icon}.jpg)` : 'none'

    const renderQualityBar = () => {
      const petQuality =
        level === 0 || (quality === 3 && level === 25) ? 7 : quality

      return <SC.QualityBar petQuality={petQuality} />
    }

    return (
      <SC.TileWrap key={id}>
        <SC.Tile
          collected={collected}
          onClick={() => setActiveItem(id)}
          quality={quality}>
          <SC.TileIcon iconUrl={iconUrl} />
        </SC.Tile>
        {category === 'pets' && renderQualityBar()}
      </SC.TileWrap>
    )
  })

  return <SC.TileGrid>{tiles}</SC.TileGrid>
}

TileGrid.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  setActiveItem: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  category: activeCategorySelector(state)
})

const mapDispatchToProps = {
  setActiveItem
}

export default connect(mapStateToProps, mapDispatchToProps)(TileGrid)
