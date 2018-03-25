import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { itemBlocksSelector, progressDataSelector } from 'ItemList/selectors'
import { contentParamSelector, viewModeListSelector } from 'Browse/selectors'
import { CONTENT } from 'constants/content'

import * as SC from 'ItemList/styled'
import ProgressBar from 'ProgressBar'
import ItemTile from 'ItemTile'

const ItemList = props => {
  const renderItemPanels = data => {
    return data.map(item => <ItemTile {...item} key={item.id} />)
  }

  const renderBlockTiles = data => {
    console.log(data)
  }

  const renderSubBlocks = subs => {
    return subs.map(subCat => (
      <Fragment key={subCat.name}>
        <SC.SubTitle>{subCat.name}</SC.SubTitle>
        {props.listView
          ? renderItemPanels(subCat.items)
          : renderBlockTiles(subCat.items)}
      </Fragment>
    ))
  }

  const renderSourceBlocks = () => {
    return props.blocks.map(subCategory => (
      <SC.SourceBlock key={subCategory.name}>
        <SC.SourceTitle>{subCategory.name}</SC.SourceTitle>
        {renderSubBlocks(subCategory.subs)}
      </SC.SourceBlock>
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
