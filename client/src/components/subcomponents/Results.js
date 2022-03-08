import React, { useState } from 'react'
//import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { Pane, Heading, Paragraph, Text, Ul, Li } from 'evergreen-ui'
import Box from 'ui-box/dist/src/box'

const Results = () => {

  const location = useLocation()
  const matches = location.results
  console.log(matches)

  return (
    <Pane>
      <Box>
        <Heading>Your results</Heading>
        <Text>Based on your symptoms, we think you might have been spiked with:</Text>
        <Ul>
          {matches}
        </Ul>
      </Box>
    </Pane>
  )
}

export default Results