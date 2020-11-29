// node modules
import React, { useState } from "react";
import PropTypes from "proptypes";
import styled from "styled-components";

// internal imports
import { CarouselItem, CarouselNav } from "./components";
import { PANEL_COUNT } from "./constants";
import { CAROUSEL_PANEL_DATA } from "../../constants";

const StyledContainer = styled.div`
  display: flex; 
  flex-direction: row;
  align-items: center;
  height: 500px;
  width: 100%;
  background: #f9f9f9;
  position: relative;
  padding-left: calc(100vw / ${PANEL_COUNT})
`

const Carousel = (props) => {
  const { infinite, data } = props;

  // state
  const [ slidePosition, setSlidePosition ] = useState(0);

  const handleLeftNavClick = () => {
    if (!infinite && slidePosition === 0) return
    setSlidePosition(s => s += 1)
  }
  const handleRightNavClick = () => {
    if (!infinite && slidePosition === ((data.length - 3) * -1)) return
    setSlidePosition(s => s -= 1)
  }

  const renderCarouselItems = () => {
    return data.map((d, i) => {
      return <CarouselItem key={(d+i)} label={d} slidePosition={slidePosition} />
    })
  }

  return <StyledContainer>
    <CarouselNav 
      handleLeftNavClick={handleLeftNavClick} 
      handleRightNavClick={handleRightNavClick} />
      { renderCarouselItems() }
  </StyledContainer>
}

Carousel.propTypes = {
  data: PropTypes.array.isRequired,
  infinite: PropTypes.bool
}

Carousel.defaultProps = {
  data: CAROUSEL_PANEL_DATA,
  infinite: false
}

export default Carousel
