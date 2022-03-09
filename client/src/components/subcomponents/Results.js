import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Pane, Heading, Paragraph, Text, ArrowRightIcon, Link, Button, Badge, Strong } from 'evergreen-ui'
import Box from 'ui-box/dist/src/box'
import { symptomsArr } from '../../helpers/constants'

const Results = ({ matches, selected, resetState }) => {

  const navigate = useNavigate()

  selected.sort((a, b) => a - b)
  console.log('selected', selected)
  console.log('matches', matches)


  return (
    <Pane>
      <Box className='result-container'>
        <Heading fontFamily='DM Serif Display'>Your results</Heading>
        <Box className='matches-container'>
          <Text>Based on your symptoms, we think you might have been spiked with:</Text>

          {!!matches ?
            matches.map((match, index) => {
              return <Box key={index - 10}>
                <Paragraph><Strong fontFamily='DM Serif Display'>{match.name}</Strong> - matches:</Paragraph>
                <Box>
                  {match.symptoms.map((symptom, index) => {
                    return selected.includes(symptom) && <Badge color='#E06C9F' key={index + 13}>{symptomsArr[symptom - 1]}</Badge>
                  })}
                </Box>
              </Box>
            })
            :
            <Paragraph>Something went wrong. </Paragraph>}

        </Box>
        <Box>
          <Heading fontFamily='DM Serif Display'>What to do now?</Heading>
          <ArrowRightIcon /> <Text>Report, report, report!</Text>
          <Paragraph>Spiking is a criminal offense, whether it happened now, recently or months ago. </Paragraph>
          <Text><Link href='/resources'>CLICK HERE</Link> for full list of actions in case of an emergency</Text>
        </Box>
        <Box>
          <Heading fontFamily='DM Serif Display'>Want to know more about these substances?</Heading>
          <Text>We listed the most commonly used spiking substances.</Text>
          <Button onClick={() => navigate('/substances')}>Substances</Button>
        </Box>
        <Button onClick={() => {
          navigate('/symptomchecker')
          resetState()
        }}>Reset?</Button>
      </Box>
    </Pane>
  )
}

export default Results