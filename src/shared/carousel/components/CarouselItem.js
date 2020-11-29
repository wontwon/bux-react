import React from "react";
import styled from "styled-components"

const StyledCarouselItemContainer = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  height: 200px;
  width: calc(100% / 5);
  background: white;
  margin: 10px;
`

 export const CarouselItem = () => {
  return <StyledCarouselItemContainer>
    Carousel Item
  </StyledCarouselItemContainer>
 };