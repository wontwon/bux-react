// node modules
import React from "react";
import styled from "styled-components"

// internal imports
import { PANEL_COUNT } from "../constants";

const StyledContainer = styled.div`
  width: calc(100vw / ${PANEL_COUNT});
  height: calc(100vw / ${PANEL_COUNT});
  padding: 5px;
  background: blue;
  transform: ${props => {
    const xCalc = (props.slidePosition * 100)
    return `translateX(${xCalc}%);`
  }}
  transition: transform 0.5s linear;

`

const CarouselContent= styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  height: 100%;
  background: white;
  width: 100%;
`

const CarouselItem = ({slidePosition}) => {
  return <StyledContainer slidePosition={slidePosition} >
    <CarouselContent>
      Hi
    </CarouselContent>
  </StyledContainer>
};

export default CarouselItem;