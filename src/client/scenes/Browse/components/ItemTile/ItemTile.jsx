import React from 'react'
import PropTypes from 'prop-types'

import { ICON_URLS } from 'constants/urls'
import * as SC from './styled'

const isCollected = props => {
  const { category, id, storageData } = props

  let collected = false

  if (category === 'pets') {
    collected = storageData.find(el => el.id === id)
  } else {
    collected = storageData.includes(id)
  }

  return collected
}

const ItemTile = props => {
  const { icon, name, quality } = props

  const itemIcon = icon
    ? { backgroundImage: `url(${ICON_URLS.large}${icon}.jpg)` }
    : null

  return (
    <SC.ItemTile>
      <SC.ItemIcon style={itemIcon} />
      <SC.ItemTitle quality={quality}>{name}</SC.ItemTitle>
      {isCollected(props) ? <SC.CheckIcon /> : <SC.CrossIcon />}
    </SC.ItemTile>
  )
}

ItemTile.defaultProps = {
  icon: null
}

ItemTile.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  quality: PropTypes.number.isRequired
}

export default ItemTile
