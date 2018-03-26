import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { itemBlocksSelector, progressDataSelector } from 'ItemList/selectors'
import { contentParamSelector, viewModeListSelector } from 'Browse/selectors'
import { CONTENT } from 'constants/content'

import * as SC from 'ItemList/styled'
import { BrowseBlock } from 'style/components'

import ProgressBar from 'ProgressBar'
import ItemBar from 'ItemBar'
import ItemTile from 'ItemTile'

const ItemList = props => {
  const renderItemBars = data => {
    return data.map(item => <ItemBar {...item} key={item.id} />)
  }

  const renderItemTiles = data => (
    <SC.TileGrid>
      {data.map(item => <ItemTile {...item} key={item.id} />)}
    </SC.TileGrid>
  )

  const renderSubBlocks = subs => {
    return subs.map(subCat => (
      <Fragment key={subCat.name}>
        <SC.SubTitle>{subCat.name}</SC.SubTitle>
        {props.listView
          ? renderItemBars(subCat.items)
          : renderItemTiles(subCat.items)}
      </Fragment>
    ))
  }

  const renderSourceBlocks = () => {
    return props.blocks.map(subCategory => (
      <BrowseBlock key={subCategory.name}>
        <SC.SourceTitle>{subCategory.name}</SC.SourceTitle>
        {renderSubBlocks(subCategory.subs)}
      </BrowseBlock>
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
      {renderSourceBlocks()}
    </SC.ListWrap>
  )
}

ItemList.propTypes = {
  blocks: PropTypes.array.isRequired,
  content: PropTypes.number.isRequired,
  listView: PropTypes.bool.isRequired,
  progress: PropTypes.object.isRequired
}

export const mapStateToProps = (state, ownProps) => ({
  blocks: itemBlocksSelector(state, ownProps),
  content: contentParamSelector(state, ownProps),
  listView: viewModeListSelector(state),
  progress: progressDataSelector(state, ownProps)
})

const ReduxComponent = connect(mapStateToProps)(ItemList)

export default withRouter(ReduxComponent)
