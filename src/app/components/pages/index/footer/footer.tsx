"use client"
import React from 'react'
import LindinIcon from './footer-assets/linkedinIcon.jpg'
import WAIcon from './footer-assets/whatsappIcon.jpg'
import companyIConPNG from "./footer-assets/logo.png"
import fbIcon from './footer-assets/FB.jpg';
import { AboutCompany, EOP, FooterLogoDescription, FooterSection, Links, PageLinkContainer, SocialMediaIconsContaiber } from './footer.styled'
import { links } from './constants'

function Footer() {
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        }
  return (
    <FooterSection >
          <AboutCompany>
              <img src={companyIConPNG.src} style={{
                width: '30%',
                height: '30%',
                marginTop: '20px',
                marginBottom: '16px'
              }}/>
              <FooterLogoDescription>Kingdom Catering delivers delicious, freshly prepared food with a commitment to quality and punctual service.</FooterLogoDescription>
          </AboutCompany>
      <SocialMediaIconsContaiber > 

          <img
              src={WAIcon.src}
              alt="WhatsApp icon"
              style={{
                height: 40,
                marginTop: '3px',
                maxWidth: '50px',
                cursor: 'pointer',
              }}
            />

            <img
                src={LindinIcon.src}
                alt="LinkedIn icon"
                style={{
                  height: 40,
                  maxWidth: '50px',
                  cursor: 'pointer',
                }}
            />

            <img
                src={fbIcon.src}
                alt="Facebook icon"
                style={{
                  width: 30,
                  height: 30,
                  marginBottom: '5px',
                  maxWidth: '50px',
                  cursor: 'pointer',
                }}
            />
      
      </SocialMediaIconsContaiber>
      <hr  style={{width:"90%"}}/>
      <PageLinkContainer>
             {links.map((link,index)=>(
                      <Links href={link.link} key={index}>{link.pageName}</Links>
             ))}
      </PageLinkContainer>


      <EOP onClick={scrollToTop}> <span style={{marginRight:"8px"}}>©</span>2025 Kingdom Catering. All rights reserved.</EOP>
    </FooterSection>
  )
}

export default Footer
