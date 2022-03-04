import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Heading } from 'evergreen-ui'
import SideMenuNav from './components/SideMenuNav'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'


function App() {
  

  return (
    <div className='app-container'>
    <BrowserRouter>
    <Heading><Link to='/'>SafetyApp</Link></Heading>
    <SideMenuNav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/symptomchecker' element={<Login />} />
      <Route path='/resources' element={<Login />} />
      <Route path='/links' element={<Login />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
