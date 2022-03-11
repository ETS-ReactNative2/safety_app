import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Pane, Heading, Paragraph, Button as button, ChevronDownIcon, Link } from 'evergreen-ui'
import Box from 'ui-box/dist/src/box'

const Home = () => {
    const navigate = useNavigate()

    return (
        <Pane className='home-container'>

            <Box className='hero kenburns-top'>
                <Heading fontFamily='DM Serif Display' className='main-logo tracking-in-expand'>SafetyApp</Heading>
                <ChevronDownIcon size={40} className='bounce-top' />
            </Box>

            <Pane className='home-mid-section'>
                <Pane className='home-symptomchecker'>
                    <Box className='home-symptomchecker-text'>
                        <Heading
                            fontFamily='DM Serif Display'
                            fontSize='xx-large'
                            lineHeight={1}
                            textAlign='left'
                            color='black'
                        >Symptom Checker</Heading>
                        <Paragraph className='web-only' marginTop={10}>Have you been spiked? Not sure what you have been spiked with? <br />Try our Symptom Checker and get potential matches based on your symptoms.</Paragraph>
                        <button className='frost shadow-drop-br' onClick={() => navigate('/symptomchecker')}>SymptomChecker</button>
                    </Box>
                    <Box className='home-image'></Box>
                </Pane>
                <Pane className='home-resources'>
                    <Box className='home-image' id='helpline-image'></Box>
                    <Box className='home-resources-text'>
                        <Heading
                            fontFamily='DM Serif Display'
                            fontSize='xx-large'
                            lineHeight={1}
                            textAlign='right'
                        >Resources and Helplines</Heading>
                        <Paragraph className='web-only' marginTop={10}>How to deal with comedown after spiking? <br />Which emergency number should I call? <br />These and other questions are answered right here.</Paragraph>
                        <button className='frost shadow-drop-br' onClick={() => navigate('/resources')}>Resources</button>
                    </Box>
                </Pane>
                <Box className='home-register'>
                    <Heading
                        fontFamily='DM Serif Display'
                        fontSize='xx-large'
                        lineHeight={1}
                        color='black'
                        marginBottom={10}
                    >Register</Heading>
                    <Paragraph>Register and become an user. <br />Logged in users can create reports of any spikings and see them populate the world map. <br />All information will stay anonymous.</Paragraph>
                    <button className='frost shadow-drop-br' onClick={() => navigate('/register')}>Register</button>
                </Box>
                <Paragraph marginTop={50} >created by <Link className='link-color' href='https://github.com/EssiKarj' textDecoration='underline'>EssiKarj</Link></Paragraph>
            </Pane>



        </Pane>
    )

}

export default Home