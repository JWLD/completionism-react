import React from 'react'

import { CATEGORIES_BY_SECTION as CATEGORIES } from 'constants/categories'
import { PageWrap } from 'style/components'
import NavBar from 'NavBar'

import * as SC from 'Landing/styled'
import CategoryPanel from 'CategoryPanel'

const Landing = () => {
  const renderCategoryPanels = section => {
    return section.categories.map(category => (
      <CategoryPanel
        category={category.key}
        icon={category.icon}
        key={category.key}
        name={category.name}
      />
    ))
  }

  const categoryBlocks = CATEGORIES.map(section => (
    <SC.CategoryBlock key={section.key}>
      {renderCategoryPanels(section)}
    </SC.CategoryBlock>
  ))

  return (
    <PageWrap>
      <NavBar />

      {categoryBlocks}
    </PageWrap>
  )
}

export default Landing
