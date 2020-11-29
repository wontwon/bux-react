import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 25px;
  font-size: 30px;
`

const StyledBtn = styled.div`
  font-size: 50px;
  cursor: pointer;
`

const CarouselNavBtn = ({isRight}) => {
  const btnIcon = isRight ? "›" : "‹";

  const handleClick = () => {
    alert('do something')
  }

  return <StyledContainer>
    <StyledBtn>{btnIcon}</StyledBtn>
  </StyledContainer>
}

export default CarouselNavBtn