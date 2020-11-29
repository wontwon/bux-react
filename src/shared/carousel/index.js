// node modules
import React, { useState } from "react";
import styled from "styled-components";

// internal imports
import { CarouselItem, CarouselNav } from "./components";
import { PANEL_COUNT } from "./constants";

const StyledContainer = styled.div`
  display: flex; 
  flex-direction: row;
  align-items: center;
  height: 500px;
  width: 100%;
  background: green;
  position: relative;
  padding-left: calc(100vw / ${PANEL_COUNT})
`

const Carousel = () => {
  const [ slidePosition, setSlidePosition ] = useState(0);

  const handleLeftNavClick = () => setSlidePosition(s => s -= 1)
  const handleRightNavClick = () => setSlidePosition(s => s += 1)

  return <StyledContainer>
    <CarouselNav 
      handleLeftNavClick={handleLeftNavClick} 
      handleRightNavClick={handleRightNavClick} />
    <CarouselItem slidePosition={slidePosition} />
    <CarouselItem slidePosition={slidePosition} />
    <CarouselItem slidePosition={slidePosition} />
    <CarouselItem slidePosition={slidePosition} />
  </StyledContainer>
}

export default Carousel
