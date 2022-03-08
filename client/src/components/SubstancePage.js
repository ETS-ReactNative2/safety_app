import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Pane, Paragraph, Heading, Card } from 'evergreen-ui'

const SubstancePage = () => {

  const [substances, setSubstances] = useState({})
  const [hasError, setHasError] = useState({ error: false, message: '' })

  const getData = async () => {
    try {
      const { data } = await axios.post('api/substances/all/')
      setSubstances(data)
      console.log(data)
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
      {substances.length?
      substances.map((item, index) => {
        return(
          <Card key={index}>
            <Heading>{item.name}</Heading>
            <Paragraph>{item.link}</Paragraph>
            </Card>
        )
      })
        :
        <Paragraph>Not working and this is the error: {hasError.message}</Paragraph>
    }
    </Pane>
  )
}

export default SubstancePage