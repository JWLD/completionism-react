import React from 'react'
import PropTypes from 'prop-types'
import { FormSection, reduxForm } from 'redux-form'

import { fetchCharData } from './utils'

import FormBlock from 'scenes/Import/FormBlock'
import CategoryFields from 'scenes/Import/CategoryFields'
import CharacterFields from 'scenes/Import/CharacterFields'

export const ImportForm = props => (
  <form onSubmit={props.handleSubmit(fetchCharData)}>
    <FormBlock
      header="Select Categories"
      name="categories"
      fieldsComponent={<CategoryFields />}
    />
    <FormBlock
      header="Select Character"
      name="character"
      fieldsComponent={<CharacterFields />}
    />
  </form>
)

ImportForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

const importReduxForm = reduxForm({
  form: 'import',
  initialValues: {
    character: {
      region: 'eu'
    }
  }
})

export default importReduxForm(ImportForm)
