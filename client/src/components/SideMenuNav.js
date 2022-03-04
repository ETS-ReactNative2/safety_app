import React, { useState } from 'react'
import { SideSheet, Paragraph, Button, MenuIcon } from 'evergreen-ui'
import { Link } from 'react-router-dom'

const SideMenuNav = () =>{

    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <SideSheet isShown={isOpen} onCloseComplete={() => setIsOpen(false)} width={200}>
            <Paragraph><Link to="/register">Register</Link></Paragraph>
            <Paragraph><Link to="/login">Login</Link></Paragraph>
            <Paragraph><Link to="/symptomchecker">Symptom Checker</Link></Paragraph>
            <Paragraph><Link to="/resources">Resources</Link></Paragraph>
            <Paragraph><Link to="/links">Links</Link></Paragraph>
            <Paragraph>Emergency numbers</Paragraph>
        </SideSheet>
        <Button onClick={() => setIsOpen(true)}><MenuIcon /></Button>
        </>
    )

}

export default SideMenuNav