'use client';
import { Card } from "@mui/material";
import styled from "styled-components";
import { desktop, mobile } from "@/app/utils/media"; 

export const TiredOfCaterersSection = styled.div`
  ${mobile} {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin: 0;
    padding: 0%;
    margin: 0%;
  } ${desktop}{
    
  }
`;

export const TitleH2 = styled.h2`
  ${mobile} {
    font-size: 27px;
    font-weight: bolder;
    margin-left: 1rem;
    margin-right: 4rem;

  }
    ${desktop}{
    margin-left: 20px;
    }
`;

export const CardsContainer = styled.div`
  ${mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
    ${desktop}{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap:16px;
      place-items: center;
    }
`;

export const CustomCard = styled(Card)`
  ${mobile} {
    margin-bottom: 1rem;
    background-color: #FCFAF7;
    border-radius: 15px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04),
                0 2px 4px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-flow: row;
    align-items: center; 
    width: 96%;
    justify-content: space-around;
  }
    ${desktop}{
      width:90%;
      border-radius:16px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04),
                0 2px 4px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-around;
    padding:12px;
    padding-top:3px;
    padding-bottom:3px;
    }
`;
export const CenterContent = styled.div`
  ${desktop}{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
    `
export const InformationConatiner = styled.div`
  ${mobile} {
    /* your original styles go here if needed */
  }
`;

export const Question = styled.h3`
  ${mobile} {
    margin-left: 14px;
    margin-top: 15px;
    margin-bottom: 0px;
  }
`;

export const Answer = styled.p`
  ${mobile} {
    font-weight: 500;
    color: rgb(152, 152, 152);
    margin-left: 16px;
    margin-top: 8px;
    font-size: large;
  }
`;

export const ImageSecondSection = styled.img`
  ${mobile} {
    width: 119px;
    height: 87px;
  }
`;

export const GetQouteButton = styled.button`
  ${mobile} {
    background-color: #dc3232;
    border: none;
    color: white;
    padding: 1rem;
    border-radius: 5rem;
    font-size: large;
    font-weight: bold;
    width: 12rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  ${desktop} {
    background-color: #dc3232;
    border: none;
    color: white;
    padding: 1rem;
    border-radius: 5rem;
    font-size: large;
    font-weight: bold;
    width: 12rem;
    margin-top: 16px;
    margin-bottom: 0.5rem;
  }
`;
