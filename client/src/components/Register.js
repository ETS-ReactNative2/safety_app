import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Pane, Heading, TextInput, Button, Paragraph, toaster } from 'evergreen-ui'
import { Link } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  //form model
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  //catch errors
  const [formError, setFormError] = useState({
    password: false,
    password_confirmation: false,
    registerError: false
  })

  const handleChange = (e) => {
    setFormError({ ...formError, [e.target.name]: false , registerError: false})
    const newUser = {...form, [e.target.name]: e.target.value}
    setForm(newUser)
  } 

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.password !== form.password_confirmation){
      setFormError({...formError, password: true, password_confirmation: true})
      console.log(formError)
    }
    try {
      await axios.post('/api/auth/register/', form)
      toaster.success('Registering sucessful. Ready to log in', {
        duration: 10
      })
      navigate('/login')
    } catch (error) {
      setFormError({...formError, registerError: true})
    }
    

  }

  return (
    <Pane is='form' onSubmit={handleSubmit} className='form'>
      <Heading>Register</Heading>
      <TextInput
        label="Username"
        placeholder="Username"
        onChange={handleChange}
        name='username'
        value={form.username}
        isInvalid={formError.registerError}
        marginTop={8}
      />
      <TextInput
        label="Email"
        type='email'
        placeholder="Email"
        onChange={handleChange}
        name='email'
        value={form.email}
        isInvalid={formError.email || formError.registerError}
        
      />
      <TextInput
        label="Password"
        type='password'
        placeholder="Password"
        onChange={handleChange}
        minLength={8}
        name='password'
        value={form.password}
        isInvalid={formError.password || formError.registerError}
      />
      <TextInput
        label="Password Confirmation"
        type='password'
        placeholder="Confirm password"
        onChange={handleChange}
        name='password_confirmation'
        value={form.password_confirmation}
        isInvalid={formError.password_confirmation || formError.registerError}
      />
      <Button onClick={handleSubmit} disabled={formError.password || formError.registerError}>Register</Button>
      {formError.registerError && toaster.danger('Registration failed. Check your username and password.',{
      duration: 10,
    })}
      <Paragraph>Already a user? <Link to='/login'>Log in here.</Link></Paragraph>
    </Pane>
  )
}

export default Register