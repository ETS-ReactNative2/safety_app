import React, { useState } from 'react'
import { SideSheet, Paragraph, Button, MenuIcon, Pane, Heading } from 'evergreen-ui'
import { Link } from 'react-router-dom'

const SideMenuNav = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <Pane className='navbar-container'>
            <SideSheet isShown={isOpen} onCloseComplete={() => setIsOpen(false)} width={200} className='side-sheet'>
                <Paragraph><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></Paragraph>
                <Paragraph><Link to="/symptomchecker" onClick={() => setIsOpen(false)}>Symptom Checker</Link></Paragraph>
                <Paragraph><Link to="/resources" onClick={() => setIsOpen(false)}>Resources</Link></Paragraph>
                <Paragraph><Link to="/links" onClick={() => setIsOpen(false)}>Links & Helplines</Link></Paragraph>
                <Paragraph><Link to="/substances" onClick={() => setIsOpen(false)}>Substances</Link></Paragraph>
            </SideSheet>
            <Heading><Link to='/'>SafetyApp</Link></Heading>
            <Button onClick={() => setIsOpen(true)}><MenuIcon /></Button>
        </Pane>
    )

}

export default SideMenuNav