import React from "react"
import styled from "styled-components"

const StyledBurger = styled.button`
  /* position: absolute;
  top: 25px;
  right: 1.5rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2000;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${props => props.theme.colors.primary.default};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media (min-width: ${props => props.theme.breakpoints.phone}) {
    display: none;
  }
`

const Burger = () => {
  return (
    <StyledBurger>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger
