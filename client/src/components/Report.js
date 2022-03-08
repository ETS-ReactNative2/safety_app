import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Pane, Heading, Button, Paragraph, toaster, TextInputField, ApplicationIcon, SelectMenu } from 'evergreen-ui'
// import { Link } from 'react-router-dom'

const Report = () => {

  const navigate = useNavigate()

  const substances = ['Alcohol', 'Benzodiazepines', 'Ecstasy', 'GHB', 'Ketamine', 'LSD', 'Methamphetamines', 'Rohypnol']

  const [selected, setSelected] = useState()

  //Report model
  const [report, setReport] = useState({
    spiking_method: '',
    has_reported: '',
    substance: null,
    incident_place: '',
    location: ''
  })

  const [reportError, setReportError] = useState({ error: false, message: '' })

  const handleChange = (e) => {
    setReportError({ error: false, message: '' })
    const newReport = { ...report, [e.target.name]: e.target.value }
    console.log(newReport)
    setReport(newReport)
  }

  const handleSubmit = async (e) => {
    const substanceIndex = substances.indexOf(selected)
    setReport({ ...report, substance: (substanceIndex + 1) })
    console.log(report)
    try {
      await axios.post('api/reports/all/', report)
      toaster.success('Reporting was sucessful. Thank you!', {
        duration: 10
      })
      navigate('/reportsdashboard')
    } catch (error) {
      console.log(error)
      setReportError({ error: true, message: 'Unable to submit the report.' })
      toaster.danger('Something went wrong submitting your report. Try again.', {
        duration: 10
      })
    }
  }

  return (
    <Pane className='form report-form' onSubmit={handleSubmit}>
      <Heading>Report your spiking</Heading>
      <Paragraph>This will stay anonymous and will never be shared to third parties.</Paragraph>
      <TextInputField
        label='How were you spiked?'
        description='Drink, injection?'
        placeholder='Spiking method'
        name='spiking_method'
        value={report.spiking_method}
        onChange={handleChange}
        isInvalid={reportError.error}
      />
      <TextInputField
        label='Have you reported this spiking to the police?'
        description='Type Yes or No.'
        placeholder="Yes/No"
        maxLength={3}
        name='has_reported'
        value={report.has_reported}
        onChange={handleChange}
        isInvalid={reportError.error}
      />
      <SelectMenu
        options={substances.map((label, index) => ({ label, value: label }))}
        selected={selected}
        onSelect={(item) => setSelected(item.value)}
      >
        <Button onClick={() => { }}>{selected ?? 'Select substance...'}</Button>
      </SelectMenu>
      <TextInputField
        label='Where did this happen?'
        description='Club, bar, restaurant, etc. (not reqruired)'
        placeholder='Place'
        name='incident_place'
        value={report.incident_place}
        onChange={handleChange}
        isInvalid={reportError.error}
      />
      <TextInputField
        label='Where were you when you were spiked?'
        description='London, Paris, Ottawa, etc. (not required)'
        name='location'
        value={report.location}
        onChange={handleChange}
        isInvalid={reportError.error}
      />

      <Button iconAfter={ApplicationIcon} onClick={handleSubmit}>Submit your report</Button>
    </Pane>
  )
}

export default Report