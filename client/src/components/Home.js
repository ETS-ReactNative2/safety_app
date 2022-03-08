import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Pane, Heading, Text, Paragraph, Button, Image } from 'evergreen-ui'
import Box from 'ui-box/dist/src/box'

const Home = () => {
    const navigate = useNavigate()

    return (
        <Pane className='home-container'>

            <Box className='hero'>
                <Heading>SafetyApp</Heading>
                <Text>Lorem Ipsum</Text>
            </Box>

            <Pane className='home-mid-section'>
                <Box className='home-symptom-container'>
                    <Box>
                        <Heading>Symptom Checker</Heading>
                        <Paragraph>Have you been spiked? Not sure what you have been spiked with? Try our Symptom Checker and get potential matches based on your symptoms.</Paragraph>
                        <Button onClick={() => navigate('/symptomchecker')}>SymptomChecker</Button>
                    </Box>
                    <Box className='image'></Box>
                </Box>
                <Box>
                    <Box className='image'></Box>
                    <Heading>Resources</Heading>
                    <Paragraph></Paragraph>
                    <Button onClick={() => navigate('/resources')}>Resources</Button>

                </Box>
            </Pane>
        </Pane>
    )

}

export default Home