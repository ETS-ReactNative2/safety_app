import React from 'react'
import { Heading, Pane, Paragraph, Text, Link, Ul, Li } from 'evergreen-ui'
import Box from 'ui-box/dist/src/box'

const LinkPage = () => {

  return (
    <Pane className='links-container'>
      <Heading fontFamily='DM Serif Display' fontSize='x-large' marginBottom={20}>Links & Helplines</Heading>
      <Paragraph color='black'>On this page you can discover links and helplines to various organisations that offer help and <br />support for victims and witnesses of spikings.</Paragraph>
      <Box className='links-image'></Box>
      <Box className='links-list'>
        <Heading fontFamily='DM Serif Display' marginBottom={10} fontSize='large'>Links:</Heading>
        <Paragraph color='black'><Link href='https://www.talktofrank.com/'>talktofrank.com</Link> - Information about drugs</Paragraph>
        <Paragraph color='black'><Link href='https://www.nhs.uk/conditions/first-aid/'>NHS First Aid</Link> - Guide for first aid</Paragraph>
        <Paragraph color='black'><Link href='https://www.victimsupport.org.uk/'>victimsupport.org</Link> - Victim Support helps and offers support anyone faced with crime or traumatic events in England & Wales</Paragraph>
        <Paragraph color='black'><Link href='https://patient.info/treatment-medication/self-referral/refer-yourself-for-nhs-talking-therapy-counselling'>patient.info</Link> - Article on how to use NHS self-referral to receive counselling or therapy in the UK</Paragraph>
        <Paragraph color='black'><Link href='https://dan247.org.uk/'>dan247.org.uk</Link> - Dan 24/7 is a drug and alcohol helpline in Wales who also offer bilingual help</Paragraph>
        <Paragraph color='black'><Link href='https://www.samaritans.org/'>samaritans.org</Link> - Samaritans is a UK charity that offers non-judgemental emotional support and advice for anyone dealing with distress or despair after traumatic events like spiking, sexual abuse or witnessing these events</Paragraph>
        <Paragraph color='black'><Link href='https://www.1800respect.org.au/'>1800respect.org.au</Link> - 1800RESPECT is a Australian counselling service for anyone experienced with sexual assault or violence. They offer a 24h telephone helpline as well as 24h online chat for emergencies.</Paragraph>
        <Paragraph color='black'><Link href='https://www.sacl.com.au/'>sacl.com.au</Link> - Sexual Assault Crisis Line offers free helpline thats 24h in Australia and have information brochures for 10 different languages.</Paragraph>
        <Paragraph color='black'><Link href='https://www.victimsofcrime.vic.gov.au/'>victimsofcrime.vic.gov.au</Link> - Victims of Crime is Victorian Government support service offering help and advice for anyone affected by crime.</Paragraph>
        <Paragraph color='black'><Link href='https://www.rainn.org/'>rainn.org</Link> - RAINN (Rape, Abuse & Incest National Network) is a US-based organization that helps victims of sexual violence and offer support for survivors.</Paragraph>
        <Paragraph color='black'><Link href='https://www.rcne.com/'>rcne.com</Link> - Rape Crisis Network Europe is a great source with links to each European country’s helpline and relevant websites to offer help and support for victims of sexual violence. This website is also supported by Google translate features.</Paragraph>
      </Box>
      <Box className='links-numbers'>
        <Heading fontFamily='DM Serif Display' marginBottom={10} fontSize='large'>Helplines:</Heading>
        <Box><Text color='black' fontSize='medium'>Rape Crisis Charity (UK)</Text>
          <Ul>
            <Li color='black'><strong>0808 802 9999</strong> (England and Wales, 12-2.30 pm and 7-9.30 pm every day)</Li>
            <Li color='black'><strong>0808 801 0302</strong> or text <strong>07537 410 027</strong> (Scotland, 6 pm-midnight every day)</Li>
            <Li color='black'><strong>08000 246 991</strong> (Northern Ireland, Monday and Thursday, 6-8 pm)</Li>
          </Ul>
        </Box>
        <Box><Text color='black' fontSize='medium'>1800RESPECT for sexual assaults(Australia)</Text>
          <Ul>
            <Li color='black'><strong>1800 737 732</strong> </Li>
          </Ul>
        </Box>
        <Box><Text color='black' fontSize='medium'>National Sexual Assault Hotline (US)</Text>
          <Ul>
            <Li color='black'><strong>1-800-656-HOPE (4673)</strong></Li>
          </Ul>
        </Box>
      </Box>
    </Pane>
  )
}

export default LinkPage