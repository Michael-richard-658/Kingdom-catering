"use client"
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import {desktop} from "@/app/utils/media"
 export const GlobalStyles = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    max-width: 100vw;
    scrollbar-width: none;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    max-width: 100vw;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  body::-webkit-scrollbar {
    display: none;
  }
`;

export const StaticBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
 background: linear-gradient(135deg, rgb(225, 237, 255) 0%, #ffe3f3 100%);
  z-index: -1;
`


export const ComponentsContainer = styled.div`
  margin: 0;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  height: auto;
  position: relative;
`
