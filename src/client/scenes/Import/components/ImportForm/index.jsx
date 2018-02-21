import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'

import { fetchCharData } from './utils'

import FormBlock from 'scenes/Import/components/FormBlock'
import CategoryFields from 'scenes/Import/components/CategoryFields'
import CharacterFields from 'scenes/Import/components/CharacterFields'

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

const FormWrapper = reduxForm({
  form: 'import',
  initialValues: {
    character: {
      region: 'eu'
    }
  }
})

export default FormWrapper(ImportForm)
