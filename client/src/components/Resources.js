import React from 'react'
import { useNavigate } from "react-router-dom"
import { Pane, Heading, Text, Paragraph, Button, Ul, Li, Ol, Link, Popover, IssueIcon } from 'evergreen-ui'
import Box from 'ui-box/dist/src/box'

const Resources = () => {
  const navigate = useNavigate()
  return (
    <Pane>
      <Box>
        <Heading>What to do if you're spiked and/or assaulted? Or someone you know?</Heading>
        <Box>
          <Ul>
            <Li>Call the emergency number in your country. Europe(general): 112, UK: 999, US: 911</Li>
            <Li>If symptoms include vomiting or unconsciousness, make sure the person affected is lying sideways to avoid choking and regularly check breathing until further help is with you</Li>
            <Li>Have someone trusted take the person spiked whether it is you or someone else to the emergency room</Li>
            <Li>Try not to pee, douche, shower/bathe, wash your hands or change clothes as this helps in collecting evidence from the incident.</Li>
            <Li>Ask for a urine sample as soon as possible when arriving at the emergency room. This is because some substances used in spiking leave the body very quickly, sometimes within a few hours.</Li>
            <Li>If you or the person spiked has been sexually assaulted or you think this might have happened, please remember that sexual assault is never the victim’s fault.</Li>
            <Li>After the immediate actions to get help and reporting the situation, take care of yourself. <Link href='/links'>CLICK HERE</Link> for helplines and resources for people affected by spiking, sexual assault and also those who have witnessed these events.</Li>
          </Ul>
        </Box>
      </Box>
      <Box>
        <Heading>Links and helplines</Heading>
        <Button onClick={() => navigate('/links')}>Click here</Button>
      </Box>
      <Box>
        <Heading>Tips for dealing with drug comedown/</Heading>
        <Ol>
            <Li>Drink liquids! Water or orange juice with vitamin C. </Li>
            <Popover
            content={
              <Pane width={200} height={200} padding={6} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                <Heading>MDMA/Ecstacy</Heading>
                <Paragraph>If you think you have been spiked with ecstasy(MDMA), drinking too much water can be dangerous. Max. 1 big glass of water per hour.</Paragraph>
              </Pane>
            }>
              {IssueIcon}
            </Popover>
            <Li>Peppermint tea or mints can help if you have been vomiting or are experiencing nausea. </Li>
            <Li>If you are having any hallucinations, finding a quiet safe place can calm you down.</Li>
            <Li>Anxiety and depressed feelings can be induced further by comedown from drugs, so pop your feel good playlist and try to relax. If you would like to talk to someone <Link href='/links'>CLICK HERE</Link> for a list of helplines and links.</Li>
            <Li>Let someone know of your situation and in the best case get someone to stay with you until the symptoms clear.</Li>
        </Ol>
        <Text>Lastly, take care of yourself.</Text>
      </Box>
    </Pane>
  )
}

export default Resources