import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.colors.primary.default};
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    width: 100%;
  }

  @media (min-width: ${props => props.theme.breakpoints.phone}) {
    display: none;
  }
`

const StyledLink = styled(Link)`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${props => props.theme.colors.white.default};
  text-decoration: none;
  transition: color 0.3s linear;

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: ${props => props.theme.colors.white.light};
  }
`

const Menu = () => {
  return (
    <StyledMenu>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/services">Services</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </StyledMenu>
  )
}

export default Menu
