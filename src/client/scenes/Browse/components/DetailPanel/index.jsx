import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { itemDataSelector } from 'scenes/Browse/components/DetailPanel/selectors'

import * as SC from './styled'

export const DetailPanel = props => {
  console.log(props.itemData)

  return <SC.DetailPanel />
}

DetailPanel.propTypes = {
  itemData: PropTypes.array.isRequired
}

const mapStateToProps = (state, props) => ({
  itemData: itemDataSelector(state, props)
})

const reduxComponent = connect(mapStateToProps)(DetailPanel)

export default withRouter(reduxComponent)
