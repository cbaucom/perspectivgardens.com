import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Card from "../components/card"
import { buttonStyles } from "../components/button"

import services from "../data/services"

const StyledLink = styled(Link)`
  ${buttonStyles}
  width: fit-content;
`

const Wrapper = styled.section`
  padding: 2rem 0 4rem;
`

const Title = styled.h2`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: ${props => props.theme.fontSize.xxlarge};
  font-weight: 100;
  color: ${props => props.theme.colors.primary.default};
  text-align: center;
  padding-bottom: 2rem;
`

const ServicesContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  align-items: stretch;
  padding-bottom: 1rem;
  margin: 0 10px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`

const FrontpageServices = () => (
  <Wrapper>
    <Title>Services</Title>
    <ServicesContainer>
      {services.slice(0, 4).map(service => (
        <Card {...service} />
      ))}
    </ServicesContainer>
    <StyledLink to="services">See all services</StyledLink>
  </Wrapper>
)

export default FrontpageServices
