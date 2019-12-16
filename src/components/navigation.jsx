import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Headroom from "react-headroom"
import { FiPhoneCall } from "react-icons/fi"

import Logo from "./logo"
import Burger from "./burger"
import Menu from "./menu"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
  svg {
    height: 100px;
    width: 150px;
    margin-bottom: 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    height: 50px;
    width: 100px;
  }
`

const PhoneLink = styled.div`
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  svg {
    height: 35px !important;
    width: 35px !important;
    margin: 0;
    color: ${props => props.theme.colors.primary.default};
  }

  @media (min-width: ${props => props.theme.breakpoints.phone}) {
    display: none;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-size: ${props => props.theme.fontSize.xlarge};
  font-family: ${props => props.theme.fontFamily.heading};
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.default};
    margin-left: 2rem;
    width: auto;
    transition: all ${props => props.theme.transitions.normal};
    &:hover {
      color: ${props => props.theme.colors.white.dark};
    }
    &:focus {
      color: ${props => props.theme.colors.white.default};
    }

    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      margin-left: 1rem;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSize.large};
  }

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    /* font-size: ${props => props.theme.fontSize.small}; */
    display: none;
  }
`

const Navigation = () => (
  <Headroom>
    <Wrapper>
      <PhoneLink>
        <a href="tel:1-214-560-0265">
          <FiPhoneCall />
        </a>
      </PhoneLink>
      <StyledLink to="/" aria-label="Perspectiv Gardens, Back to homepage">
        <Logo />
      </StyledLink>
      <Nav>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/services">Services</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </Nav>
      <Burger />
      <Menu />
    </Wrapper>
  </Headroom>
)

export default Navigation
