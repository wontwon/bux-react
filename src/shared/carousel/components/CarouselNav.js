// node modules
import React from "react";
import styled from "styled-components";

// internal imports
import CarouselNavPanel from "./CarouselNavPanel";

const StyledContainer = styled.div`
 position: absolute;
 display: flex;
 left: 0;
 width: 100%;
 height: 100vh;
 justify-content: space-between;
`

const CarouselNav = ({handleLeftNavClick, handleRightNavClick, length}) => {
  return <StyledContainer>
    <CarouselNavPanel handleNavClick={handleLeftNavClick} length={length} />
    <CarouselNavPanel handleNavClick={handleRightNavClick} length={length} isRight />
  </StyledContainer>  
}

export default CarouselNav
