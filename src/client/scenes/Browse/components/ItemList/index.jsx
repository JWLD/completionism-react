import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { itemBlocksSelector, progressDataSelector } from './selectors'

import * as SC from './styled'
import ProgressBar from 'scenes/Browse/components/ProgressBar'
import ItemTile from 'scenes/Browse/components/ItemTile/ItemTile'

const ItemList = props => {
  const renderBlockTiles = data => {
    return data.map(item => <ItemTile {...item} key={item.id} />)
  }

  const renderListBlocks = () => {
    return props.blocks.map(subCategory => (
      <SC.ItemListBlock key={subCategory.name}>
        <SC.BlockTitle>{subCategory.name}</SC.BlockTitle>
        {renderBlockTiles(subCategory.items)}
      </SC.ItemListBlock>
    ))
  }

  return (
    <div>
      <ProgressBar count={props.progress.count} total={props.progress.total} />
      {renderListBlocks()}
    </div>
  )
}

ItemList.propTypes = {
  blocks: PropTypes.array.isRequired,
  progress: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  blocks: itemBlocksSelector(state, ownProps),
  progress: progressDataSelector(state, ownProps)
})

export default withRouter(connect(mapStateToProps)(ItemList))
