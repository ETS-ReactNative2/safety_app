import React from 'react'
import { Pane, Heading, TextInput, Button, Paragraph } from 'evergreen-ui'
import { Link } from 'react-router-dom'

const Register = () => {

  return (
    <Pane>
      <Heading>Register</Heading>
      <TextInput
        label="Username"
        placeholder="Username"
      />
      <TextInput
        label="Email"
        placeholder="Email"
      />
      <TextInput
        label="Password"
        type='password'
        placeholder="Password"
      />
      <TextInput
        label="Password Confirmation"
        type='password'
        placeholder="Password"
      />
      <Button>Register</Button>
      <Paragraph>Already a user? <Link to='/login'>Log in here.</Link></Paragraph>
    </Pane>
  )
}

export default Register