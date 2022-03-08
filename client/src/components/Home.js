import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Pane, Heading, Text, Paragraph, Image, Button } from 'evergreen-ui'
import Box from 'ui-box/dist/src/box'

const Home = () => {
    const navigate = useNavigate()

    return (
        <Pane width={100} margin={15}>

            <Box className='hero' width='fit-content'>
                <Heading>SafetyApp</Heading>
                <Text>Lorem Ipsum</Text>
            </Box>

            <Pane className='home-mid-section'>
                <Box width={300}>
                    <Heading>Symptom Checker</Heading>
                    <Paragraph>Have you been spiked? Not sure what you have been spiked with? Try our Symptom Checker and get potential matches based on your symptoms.</Paragraph>
                    <Button onClick={() => navigate('/symptomchecker')}>SymptomChecker</Button>
                </Box>
                <Box>
                    <Heading>Resources</Heading>
                    <Paragraph>iholshfgo</Paragraph>
                    <Button onClick={() => navigate('/resources')}>Resources</Button>

                </Box>
            </Pane>
        </Pane>
    )

}

export default Home