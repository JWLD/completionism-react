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
    return Object.keys(props.data).map(subCategory => {
      const subCategoryData = props.data[subCategory]

      return (
        <SC.ItemListBlock key={subCategory}>
          <SC.BlockTitle>{subCategory}</SC.BlockTitle>
          {renderBlockTiles(subCategoryData)}
        </SC.ItemListBlock>
      )
    })
  }

  return renderListBlocks()
}

ItemList.propTypes = {
  data: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  data: dataSelector(state, ownProps)
})

export default withRouter(connect(mapStateToProps)(ItemList))
