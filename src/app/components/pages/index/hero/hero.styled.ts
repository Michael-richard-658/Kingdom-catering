"use client";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { mobile , desktop} from "@/app/utils/media"; 
export const HeroContainer = styled.div`
${desktop}  {
min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin-top:4%;
}
  ${mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    margin-top:-2.5%;
  }
`;

export const HeroTitle = styled(Typography)`
  ${desktop}{
    font-size:40px;
    text-align: center;
    color: black;
    font-weight: 700;
    line-height: 1;
    word-spacing: 4px;
    padding: 0;
    margin-top:20px;
  } 
${mobile} {
    text-align: center;
    color: black;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 0;
    padding: 0;
    line-height: 1;
    word-spacing: 4px;
    margin-top: 5%;
  }
`;

export const HeroDescription = styled.div`
  ${mobile} {
    color: black;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 350;
    width: 98%;
    line-height:1.1;
    margin-top: 5%;
  }${desktop}{
    color: black;
    text-align: center;
    line-height: 1.1;
    font-size:24px;
    margin-top:16px
  }
`;

export const SpanWrapper = styled.div`
  ${mobile} {
    margin: 0;
    text-wrap: wrap;
  }
  ${desktop} {
    margin: 0;
    text-wrap: wrap;
  }
`;


export const HeroButton = styled.button`
  ${mobile} {
    background-color: #dc3232;
    border: none;
    padding: 1rem;
    border-radius: 5rem;
    font-size: large;
    font-weight: bold;
    width: 14rem;
    color: white;
    margin-top: 40px;
    margin-bottom: 10%;
  }${desktop}{
    background-color: #dc3232;
    border: none;
    padding: 1rem;
    border-radius: 5rem;
    font-size: large;
    font-weight: bold;
    width: 14rem;
    color: white;
    margin-top:40px;
  }
`;


