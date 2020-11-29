// node modules
import React from "react";
import styled from "styled-components"

// internal imports
import { PANEL_COUNT } from "../constants";

const StyledContainer = styled.div`
  width: calc(100vw / ${PANEL_COUNT});
  height: calc(100vw / ${PANEL_COUNT});
  padding: 10px;
  transform: ${props => {
    const xCalc = (props.slidePosition * 100)
    return `translateX(${xCalc}%);`
  }}
  transition: transform 0.5s linear;
  background: #f9f9f9;
`

const CarouselContent= styled.div`
  display: flex; 
  justify-content: center;
  font-size: 4em;
  color: grey;
  align-items: center;
  height: 100%;
  background: white;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 5px -3px rgba(0,0,0,0.8);
}
`

const CarouselItem = ({slidePosition, label}) => {
  return <StyledContainer slidePosition={slidePosition} >
    <CarouselContent>
      {label}
    </CarouselContent>
  </StyledContainer>
};

export default CarouselItem;