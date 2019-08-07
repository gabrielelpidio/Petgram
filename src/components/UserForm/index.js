import React, { Fragment } from 'react'
import { useSpring } from 'react-spring'

import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error, Loader } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  const disabledAnimation = useSpring({
    opacity: disabled ? 0.3 : 1
  })

  return (
    <Fragment>
      <Title>{title}</Title>
      {
        error &&
        <Error>{error}</Error>
      }
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input
          disabled={disabled}
          placeholder='Email'
          type='email'
          {...email}
          style={disabledAnimation}
        />
        <Input
          disabled={disabled}
          placeholder='Password'
          type='password'
          style={disabledAnimation}
          {...password}
        />
        <SubmitButton disabled={disabled} style={disabledAnimation}>
          {
            title
          }
          {
            disabled && <Loader size={10} color='white' />
          }
        </SubmitButton>
      </Form>

    </Fragment>
  )
}
