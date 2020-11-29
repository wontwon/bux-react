// node modules
import React from "react";
import styled from "styled-components";

// internal imports 
import { PANEL_COUNT } from "../constants";
import CarouselNavBtn from "./CarouselNavBtn";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.isRight ? 'flex-start' : 'flex-end'};
  height: 100%;
  width: calc(100vw / ${PANEL_COUNT});
  background: #f9f9f9;
  z-index: 100;
`;

const CarouselNavPanel = (props) => {
  return <StyledContainer isRight={props.isRight}>
    <CarouselNavBtn {...props} />
  </StyledContainer>
};

export default CarouselNavPanel