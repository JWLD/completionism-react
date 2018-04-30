import React from 'react'
import { Field } from 'redux-form'

import { CATEGORIES_BY_SECTION as CATEGORIES } from 'constants/categories'

import * as SC from 'CategoryFields/styled'
import { CheckboxField } from 'formFields'

const CategoryFields = () => {
  const renderInputRows = categories => {
    return categories.map(({ battleNet, key, name }) => {
      if (!battleNet) return null

      return (
        <SC.CheckboxLabel key={key}>
          {name}
          <Field
            component={CheckboxField}
            name={key}
            StyledComponent={SC.CheckboxInput}
          />
          <SC.FakeInput className="fa fa-check" />
        </SC.CheckboxLabel>
      )
    })
  }

  const categorySections = CATEGORIES.map(section => (
    <SC.CheckboxWrap key={section.key}>
      {renderInputRows(section.categories)}
    </SC.CheckboxWrap>
  ))

  return categorySections
}

export default CategoryFields
