import React from 'react'

import * as SC from 'Import/styled'
import NavBar from 'NavBar'
import ImportForm from 'ImportForm'

const Import = () => (
  <SC.ImportPage>
    <NavBar />

    <ImportForm />
  </SC.ImportPage>
)

export default Import
