import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideMenuNav from './components/SideMenuNav'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import LinkPage from './components/subcomponents/LinkPage'
import SubstancePage from './components/SubstancePage'
import SymptomChecker from './components/SymptomChecker'
import Results from './components/subcomponents/Results'
import Resources from './components/Resources'
import Report from './components/Report'
import ReportsDashboard from './components/ReportsDashboard'


function App() {

  const [matches, setMatches] = useState(false)
  const [selected, setSelected] = useState([])

  const resetState = () => {
    setMatches(false)
    setSelected([])
  }


  return (
    <div className='app-container'>
      <BrowserRouter>
        <SideMenuNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/symptomchecker' element={<SymptomChecker matches={matches} setMatches={setMatches} selected={selected} setSelected={setSelected} />} />
          <Route path='/results' element={<Results matches={matches} selected={selected} resetState={resetState} />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/links' element={<LinkPage />} />
          <Route path='/substances' element={<SubstancePage />} />
          <Route path='/report' element={<Report />} />
          <Route path='/reportsdashboard' element={<ReportsDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
