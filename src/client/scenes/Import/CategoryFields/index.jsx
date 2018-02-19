import React, { Component } from 'react'
import { Field } from 'redux-form'

import CATEGORIES from 'constants/categories'

import { CheckboxField } from 'components/ReduxFields'
import * as SC from './styled'

class CategoryFields extends Component {
  renderInputRows(categories) {
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

  renderCheckboxColumns() {
    return Object.keys(CATEGORIES).map(category => (
      <SC.CheckboxWrap key={category}>
        {this.renderInputRows(CATEGORIES[category])}
      </SC.CheckboxWrap>
    ))
  }

  render() {
    return this.renderCheckboxColumns()
  }
}

export default CategoryFields