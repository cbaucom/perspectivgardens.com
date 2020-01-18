import React from "react"
import { bool, func } from "prop-types"
import styled from "styled-components"

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

function Burger({ open, setOpen, ...props }) {
  const isExpanded = open ? true : false

  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger

// Component Styles
const StyledBurger = styled.button`
  position: absolute;
  top: 25px;
  right: 1.5rem;
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

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.primary.default};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.phone}) {
    display: none;
  }
`
