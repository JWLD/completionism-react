import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { itemBlocksSelector, progressDataSelector } from 'ItemList/selectors'
import { activeContentSelector } from 'Browse/selectors'
import { VIEW_MODES } from 'ControlPanel/constants'
import { viewModeSelector } from 'SidePanel/selectors'
import { CONTENT } from 'constants/content'
import * as SC from 'ItemList/styled'

import { BrowseBlock } from 'style/components'
import ProgressBox from 'ProgressBox'
import ItemBar from 'ItemBar'
import TileGrid from 'TileGrid'

const ItemList = ({ blocks, content, progress, viewMode }) => {
  const renderItemBars = data => {
    return data.map(item => <ItemBar {...item} key={item.id} />)
  }

  const renderTileGrid = items => <TileGrid items={items} />

  const renderSubBlocks = subCategories => {
    return subCategories.map(subCategory => (
      <Fragment key={subCategory.name}>
        <SC.SubTitle>{subCategory.name}</SC.SubTitle>
        {viewMode === VIEW_MODES.LIST
          ? renderItemBars(subCategory.items)
          : renderTileGrid(subCategory.items)}
      </Fragment>
    ))
  }

  const sourceBlocks = blocks.map(sourceBlock => (
    <BrowseBlock key={sourceBlock.name}>
      <SC.SourceTitle>{sourceBlock.name}</SC.SourceTitle>
      {renderSubBlocks(sourceBlock.subCategories)}
    </BrowseBlock>
  ))

  const progressBarTitle = CONTENT[content].xpac

  return (
    <SC.ItemList>
      <ProgressBox
        count={progress.count}
        title={progressBarTitle}
        total={progress.total}
      />
      {sourceBlocks}
    </SC.ItemList>
  )
}

ItemList.propTypes = {
  blocks: PropTypes.array.isRequired,
  content: PropTypes.number.isRequired,
  progress: PropTypes.object.isRequired,
  viewMode: PropTypes.string.isRequired
}

export const mapStateToProps = state => ({
  blocks: itemBlocksSelector(state),
  content: activeContentSelector(state),
  progress: progressDataSelector(state),
  viewMode: viewModeSelector(state)
})

export default connect(mapStateToProps)(ItemList)
