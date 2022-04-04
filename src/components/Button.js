import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
const onClick = (e) => {
    console.log("The button was clicked", e)
}

  return (
    <button onClick={onClick} style={{ backgroundColor: color}} className='btn'>{text}</button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button