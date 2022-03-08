import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Pane, Button, Paragraph, Heading, Checkbox, Text, Switch, ArrowRightIcon, Spinner } from 'evergreen-ui'
// import { Box } from 'ui-box'

const SymptomChecker = () => {

  const navigate = useNavigate()

  const [steps, setSteps] = useState(0)

  const symptoms = [
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

  const [understoodChecked, setUnderstoodChecked] = useState(false)
  const [actionsChecked, setActionsChecked] = useState({
    first: false,
    second: false,
    third: false
  })

  const [selected, setSelected] = useState([])
  const [matches, setMatches] = useState({})

  const handleSelect = (index) => {
    setSelected(selected.includes(index) ?
      selected.filter(i => i !== index) :
      [...selected, index]
    )
  }

  const handleSubmit = async () => {
    const postChoices = { choices: selected }
    try {
      const { data } = await axios.post('api/substances/matches/', postChoices)
      setMatches(data)
      setSteps(3)
    } catch (error) {
      console.log(error)
    }
  }


  //JSX pages - Symptom form
  const StepOne = () => <Pane>
    <Paragraph>First things first. This is created to give you support if you or someone you know have been spiked and the results are for guidance only. However all spikings should be reported to the local police as soon as possible.</Paragraph>
    <Switch
      checked={understoodChecked}
      onChange={e => setUnderstoodChecked(e.target.checked)}
    />
    <Text>Guidance only, got it.</Text>
    {understoodChecked && <Button onClick={() => setSteps(1)} iconAfter={ArrowRightIcon}>Next</Button>}
  </Pane>


  const StepTwo = () => <Pane>
    <Text>Let's check in on few important things next.</Text>
    <Paragraph>Check all the boxes once you're done, even if you didn't have to do anything.</Paragraph>
    <Checkbox
      label='If the person spiked (you or someone else) is feeling nauseous make sure they are laying sideways to avoid choking.'
      checked={actionsChecked.first}
      onChange={e => setActionsChecked({ ...actionsChecked, first: e.target.checked })}
    />
    <Checkbox
      label='If the person spiked (you or someone else) is losing responsiveness, CALL HELP and check their breathing.'
      checked={actionsChecked.second}
      onChange={e => setActionsChecked({ ...actionsChecked, second: e.target.checked })}
    />
    <Checkbox
      label='Do not let the person spiked (you or someone else) go to the emergency room alone.'
      checked={actionsChecked.third}
      onChange={e => setActionsChecked({ ...actionsChecked, third: e.target.checked })}
    />
    {actionsChecked.first && actionsChecked.second && actionsChecked.third && <Button onClick={() => setSteps(2)} iconAfter={ArrowRightIcon}>Next</Button>}
  </Pane>



  const StepThree = () => <Pane>
    <Paragraph>Last step. Symptoms, click all that apply. (min. 3)</Paragraph>
    {symptoms.map((item, index) => {
      const isSelected = selected.includes(index + 1)

      return <Button
        key={index}
        onClick={() => handleSelect(index + 1)}
        style={{ border: `2px solid ${isSelected ? 'navy' : 'white'}` }}
      >
        <strong color={isSelected ? 'white' : 'black'}>{item} {isSelected ? '-' : '+'}</strong>
      </Button>
    })}
    {understoodChecked && actionsChecked.first && actionsChecked.second && actionsChecked.third
      && <Button iconAfter={ArrowRightIcon} onClick={handleSubmit}>Take me to my results</Button>}
  </Pane>

  const StepFour = () => (
    <Pane>
      <Heading>Rendering results...</Heading>
      {<Spinner />}
    </Pane>
  )

  // useEffect(() => {
  //   setTimeout(navigate('/results', 5000))
  // }, [matches])


  return (
    <Pane>
      <Heading>Symptom Checker</Heading>
      <div className='symptom-slides-container'>
        {steps === 0 && <StepOne />}
        {steps === 1 && <StepTwo />}
        {steps === 2 && <StepThree />}
        {steps === 3 && <StepFour />}
      </div>
    </Pane>
  )
}

export default SymptomChecker