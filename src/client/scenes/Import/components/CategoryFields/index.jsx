import React, { Component } from 'react'
import { Field } from 'redux-form'

import CATEGORIES from 'constants/categories'

import * as SC from './styled'
import { CheckboxField } from 'components/formFields'

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

  const renderCheckboxColumns = () => {
    return Object.keys(CATEGORIES).map(category => (
      <SC.CheckboxWrap key={category}>
        {renderInputRows(CATEGORIES[category])}
      </SC.CheckboxWrap>
    ))
  }

  return renderCheckboxColumns()
}

export default CategoryFields
