import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Heading } from 'evergreen-ui'
import SideMenuNav from './components/SideMenuNav'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import LinkPage from './components/LinkPage'
import SubstancePage from './components/SubstancePage'
import SymptomChecker from './components/SymptomChecker'


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
      <Route path='/symptomchecker' element={<SymptomChecker />} />
      <Route path='/resources' element={<LinkPage />} />
      <Route path='/substances' element={<SubstancePage />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
