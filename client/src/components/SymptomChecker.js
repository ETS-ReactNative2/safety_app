import React, { useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Pane, Button, Paragraph, Heading, Checkbox, Text } from 'evergreen-ui'
// import { Box } from 'ui-box'

const SymptomChecker = () => {

  const [ understoodChecked, setUnderstoodChecked ] = useState(false)
  const [ actionsChecked, setActionsChecked ] = useState({
    first: false,
    second: false,
    third: false
  })

  // const [choices, setChoices] = useState({ choices: [] })
  // const [submitError, setSubmitError] = useState({ error: false, message: '' })

  // const handleSelect = (e) => {

  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try {

  //   } catch (error) {
  //     setSubmitError({ error: true, message: 'Sorry. Something went wrong while submitting.' })
  //   }
  // }

  return (
    <Pane>
      <Heading>Symptom Checker</Heading>
      <div className='symptom-slides-container'>
        <Parallax pages={3} horizontal>
          <ParallaxLayer 
          offset={0} 
          speed={0.3} 
          >
            <Paragraph>First things first. This is created to give you support if you or someone you know have been spiked and the results are for guidance only. However all spikings should be reported to the local police as soon as possible.</Paragraph>
            <Checkbox
            label='Guidance only, got it.'
            checked={understoodChecked}
            onChange={e => setUnderstoodChecked(e.target.checked)}
            />
            {understoodChecked && <Text> Scroll or drag to right to continue.</Text>}
          </ParallaxLayer>
          <ParallaxLayer 
          offset={1}
          speed={0.3}
          >
            <Text>Let's check in on few important things next.</Text>
          <Paragraph>Check all the boxes once you're done, even if you didn't have to do anything.</Paragraph>
          <Checkbox
          label='If the person spiked (you or someone else) is feeling nauseous make sure they are laying sideways to avoid choking.'
          checked={actionsChecked.first}
          onChange={e => setActionsChecked(e.target.checked)}
          />
          <Checkbox 
          label='If the person spiked (you or someone else) is losing responsiveness, CALL HELP and check their breathing.'
          checked={actionsChecked.second}
          onChange={e => setActionsChecked(e.target.checked)}
          />
          <Checkbox 
          label='Do not let the person spiked (you or someone else) go to the emergency room alone.'
          checked={actionsChecked.third}
          onChange={e => setActionsChecked(e.target.checked)}
          />
            {actionsChecked.first && actionsChecked.second && actionsChecked.third && <Text>Scroll or drag right to continue.</Text>}
            </ParallaxLayer>
          <ParallaxLayer
          offset={2}
          speed={0.3}>
          <Paragraph>Last step. Symptoms, click all that apply. </Paragraph>

          <Button>Take me to my results.</Button>
          </ParallaxLayer>
        </Parallax>

      </div>
    </Pane>
  )
}

export default SymptomChecker