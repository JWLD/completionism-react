import React from 'react'

import * as SC from './styled'
import NavBar from 'components/NavBar'
import ImportForm from 'scenes/Import/ImportForm'

const Import = () => (
  <SC.ImportPage>
    <NavBar />

    <ImportForm />
  </SC.ImportPage>
)

export default Import
