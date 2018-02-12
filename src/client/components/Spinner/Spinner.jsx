import React from 'react'
import PropTypes from 'prop-types'

const Spinner = props => {
  const style = {
    height: `${props.size}rem`,
    width: `${props.size}rem`,
    borderWidth: `${props.size * 0.175}rem`
  }

  return (
    <div>
      <div className="spinner" style={style} />
    </div>
  )
}

Spinner.propTypes = {
  size: PropTypes.number.isRequired
}

export default Spinner
