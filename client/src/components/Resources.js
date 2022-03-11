import React from 'react'
import { useNavigate } from "react-router-dom"
import { Pane, Heading, Text, Paragraph, Ul, Li, Ol, Link, Popover, IssueIcon, Strong } from 'evergreen-ui'
import Box from 'ui-box/dist/src/box'

const Resources = () => {
  const navigate = useNavigate()
  return (
    <Pane className='resources-container'>
      <Box className='resources-help'>
        <Heading fontFamily='DM Serif Display' fontSize='x-large' marginBottom={20}>What to do if you or someone else is spiked and/or assaulted?</Heading>
        <Box>
          <Ul paddingLeft={15} paddingRight={20}>
            <Li color='black'>Call the emergency number in your country. Europe(general): 112, UK: 999, US: 911</Li>
            <Li color='black'>If symptoms include vomiting or unconsciousness, make sure the person affected is lying sideways to avoid choking and regularly check breathing until further help is with you</Li>
            <Li color='black'>Have someone trusted take the person spiked whether it is you or someone else to the emergency room</Li>
            <Li color='black'>Try not to pee, douche, shower/bathe, wash your hands or change clothes as this helps in collecting evidence from the incident.</Li>
            <Li color='black'>Ask for a urine sample as soon as possible when arriving at the emergency room. This is because some substances used in spiking leave the body very quickly, sometimes within a few hours.</Li>
            <Li color='black'>If you or the person spiked has been sexually assaulted or you think this might have happened, please remember that sexual assault is never the victim’s fault.</Li>
            <Li color='black'>After the immediate actions to get help and reporting the situation, take care of yourself. <Link href='/links'>CLICK HERE</Link> for helplines and resources for people affected by spiking, sexual assault and also those who have witnessed these events.</Li>
          </Ul>
        </Box>
      </Box>
      <Box className='resources-helplines' marginBottom={50} >
        <Box>
          <Heading fontFamily='DM Serif Display' fontSize='x-large' marginBottom={10}>Links and helplines</Heading>
          <button className='frost' onClick={() => navigate('/links')}>Click here</button>
        </Box>
        <Box className='resources-helplines-image'></Box>
      </Box>
      <Box marginBottom={50}>
        <Heading fontFamily='DM Serif Display' fontSize='x-large' marginBottom={20}>Tips for dealing with drug comedown/</Heading>
        <Ol paddingLeft={15} paddingRight={20}>
          <Li color='black'>Drink liquids! Water or orange juice with vitamin C. </Li>
          <Popover
            content={
              <Pane width={200} height={200} padding={10} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                <Heading fontFamily='DM Serif Display' marginBottom={5}>MDMA/Ecstacy</Heading>
                <Paragraph margin={5}>If you think you have been spiked with ecstasy(MDMA), drinking too much water can be dangerous. Max. 1 big glass of water per hour.</Paragraph>
              </Pane>
            }>
            {IssueIcon}
          </Popover>
          <Li color='black'>Peppermint tea or mints can help if you have been vomiting or are experiencing nausea. </Li>
          <Li color='black'>If you are having any hallucinations, finding a quiet safe place can calm you down.</Li>
          <Li color='black'>Anxiety and depressed feelings can be induced further by comedown from drugs, so pop your feel good playlist and try to relax. If you would like to talk to someone <Link href='/links'>CLICK HERE</Link> for a list of helplines and links.</Li>
          <Li color='black'>Let someone know of your situation and in the best case get someone to stay with you until the symptoms clear.</Li>
        </Ol>
        <Text color='black' fontSize='medium' margin={15} textDecoration='underline'><Strong>Lastly, take care of yourself.</Strong></Text>
      </Box>
    </Pane>
  )
}

export default Resources