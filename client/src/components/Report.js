import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
  Pane,
  Heading,
  Button,
  Paragraph,
  toaster,
  TextInputField,
  ApplicationIcon,
  SelectMenu,
  SearchInput,
  Popover,
  Text
} from 'evergreen-ui'
import Box from 'ui-box/dist/src/box'
//import 'mapbox-gl/dist/mapbox-gl.css'
import { isUserAuthenticated, getTokenFromLocal } from '../helpers/auth'

const Report = () => {

  const navigate = useNavigate()

  const [searchValues, setSearchValues] = useState({
    search: ''
  })

  const [resultsOptions, setResultsOptions] = useState([])

  const substances = ['Alcohol', 'Benzodiazepines', 'Ecstasy', 'GHB', 'Ketamine', 'LSD', 'Methamphetamines', 'Rohypnol']

  const [selected, setSelected] = useState()

  //Report model
  const [report, setReport] = useState({
    spiking_method: '',
    has_reported: '',
    incident_place: '',
    location: '',
    substance: '',
    latitude: '',
    longitude: ''
  })

  const [reportError, setReportError] = useState({ error: false, message: '' })

  const handleChange = (e) => {
    setReportError({ error: false, message: '' })
    const newReport = { ...report, [e.target.name]: e.target.value }
    console.log(newReport)
    setReport(newReport)
  }

  const handleSearchValues = (e) => setSearchValues({ ...searchValues, [e.target.name]: e.target.value })

  const handleSearch = (e) => {
    console.log(searchValues)
    const { center } = resultsOptions[resultsOptions.findIndex(result => result.place_name === e.target.innerText)]
    setReport({ ...report, latitude: center[0], longitude: center[1], location: e.target.innerText })
    setSearchValues({ search: e.target.innerText })
    setResultsOptions([])
  }

  const submitSearch = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValues.search}.json?access_token=pk.eyJ1IjoiZXNzaWthcmoiLCJhIjoiY2wwamR6bDFlMDB5aTNqcjdwcXZ4enlqMiJ9.GMvx3zHwrAK3pf_APLHgOQ`)
      const results = data.features
      setResultsOptions(results)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    const substanceIndex = substances.indexOf(selected)
    setReport({ ...report, substance: (substanceIndex + 1) })
    console.log(report)
    try {
      await axios.post('api/reports/all/', report, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocal()}`
        }
      })
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
      {isUserAuthenticated() ?
        <Box className='form'>
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
            required={true}
          />
          <TextInputField
            label='Did you report this spiking to the police?'
            description='Type Yes or No.'
            placeholder="Yes/No"
            maxLength={3}
            name='has_reported'
            value={report.has_reported}
            onChange={handleChange}
            isInvalid={reportError.error}
            required={true}
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

          <Popover
            content={
              <Pane width={250} margin={7} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                {!!resultsOptions.length &&
                  resultsOptions.map((result, index) => {
                    return <Text onClick={handleSearch} key={index} margin={2}>{result.place_name}</Text>
                  })
                }
              </Pane>
            }
          >
            <Box className='search-input'>
              <SearchInput
                placeholder='Search'
                name='search'
                value={searchValues.search}
                onChange={handleSearchValues}
                isInvalid={reportError.error}
                required={true}
              />
              <Button onClick={submitSearch}>Search</Button>
            </Box>
          </Popover>


          <Button iconAfter={ApplicationIcon} onClick={handleSubmit}>Submit your report</Button>
        </Box>
        :

        <Box className='not-user-error'>
          <Heading>This is for logged in users only.</Heading>
          <Button onClick={() => navigate('/register')}>Register</Button>
        </Box>
      }
    </Pane>
  )
}

export default Report