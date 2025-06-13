import { Card, Typography } from "@mui/material";
import styled from "styled-components";
import {mobile} from "@/app/utils/media"

export const PerfectForAllMomentsContainer = styled.div`
 ${mobile}{
    display: flex;
    flex-direction: column;
    align-items: center;
    }
`

export const PerfectForAllH3 = styled.h3`
 ${mobile}{
    font-weight: 700;
    color: #1C170D;
    font-size: 27px;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 40px;
}
`

export const CardsConatinerS4 = styled.div`
 ${mobile}{
    display: grid;
    grid-template-columns: 1fr 1fr ;
    gap: 4%;
    width: 95vw;
}
`

export const CustomCardS4 = styled(Card)`
 ${mobile}{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 48px;
    border-radius: 10px;
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.03);
}
`

export const EventTitle = styled(Typography)`
 ${mobile}{
    font-weight: 600;
    font-size: 17px;
    white-space: nowrap;
    margin: 4px 4px;
    margin-bottom:0px;
}
`

export const EventDescription = styled(Typography)`
 ${mobile}{
    color: #99784D;
    font-weight: 500;
    font-size: 14px;
    margin: 4px 4px;
    margin-top:0px;
    text-align: start;
}
`