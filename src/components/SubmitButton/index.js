import React from 'react'
import { Button } from './styles'
import PropTypes from 'prop-types'

export const SubmitButton = ({ onClick, children, disabled, animation = {} }) => {
  return (
    <Button disabled={disabled} style={animation} onClick={onClick}>
      {children}
    </Button>
  )
}

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  animation: PropTypes.object
}
