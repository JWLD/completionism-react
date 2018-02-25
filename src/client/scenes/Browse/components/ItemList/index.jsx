import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { dataSelector } from './selectors'

import * as SC from './styled'
import ItemTile from 'scenes/Browse/components/ItemTile/ItemTile'

const ItemList = props => {
  const renderBlockTiles = data => {
    return data.map(item => <ItemTile {...item} key={item.id} />)
  }

  const renderListBlocks = () => {
    return props.data.map(subCategory => (
      <SC.ItemListBlock key={subCategory.name}>
        <SC.BlockTitle>{subCategory.name}</SC.BlockTitle>
        {renderBlockTiles(subCategory.items)}
      </SC.ItemListBlock>
    ))
  }

  return renderListBlocks()
}

ItemList.propTypes = {
  data: PropTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  data: dataSelector(state, ownProps)
})

export default withRouter(connect(mapStateToProps)(ItemList))
