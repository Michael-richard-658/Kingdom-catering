import styled from "styled-components";
import {mobile} from '@/app/utils/media'

export const FooterSection = styled.div`
    ${mobile}{
    background-color: #000000;
    height: auto;
    width: 100%;
}
`

export const AboutCompany = styled.div`
    ${mobile}{
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

export const FooterLogoDescription = styled.p`
    ${mobile}{
    color: white;
    line-height: 20px;
    width: 90%;
    margin-top: 0%;
    text-align: center;
}
`

export const SocialMediaIconsContaiber = styled.div`
    ${mobile}{
    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: center;
    margin-bottom: 16px;
    gap: 32px;
}
`

export const PageLinkContainer = styled.div`
    ${mobile}{
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 32px;
}
`


export const Links = styled.a`
    ${mobile}{
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
}
`
export const EOP = styled.p`
    ${mobile}{
    color: white;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 0%;
    padding-bottom: 100px;
}
`