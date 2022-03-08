import React from 'react'
import { Pane, Heading, Paragraph, Text, ArrowRightIcon, Link, Button, Badge, Strong } from 'evergreen-ui'
import Box from 'ui-box/dist/src/box'

const Results = ({ matches, selected }) => {
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

  selected.sort((a, b) => a - b)
  console.log('selected', selected)
  console.log('matches', matches)



  // const results = matches.filter(match => {
  //   if (match.symptoms.includes(3) && selected.inculdes(3)) return match
  //   if (match.symptoms === selected) return match
  //   if (match.symptoms.includes(selected[0])
  //     && match.symptoms.includes(selected[1])
  //     && match.symptoms.includes(selected[2])) return match
  // })

  // const results = []
  // for(let i = 0; i> matches.length; i++){
  //   if(matches[i].symptoms.includes(3) && selected.includes(3)){
  //     results.push(matches[i])
  //   }else if(matches[i].symptoms === selected){
  //     results.push(matches[i])
  //   }else if(matches[i].symptoms.includes(selected[0]) && matches[i].symptoms.includes(selected[1]) && matches[i].symptoms.includes(selected[2]) ){
  //     results.push(matches[i])
  //   }
  // }

  // const results = matches.some(match => { match})

  return (
    <Pane>
      <Box className='result-container'>
        <Heading>Your results</Heading>
        <Box className='matches-container'>
          <Text>Based on your symptoms, we think you might have been spiked with:</Text>

          {!!matches ?
            matches.map((match, index) => {
              return <Box key={index - 10}>
                <Paragraph key={index}><Strong>{match.name}</Strong> - matches:</Paragraph>
                <Box>
                  {match.symptoms.map((symptom, index) => {
                    return selected.includes(symptom) && <Badge color='#E06C9F' key={index + 13}>{symptomsArr[symptom]}</Badge>
                  })}
                </Box>
              </Box>
            })
            :
            <Paragraph>Something went wrong. </Paragraph>}

        </Box>
        <Box>
          <Heading>What to do now?</Heading>
          <ArrowRightIcon /> <Text>Report, report, report!</Text>
          <Paragraph>Spiking is a criminal offense, whether it happened now, recently or months ago. </Paragraph>
          <Text><Link href='/resources'>CLICK HERE</Link> for full list of actions in case of an emergency</Text>
        </Box>
        <Box>
          <Heading>Want to know more about these substances?</Heading>
          <Text>We listed the most commonly used spiking substances.</Text>
          <Button>Substances</Button>
        </Box>
      </Box>
    </Pane>
  )
}

export default Results