// node modules
import React from "react";
import styled from "styled-components";

// internal imports
import { CarouselItem, CarouselNavPanel } from "./components";
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

const TestContainer = styled.div`
 position: absolute;
 display: flex;
 left: 0;
 width: 100%;
 height: 100%;
 justify-content: space-between;
`

const CarouselNavContainer = () => {
  return <TestContainer>
    <CarouselNavPanel/>
    <CarouselNavPanel isRight />
  </TestContainer>  
}

const Carousel = () => {
  return <StyledContainer>
    <CarouselNavContainer />
    <CarouselItem />
    <CarouselItem />
    <CarouselItem />
    <CarouselItem />
  </StyledContainer>
}

export default Carousel
