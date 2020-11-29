import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 25px;
  font-size: 30px;
`

const StyledBtn = styled.div`
  font-size: 100px;
  cursor: pointer;
  color: grey;
`

const CarouselNavBtn = ({isRight, handleNavClick}) => {
  const btnIcon = isRight ? "›" : "‹";

  const handleClick = () => handleNavClick();

  return <StyledContainer>
    <StyledBtn onClick={handleClick}>{btnIcon}</StyledBtn>
  </StyledContainer>
}

export default CarouselNavBtn