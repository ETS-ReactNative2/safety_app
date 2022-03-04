import React from 'react'
import { Pane, Heading, TextInput, Button, Paragraph } from 'evergreen-ui'
import { Link } from 'react-router-dom'

const Login = () => {

return(
  <Pane>
    <Heading>Login</Heading>
    <TextInput 
      label="Email"
      placeholder="Email"
    />
    <TextInput 
      label="Password"
      type='password'
      placeholder="Password"/>
    <Button>Login</Button>
    <Paragraph>New user? <Link to='/register'>Register here.</Link></Paragraph>
  </Pane>
)
}

export default Login