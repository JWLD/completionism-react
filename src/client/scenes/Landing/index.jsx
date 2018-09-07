import React from 'react'

import { CATEGORIES_BY_SECTION as CATEGORIES } from 'constants/categories'
import { PageWrap } from 'style/components'

import CategoryPanel from 'CategoryPanel'
import NavBar from 'NavBar'

import { CategoriesWrap, SectionTitle, SectionWrap } from './styled'

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
    <SectionWrap key={section.key}>
      <SectionTitle>{section.key}</SectionTitle>
      <CategoriesWrap>{renderCategoryPanels(section)}</CategoriesWrap>
    </SectionWrap>
  ))

  return (
    <PageWrap>
      <NavBar />

      {categoryBlocks}
    </PageWrap>
  )
}

export default Landing
