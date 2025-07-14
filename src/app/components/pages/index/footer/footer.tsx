"use client";
import React, { useEffect, useState } from 'react';
import LindinIcon from './footer-assets/linkedinIcon.jpg';
import WAIcon from './footer-assets/whatsappIcon.jpg';
import companyIConPNG from "./footer-assets/logo.png";
import fbIcon from './footer-assets/FB.jpg';
import { 
  AboutCompany, 
  CompanyIcon, 
  EOP, 
  FacebookIcon, 
  FooterDiv1, 
  FooterDiv2, 
  FooterLogoDescription, 
  FooterSection, 
  LinkedInIcon, 
  Links, 
  MiddleLine, 
  PageLinkContainer, 
  SocialMediaIconsContaiber, 
  WhastAppIcon
} from './footer.styled';
import { links } from './constants';

function Footer() {
  const [isDesktop, setIsDesktop] = useState(false);

  

  useEffect(() => {
    const checkSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkSize(); // run once
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <FooterSection>
      <FooterDiv1>
      <AboutCompany>
        <CompanyIcon 
          src={companyIConPNG.src}   
        />
        <FooterLogoDescription>
          Kingdom Catering delivers delicious, freshly prepared food with a commitment to quality and punctual service.
        </FooterLogoDescription>
      </AboutCompany>

      <SocialMediaIconsContaiber>
        <WhastAppIcon
          src={WAIcon.src}
          alt="WhatsApp icon"
          
        />
        <LinkedInIcon
          src={LindinIcon.src}
          alt="LinkedIn icon"
          
        />
        <FacebookIcon
          src={fbIcon.src}
          alt="Facebook icon"
          
        />
      </SocialMediaIconsContaiber>
    </FooterDiv1>
      <MiddleLine />
    <FooterDiv2>
      <PageLinkContainer>
        {links.map((link, index) => (
          <Links href={link.link} key={index}>{link.pageName}</Links>
        ))}
      </PageLinkContainer>

      <EOP onClick={scrollToTop}>
        <span style={{ marginRight: "8px" }}>©</span>2025 Kingdom Catering. All rights reserved.
      </EOP>
      </FooterDiv2>
    </FooterSection>
  );
}

export default Footer;
