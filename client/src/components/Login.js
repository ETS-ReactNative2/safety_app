import React, { useState } from 'react'
import axios from 'axios'
import { Pane, Heading, TextInput, Button, Paragraph, toaster } from 'evergreen-ui'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [formError, setFormError] = useState(false)

  //setting local token
  const setTokenToLocal = (token) => {
    window.localStorage.setItem('safety-token', token)
  }

  const handleChange = (e) => {
    setFormError(false)
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/login/', form)
      setTokenToLocal(data.token)
      toaster.success('Welcome back! Login successful.', {
        duration: 10
      })
      navigate('/')
    } catch (error) {
      setFormError(true)
      console.log(error)
    }
  }

  return (
    <Pane is='form' onSubmit={handleSubmit} className='form'>
      <Heading fontFamily='DM Serif Display'>Login</Heading>
      <TextInput
        label="Email"
        placeholder="Email"
        name='email'
        value={form.email}
        onChange={handleChange}
        isInvalid={formError}
      />
      <TextInput
        label="Password"
        type='password'
        placeholder="Password"
        name='password'
        value={form.password}
        onChange={handleChange}
        isInvalid={formError}
      />
      <Button onClick={handleSubmit} disabled={formError}>Login</Button>
      {formError && toaster.danger('Something went wrong. Login failed.', {
        duration: 10,
      })}
      <Paragraph>New user? <Link to='/register'>Register here.</Link></Paragraph>
    </Pane>
  )
}

export default Login