"use client"
import React from 'react'
import './footer.css'
import LindinIcon from './footer-assets/linkedinIcon.jpg'
import WAIcon from './footer-assets/whatsappIcon.jpg'
import companyIConPNG from "./footer-assets/logo.png"

import fbIcon from './footer-assets/FB.jpg';

function Footer() {
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        }
  return (
    <div className='footer-section'>
          <div className='about-company'>
              <img src={companyIConPNG.src} className='footer-logo'/>
              <p className='footer-desc'>Kingdom Catering delivers delicious, freshly prepared food with a commitment to quality and punctual service.</p>
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
      <hr  style={{width:"90%"}}/>
      <div className='link-container'>
        <a href="/privacy-policy" className='privacy-policy'>Privacy-policy</a>
        <a href="/contact" className='contact-us'>Contact Us</a>
        <a href="/terms-of-service" className='terms-of-service'>Terms of Service</a>
        <a href="/about" className='about-p'>About</a>
      </div>


      <p className='EOP' onClick={scrollToTop}> <span style={{marginRight:"8px"}}>©</span>2025 Kingdom Catering. All rights reserved.</p>
    </div>
  )
}

export default Footer
