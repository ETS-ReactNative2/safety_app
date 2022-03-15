import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Pane, Paragraph, Heading, Popover, Badge, Text, Link, Position } from 'evergreen-ui'
import Box from 'ui-box/dist/src/box'
import { symptomsArr } from '../helpers/constants'

const SubstancePage = () => {

  const [substances, setSubstances] = useState({})
  const [hasError, setHasError] = useState({ error: false, message: '' })


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
    <Pane className='substances-container fade-in'>
      <Heading fontFamily='DM Serif Display' fontSize='x-large' marginBottom={20}>Substances</Heading>
      <Paragraph color='black' marginBottom={35}>These are the most common spiking substances. <br />Click to find out more.</Paragraph>
      <Box className='substance-page-image'></Box>
      <Box className='information-container'>
        {substances.length ?
          substances.map((item, index) => {
            return (
              <>
                <Popover
                  content={
                    <Pane className='substance-popover' margin={10} width={300} >
                      <Heading fontFamily='DM Serif Display' fontSize='large'>{item.name}</Heading>
                      <Text><strong>Class:</strong> {item.drug_class}</Text>
                      <Text><strong>Duration:</strong> {item.duration}</Text>
                      <Box marginBottom={5}>
                        <Text><strong>Symptoms</strong>:<br /></Text>
                        {item.symptoms.map((symptom, index) => {
                          return <Badge key={index + 20} color='pink'>{symptomsArr[symptom - 1]}</Badge>
                        })}
                      </Box>
                      <Link href={item.link}>talktofrank.com - {item.name}</Link>
                    </Pane>
                  }
                  position={Position.BOTTOM_RIGHT}
                >
                  <Box className='substance-button'><Text fontFamily='DM Serif Display' fontSize='large' color='black'>{item.name}</Text></Box>
                </Popover>
              </>
            )
          })
          :
          <Paragraph>Not working and this is the error: {hasError.message}</Paragraph>
        }
      </Box>
    </Pane >
  )
}

export default SubstancePage