import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
  contentParamSelector,
  itemBlocksSelector,
  progressDataSelector
} from './selectors'

import * as SC from './styled'
import { CONTENT } from 'constants/content'
import ProgressBar from 'scenes/Browse/components/ProgressBar'
import ItemTile from 'scenes/Browse/components/ItemTile'

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

  const progressBarTitle = CONTENT[props.content].xpac

  return (
    <SC.ListWrap>
      <ProgressBar
        count={props.progress.count}
        title={progressBarTitle}
        total={props.progress.total}
      />
      {renderListBlocks()}
    </SC.ListWrap>
  )
}

ItemList.propTypes = {
  blocks: PropTypes.array.isRequired,
  content: PropTypes.number.isRequired,
  progress: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  blocks: itemBlocksSelector(state, ownProps),
  content: contentParamSelector(state, ownProps),
  progress: progressDataSelector(state, ownProps)
})

export default withRouter(connect(mapStateToProps)(ItemList))
