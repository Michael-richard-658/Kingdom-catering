import React from 'react'
import './about.css'
import { StaticImageData } from 'next/image'
import LindinIcon from './about-assets/linkedinIcon.jpg'
import WAIcon from './about-assets/whatsappIcon.jpg'
import fbIcon from './about-assets/FB.jpg';

function About() {
    interface SocialMedia{
        image:StaticImageData,
        link:string
    }
    const socialMediaLinks: SocialMedia[] = [
        {
            image:WAIcon,
            link:"/whatsapp.com"
        },
        {
            image:LindinIcon,
            link:"https://www.linkedin.com/in/itssamuelrowe/"
        },
        {
            image:fbIcon,
            link:""
        },
    ]
  return (
    <div className='about-section'>
        <div className='link-container'>
        <a href="/privacy-policy" className='privacy-policy'>Privacy-policy</a>
        <a href="/terms-of-service" className='terms-of-service'>Terms of Service</a>
        <a href="/contact" className='contact-us'>Contact Us</a>
        <a href="/about" className='about-p'>About</a>
        </div>
        <div className='social-media-icons' >
            {socialMediaLinks.map((item, index) => {
                return (
                    <button key={index} className='social-media-button'>
                        <img src={item.image.src} alt="social media icon" className='social-media-icon' />
                    </button>
                )
            })}

        </div>
            <p className='EOP'> ©2025 Kingdom Catering. All rights reserved.</p>
    </div>
  )
}

export default About