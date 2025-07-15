import { Card, CardMedia, Container, Typography } from "@mui/material";
import styled from "styled-components";
import {desktop, mobile} from "@/app/utils/media"

export const ReviewsSectionContainer = styled.div`
${mobile}{
    margin-top:3.5rem;
}
${desktop}{
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
}
` 

export const ReviewsH3 = styled.h3`
${mobile}{
    color: #1C170D;
    margin-left: 16px;
    font-weight: 700;
    font-size: 27px;
}
${desktop}{
    color: #1C170D;
    font-weight: 700;
    font-size: 24px;
    
}
`

export const ReviewsContainer = styled.div`
${mobile}{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
    ${desktop}{
    display: flex;
    flex-direction: column;
    align-items: ;
    justify-content: center;
    gap:16px;
    width: 100%;
    margin-left: calc((100% - 100%) / 2);
}
`
export const CustomCardS5 = styled(Card)`
${mobile}{
    border-radius: 12px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.03);
    width: 96%;
    background-color: white;
}
${desktop}{
    border-radius: 12px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.03);
    width: 100%;
    background-color: white;
}
`

export const ReviewProfileContainer = styled.div`
${mobile}{
    display: flex;
    flex-direction: row;
    align-items: center;
}
${desktop}{
    display: flex;
    flex-direction: row;
    align-items: center;
    }
`
/*export const ReviewProfile = styled(CardMedia)`
${mobile}{
    width: 60px;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-top: 1rem;
}
`*/

export const ReviewTextContainer = styled.div`
${mobile}{
    padding-top: 1rem;
}
`

export const ReviewerName =styled(Typography)`
${mobile}{
    text-wrap:nowrap;
    font-weight:500;
}
${desktop}{
    margin-top:8px;
    font-weight: 500;
}
`

export const ReviewDate = styled(Typography)`
${mobile}{
    color: #99784D;
    font-weight: 400;
    font-size: 16px;
}
`

export const ReviewDescription = styled(Typography)`
${mobile}{
    margin: 16px 16px;
    color: #1C170D;
    font-weight: 500;
    padding-bottom: 16px;
}
${desktop}{
    margin: 1rem 1rem;
    color: #1C170D;
    font-weight: 500;
    padding-bottom: 0;
}


`
export const ReviewsConatiner = styled(Container)`
${desktop}{
}`