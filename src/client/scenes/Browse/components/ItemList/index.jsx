import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { itemBlocksSelector, progressDataSelector } from 'ItemList/selectors'
import { activeContentSelector } from 'Browse/selectors'
import { viewModeListSelector } from 'SidePanel/selectors'
import { CONTENT } from 'constants/content'
import * as SC from 'ItemList/styled'

import { BrowseBlock } from 'style/components'
import ProgressBar from 'ProgressBar'
import ItemBar from 'ItemBar'
import TileGrid from 'TileGrid'

const ItemList = props => {
  const renderItemBars = data => {
    return data.map(item => <ItemBar {...item} key={item.id} />)
  }

  const renderTileGrid = items => <TileGrid items={items} />

  const renderSubBlocks = subs => {
    return subs.map(subCat => (
      <Fragment key={subCat.name}>
        <SC.SubTitle>{subCat.name}</SC.SubTitle>
        {props.listView
          ? renderItemBars(subCat.items)
          : renderTileGrid(subCat.items)}
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
    <SC.ItemList>
      <ProgressBar
        count={props.progress.count}
        title={progressBarTitle}
        total={props.progress.total}
      />
      {renderSourceBlocks()}
    </SC.ItemList>
  )
}

ItemList.propTypes = {
  blocks: PropTypes.array.isRequired,
  content: PropTypes.number.isRequired,
  listView: PropTypes.bool.isRequired,
  progress: PropTypes.object.isRequired
}

export const mapStateToProps = state => ({
  blocks: itemBlocksSelector(state),
  content: activeContentSelector(state),
  listView: viewModeListSelector(state),
  progress: progressDataSelector(state)
})

export default connect(mapStateToProps)(ItemList)
