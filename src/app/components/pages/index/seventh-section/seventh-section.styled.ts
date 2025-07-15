import { Button, Typography } from "@mui/material";
import styled from "styled-components";
import {mobile,desktop} from "@/app/utils/media"



export const MakeYourEventRoyaleSection = styled.div`
    ${mobile}{
    display: flex;
    flex-direction: column; 
    align-items: center;
    text-align: center;
    margin-top: 40px;
}
    ${desktop}{
    display: flex;
    flex-direction: column; 
    align-items: center;
    text-align: center;
    margin-top: 40px;
}
`
export const MakeEventRoyaleTitle = styled(Typography)`
    ${mobile}{
    font-weight: 900;
    color: #1C170D;
    margin-bottom: 6px;
    margin-top: 16px;
}
    ${desktop}{
        font-weight: 900;
        color: #1C170D;
        margin-bottom: 6px;
    }

`

export const MakeEventRoyaleDescription = styled(Typography)`
    ${mobile}{
    font-weight: 100;
    color: #1C170D;
    font-size: 20px;
    margin-bottom: 16px;
    line-height:1.2;
}
    ${desktop}{
        font-size:20px
        
    }
`

export const LetsGetStartedButton = styled(Button)`
    ${mobile}{
    border-radius: 32px;
    background: #dc3232;
    font-weight: 550;
    font-family: Arial, sans-serif;
    font-size: 16px;
    padding-top: 14px;
    padding-bottom: 14px;
    margin-bottom: 64px;
}
    ${desktop}{
    border-radius: 32px;
    background: #dc3232;
    font-weight: 550;
    font-family: Arial, sans-serif;
    font-size: 16px;
    padding-top: 14px;
    padding-bottom: 14px;
    margin-bottom: 64px;
    margin-top: 16px;
    }

`