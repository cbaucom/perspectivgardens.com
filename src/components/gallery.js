import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.section`
  padding: 2rem 0 6rem;
  height: 900px;
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
  padding-bottom: 3rem;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`

const Gallery = () => (
  <Wrapper>
    <Title>Gallery</Title>
    <ServicesContainer></ServicesContainer>
  </Wrapper>
)

export default Gallery
