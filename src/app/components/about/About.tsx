"use client"
import React from 'react'
import './about.css'
import LindinIcon from './about-assets/linkedinIcon.jpg'
import WAIcon from './about-assets/whatsappIcon.jpg'
import fbIcon from './about-assets/FB.jpg';

function About() {
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        }
  return (
    <div className='about-section'>
      <div className='link-container'>
        <a href="/privacy-policy" className='privacy-policy'>Privacy-policy</a>
        <a href="/terms-of-service" className='terms-of-service'>Terms of Service</a>
        <a href="/contact" className='contact-us'>Contact Us</a>
        <a href="/about" className='about-p'>About</a>
      </div>

      <div className='social-media-icons' >
        
          <img src={WAIcon.src} alt="WhatsApp icon" className='social-media-icon' style={{height:40,
            marginTop:'3px'
          }}  />
        

        
          <img src={LindinIcon.src} alt="LinkedIn icon" className='social-media-icon' style={{height:40}}/>
       

      
          <img src={fbIcon.src} alt="Facebook icon" className='social-media-icon' style={{ width: 30,
             height: 30 ,
             marginBottom:'5px'}
             } />
        
      </div>

      <p className='EOP' onClick={scrollToTop}> ©2025 Kingdom Catering. All rights reserved.</p>
    </div>
  )
}

export default About
