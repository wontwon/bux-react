// node modules
import React from "react";
import styled, { keyframes } from "styled-components";

// internal imports
import CarouselNavPanel from "./CarouselNavPanel";

const StyledContainer = styled.div`
 position: absolute;
 display: flex;
 left: 0;
 width: 100%;
 height: 100%;
 justify-content: space-between;
`

const CarouselNav = ({handleLeftNavClick, handleRightNavClick}) => {
  return <StyledContainer>
    <CarouselNavPanel handleNavClick={handleLeftNavClick} />
    <CarouselNavPanel handleNavClick={handleRightNavClick} isRight />
  </StyledContainer>  
}

export default CarouselNav
