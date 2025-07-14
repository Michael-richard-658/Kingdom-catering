import styled from "styled-components";
import {desktop, mobile} from '@/app/utils/media'

export const FooterSection = styled.div`
    ${mobile}{
    background-color: #000000;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
    ${desktop}{
        background-color: #000000;
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height:450px;
        }
`

export const AboutCompany = styled.div`
    ${mobile}{
    display: flex;
    flex-direction: column;
    align-items: center;
}
    ${desktop}{
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
    ${desktop}{
        color: white;
        width: 400px;
        text-align: center;
        font-size: 1.2rem;
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
    ${desktop}{
        display:flex;
        flex-direction: row;
        align-items: center;
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
    ${desktop}{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;
    }
`


export const Links = styled.a`
    ${mobile}{
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
}
    ${desktop}{
        color: white;
        text-decoration: none;
        font-weight: 800;
        font-size: 1.3rem;
    }
`

export const CompanyIcon = styled.img`
    ${mobile}{
        width: 30%;
        height: 30%;
        margin-top: 20px;
        margin-bottom: 16px;
    }
        ${desktop}{
        width: 200px;
        height: 200px;
}`

export const WhastAppIcon = styled.img`
    ${mobile}{
    height:40;
    margin-top:3px;
    max-width:50px;
    cursor: pointer;
    }
    ${desktop}{
        height:40px;
        width:50px;
        cursor: pointer;
    }
`
export const LinkedInIcon = styled.img`
    ${mobile}{
    height:40;
    max-width:50px;
    cursor: pointer;
    }
    ${desktop}{
        height:40px;
        width:50px;
        cursor: pointer;
    }
`
export const FacebookIcon = styled.img`
    ${mobile}{
    width:35px;
    height:35px;
    margin-bottom:5px;
    cursor: pointer;
    }
    ${desktop}{
        width:40px;
        height:30px;
        cursor: pointer;
        margin-top:-5px;
    }
`

export const MiddleLine=styled.div`
    ${mobile}{
    width: 90%;
    height: 1px;
    background-color: white;
    }

    ${desktop}{
    width: 1px;
    height: 90%;
    background-color: white;
    }
`
export const FooterDiv1 = styled.div`
    ${desktop}{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
}
`
export const FooterDiv2 = styled.div`
    ${desktop}{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
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
    ${desktop}{
        margin-top: 88px;
        
    }
`