import { Card, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";
import {desktop, mobile} from "@/app/utils/media"


export const WhyChooseKingdomCateringSection = styled.div`
 ${mobile}{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

}
` 

export const QuestionH3S3 = styled.h3`
${mobile}{
    padding:16px;
    font-weight: 700;
    font-size: 27px;
    color: #1C170D;
    margin-left: 12px;
    margin-right: 20%;
    margin-bottom: 8px;
}
    ${desktop}{
        font-size: 24px;
    }
`

export const CardsContainerS3 = styled.div`
${mobile}{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    
}
    ${desktop}{
    display:grid;
    grid-template-columns: repeat(2, 1fr);     
    gap:16px;  
    }   

` 

export const CustomCardS3 = styled(Card)`
${mobile}{
    position: relative;
    margin:16px;
    border-radius:16px;
    width:96%;
    height:450px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
    ${desktop}{
    width: 100%;
    height: 100%;
    }
`
/*
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-top: 16px;
    border-radius:16px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.03);
    overflow: hidden;
    background-color: white;
    width: 45%;
    height: 280px;
    margin-bottom:14px
    */

export const CardBGImage = styled.img`
${mobile}{
    width:100%;
    height:200px;
    position:absolute;
}
 ${desktop}{
    
    }

`

export const CardMediaS3 = styled(CardMedia)`
${mobile}{
    width: 120px;
    min-height: 120px;
    border-radius: 50%;
    opacity: 1;
    z-index: 1;
    margin-top:140px;
}
    ${desktop}{
    width: 120px;
    min-height: 120px;
    border-radius: 50%;
    opacity: 1;
    z-index: 1;
    margin-top:40px;
    }
`
export const CardTitleS3 = styled(Typography)`
${mobile}{
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.5;
}
`

export const CardBodyS3 = styled(Typography)`
${mobile}{
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-top: 12px;
  font-weight: 400;
  line-height: 1.4;
  font-weight:500;
  color: rgb(97, 97, 97);
}
`

