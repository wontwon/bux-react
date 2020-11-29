// node modules
import React from "react";
import styled from "styled-components"

// internal imports
import { PANEL_COUNT } from "../constants";

const StyledContainer = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  width: calc(100vw / ${PANEL_COUNT});
  height: calc(100vw / ${PANEL_COUNT});
  background: white;
  margin: 5px;
  border-radius: 10px;
`

const CarouselItem = () => {
  return <StyledContainer>
    Carousel Item
  </StyledContainer>
};

export default CarouselItem;