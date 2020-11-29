// node modules
import React from "react";
import styled from "styled-components";

// internal imports
import { CarouselItem } from "./components/CarouselItem";

const StyledCarouselContainer = styled.div`
  display: flex; 
  flex-direction: row;
  align-items: center;
  height: 500px;
  width: 100%;
  background: green;

`

const Carousel = () => {
  return <StyledCarouselContainer>
    <CarouselItem />
    <CarouselItem />
    <CarouselItem />
    <CarouselItem />
    <CarouselItem />
  </StyledCarouselContainer>
}

export default Carousel
