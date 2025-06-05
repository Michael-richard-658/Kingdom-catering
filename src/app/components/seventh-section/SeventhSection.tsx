import { Button, Typography } from '@mui/material'
import React from 'react'
import './SeventhSection.css'

function SeventhSection() {
  return (
    <div className='seventh-section-container'>
        <Typography variant='h4' sx={{
            fontWeight: 600,
            color: '#1C170D',
            marginBottom: '6px',
            marginTop: '16px',
        }}>Make Your Event Royal</Typography>
        <Typography variant='caption' sx={{
            fontWeight: 100,
            color:"#1C170D",
            fontSize: '20px',
            marginBottom: '16px',
        }}>Reach out to plan your custom menu today!</Typography>
        <button   className='seventh-section-button' >Let's Get Started </button>
    </div>
  )
}

export default SeventhSection