import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { buttonStyles } from "../components/button"

import bgImg from "../images/homepage-hero.jpg"

const StyledLink = styled(Link)`
  ${buttonStyles}
  width: 270px;
  font-size: 1.35rem;
`

const Wrapper = styled.section`
  padding: 2rem 0.5rem 6rem;
  width: 100%;
  height: 600px;
  background: url(${bgImg}) center center no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  text-transform: uppercase;
  text-shadow: 2px 2px #333;
  letter-spacing: 3px;
  font-size: 2.5rem;
  font-weight: 400;
  color: ${({theme}) => theme.colors.white.light};
  text-align: center;

  @media (min-width: ${({theme}) => theme.breakpoints.phone}) {
    font-size: 3rem;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    font-size: 4rem;
  }
`

const SubTitle = styled.h2`
  text-shadow: 2px 2px #333;
  letter-spacing: 3px;
  font-size: 1.75rem;
  font-weight: 400;
  color: ${({theme}) => theme.colors.white.default};
  text-align: center;
  padding-bottom: 4rem;

  @media (min-width: ${({theme}) => theme.breakpoints.phone}) {
    font-size: 2rem;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    font-size: 3rem;
  }
`

const FrontpageHero = () => (
  <Wrapper>
    <Title>Perspectiv Gardens</Title>
    <SubTitle>Lawncare and Landscaping</SubTitle>
    <StyledLink to="contact">Request a Free Quote</StyledLink>
  </Wrapper>
)

export default FrontpageHero
