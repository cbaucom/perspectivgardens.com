import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Container from "../components/container"

import services from "../data/services"

const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: ${props => props.theme.fontSize.xxlarge};
  font-weight: 100;
  color: ${props => props.theme.colors.primary.default};
  text-align: center;
`

const ServicesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @supports (display: grid) {
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
  }
`

const Services = () => (
  <Layout>
    <SEO title="Services | Perspectiv Gardens" />
    <Container>
      <Title>Services</Title>
      <ServicesContainer>
        {services.map(service => (
          <Card key={service.id} {...service} />
        ))}
      </ServicesContainer>
    </Container>
  </Layout>
)

export default Services
