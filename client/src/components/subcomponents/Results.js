import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Pane, Heading, Paragraph, Text, DotIcon, Link, Button, Badge, Strong } from 'evergreen-ui'
import Box from 'ui-box/dist/src/box'
import { symptomsArr } from '../../helpers/constants'
import alertIcon from '../../images/alertIcon.png'

const Results = ({ matches, selected, resetState }) => {

  const navigate = useNavigate()

  selected.sort((a, b) => a - b)
  console.log('selected', selected)
  console.log('matches', matches)


  return (
    <Pane className='result-container'>
      <Heading fontFamily='DM Serif Display' fontSize='x-large' color='black' marginBottom={20}>Your results</Heading>
      <Box className='matches-container'>
        <Text fontSize='15px' color='black'>Based on your symptoms, we think you might have been spiked with:</Text>

        {!!matches ?
          matches.map((match, index) => {
            return <Box key={index - 10} marginTop={5}>
              <Paragraph>
                <Strong
                  fontFamily='DM Serif Display'
                  color='black' fontSize='medium'>{match.name}
                </Strong> - matches:</Paragraph>
              <Box>
                {match.symptoms.map((symptom, index) => {
                  return selected.includes(symptom) && <Badge color='pink' marginRight={4} key={index + 13}>{symptomsArr[symptom - 1]}</Badge>
                })}
              </Box>
            </Box>
          })
          :
          <Paragraph>Something went wrong. </Paragraph>}

      </Box>
      <img className='alert-icon' src={alertIcon} alt='alert icon' />
      <Box className='result-action-one'>
        <Heading fontFamily='DM Serif Display' fontSize='large' marginBottom={4}>What to do now?</Heading>
        <Text fontSize='large' textDecoration='underline'><Strong>Report, report, report!</Strong></Text>
        <Paragraph>Spiking is a criminal offense, whether it happened now, recently or months ago. </Paragraph>
        <Text className='link-color'><Link href='/resources' fontStyle='italic'>CLICK HERE</Link> for full list of actions in case of an emergency</Text>
        <button className='frost web-only' onClick={() => navigate('/resources')}>Resources</button>
      </Box>

      <Box className='result-substance' textAlign='center' marginBottom={10} width={200} margin='auto'>
        <Heading fontFamily='DM Serif Display' fontSize='large' marginBottom={10}>Want to know more about these substances?</Heading>
        <Text className='web-only'>We listed the most commonly used spiking substances.</Text>
        <Box className='result-buttons'>
          <button className='frost' onClick={() => navigate('/substances')}>Substances</button>
          <Button
            onClick={() => {
              navigate('/symptomchecker')
              resetState()
            }}
            appearance='minimal'
            textDecoration='underline'
            fontSize='medium'
          >Restart?</Button>
        </Box>
      </Box>

    </Pane >
  )
}

export default Results