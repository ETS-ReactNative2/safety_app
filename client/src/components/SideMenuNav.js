import React, { useState } from 'react'
import { SideSheet, Paragraph, Button, MenuIcon } from 'evergreen-ui'
import { Link } from 'react-router-dom'

const SideMenuNav = () =>{

    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <SideSheet isShown={isOpen} onCloseComplete={() => setIsOpen(false)} width={200}>
            <Paragraph><Link to="/register" onClick={() => setIsOpen(false)}>Register</Link></Paragraph>
            <Paragraph><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></Paragraph>
            <Paragraph><Link to="/symptomchecker" onClick={() => setIsOpen(false)}>Symptom Checker</Link></Paragraph>
            <Paragraph><Link to="/resources" onClick={() => setIsOpen(false)}>Resources</Link></Paragraph>
            <Paragraph><Link to="/links" onClick={() => setIsOpen(false)}>Links</Link></Paragraph>
            <Paragraph>Emergency numbers</Paragraph>
        </SideSheet>
        <Button onClick={() => setIsOpen(true)}><MenuIcon /></Button>
        </>
    )

}

export default SideMenuNav