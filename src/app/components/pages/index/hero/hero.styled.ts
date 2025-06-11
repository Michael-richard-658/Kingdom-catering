"use client";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { mobile } from "@/app/utils/media"; 
export const HeroContainer = styled.div`
  ${mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
  }
`;

export const HeroTitle = styled(Typography)`
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
  }
`;

export const SpanWrapper = styled.span`
  ${mobile} {
    text-wrap: wrap;
    margin: 0;
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
  }
`;
