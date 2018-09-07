import { createSelector } from 'reselect'

import { categoryDataSelector as getCategoryData } from 'redux/selectors'

import { extractProgressData } from './helpers'

const getCategory = (state, props) => props.category

export const getProgressData = createSelector(
  [getCategory, getCategoryData],
  (category, categoryData) => extractProgressData({ category, categoryData })
)
