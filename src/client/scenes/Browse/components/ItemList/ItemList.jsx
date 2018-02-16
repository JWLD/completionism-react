import React from 'react'
import PropTypes from 'prop-types'

import ProgressBar from 'components/ProgressBar/ProgressBar'
import Spinner from 'components/Spinner/Spinner'

import ItemTile from '../ItemTile/ItemTile'
import {
  filterByField,
  filterByFaction,
  orderByFields,
  orderObjectByKeys,
  organiseIntoSubcats
} from '../../services/dataHelpers'
import * as SC from './styled'

const filterData = props => {
  let filtered = props.categoryData

  filtered = filtered.filter(item =>
    item.name.toLowerCase().includes(props.filterVal)
  )
  filtered = filterByField(filtered, 'content', props.content)
  filtered = orderByFields(filtered, ['name', 'quality'])

  const { faction } = localStorage[props.category]
    ? JSON.parse(localStorage[props.category]).char
    : 2
  filtered = filterByFaction(filtered, faction)

  return filtered
}

const organiseData = data => {
  let organised = organiseIntoSubcats(data)
  organised = orderObjectByKeys(organised)

  return organised
}

const createItemLists = (category, categoryData, data, storageData) => {
  if (data.length === 0) {
    return <Spinner size={5} />
  }

  if (Object.keys(data).length === 0) {
    return (
      <SC.ItemListBlock>
        <SC.BlockTitle>No Items</SC.BlockTitle>
      </SC.ItemListBlock>
    )
  }

  return Object.keys(data).map(subCat => {
    const subCatHeader = <SC.BlockTitle>{subCat}</SC.BlockTitle>

    const tiles = data[subCat].map(item => (
      <ItemTile
        key={item.id}
        {...item}
        category={category}
        categoryData={categoryData}
        storageData={storageData}
      />
    ))

    return (
      <SC.ItemListBlock key={subCat}>
        {subCatHeader}
        {tiles}
      </SC.ItemListBlock>
    )
  })
}

const ItemList = props => {
  const storageData = localStorage[props.category]
    ? JSON.parse(localStorage[props.category]).ids
    : []
  const filteredData = filterData(props)
  const organisedData = organiseData(filteredData)
  const itemLists = createItemLists(
    props.category,
    props.categoryData,
    organisedData,
    storageData
  )

  return (
    <SC.ItemList>
      <ProgressBar
        data={filteredData}
        storageData={storageData}
        routeProps={props.routeProps}
      />
      {itemLists}
    </SC.ItemList>
  )
}

ItemList.propTypes = {
  category: PropTypes.string.isRequired,
  categoryData: PropTypes.array.isRequired,
  routeProps: PropTypes.object.isRequired
}

export default ItemList
