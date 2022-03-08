import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Pane, Paragraph, Heading, Popover, Button, Text, Ul, Li, Link } from 'evergreen-ui'
import Box from 'ui-box/dist/src/box'

const SubstancePage = () => {

  const [substances, setSubstances] = useState({})
  const [hasError, setHasError] = useState({ error: false, message: '' })

  const symptomsArr = [
    'Confusion',
    'Decreased inhibitions',
    'Dizziness',
    'Drunk or more drunk than expected',
    'Euphoric sensatations',
    'Hallucinations',
    'Inability to protect themselves',
    'Memory loss',
    'Nausea, vomiting',
    'Paralysis',
    'Poor coordination',
    'Problem breathing',
    'Sleepiness',
    'Slurring of speech',
    'Sweating',
    'Unconsciousness',
    'Unusually long hangover'
  ]

  const getData = async () => {
    try {
      const { data } = await axios.get('api/substances/all/')
      setSubstances(data)
    } catch (error) {
      console.log(error)
      setHasError({ error: true, message: error.message })
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <Pane className='substance-container'>
      <Heading>Common spiking substances</Heading>
      <Box className='information-container'>
        {substances.length ?
          substances.map((item, index) => {
            return (
              <>
                <Popover
                  content={
                    <Pane margin={10} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                      <Heading>{item.name}</Heading>
                      <Text>Class: {item.drug_class}</Text>
                      <Text>Duration: {item.duration}</Text>
                      <Box>
                        <Ul><Text>Symptoms:</Text>
                          {item.symptoms.map((symptom, index) => {
                            return <Li key={index + 20}>{symptomsArr[symptom]}</Li>
                          })}
                        </Ul>
                      </Box>
                      <Link href={item.link}>talktofrank.com - {item.name}</Link>
                    </Pane>
                  }
                >
                  <Box className='substance-button'><Text>{item.name}</Text></Box>
                </Popover>
              </>
            )
          })
          :
          <Paragraph>Not working and this is the error: {hasError.message}</Paragraph>
        }
      </Box>
    </Pane>
  )
}

export default SubstancePage