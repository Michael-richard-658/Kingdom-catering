"use client"

import React from 'react'
import { LetsGetStartedButton, MakeEventRoyaleDescription, MakeEventRoyaleTitle, MakeYourEventRoyaleSection } from './seventh-section.styled'

function SeventhSection() {
  return (
    <MakeYourEventRoyaleSection >
      <MakeEventRoyaleTitle variant='h4' >Make Your Event Royal</MakeEventRoyaleTitle>
      <MakeEventRoyaleDescription variant='caption' >Reach out to plan your custom menu today!</MakeEventRoyaleDescription>
      <LetsGetStartedButton className='seventh-section-button' variant='contained'  disableElevation={true}>
        Let's Get Started 
        </LetsGetStartedButton>
    </MakeYourEventRoyaleSection>
  )
}

export default SeventhSection