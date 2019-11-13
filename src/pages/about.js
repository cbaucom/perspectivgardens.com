import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: ${props => props.theme.fontSize.xxlarge};
  font-weight: 100;
  color: ${props => props.theme.colors.primary.default};
  text-align: center;
`

const SubTitle = styled.h3`
  margin: 1.25rem auto;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 100;
  color: ${props => props.theme.colors.primary.default};
  text-align: center;
`

const ImageWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 0 auto 2rem;
`

const Text = styled.p`
  font-size: ${props => props.theme.fontSize.xlarge};
  line-height: 2.25rem;
  text-align: center;
  padding: 1rem;
`

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About | Perspectiv Gardens" />
      <Container>
        <Title>About Us</Title>
        <SubTitle>A Landscaper with Perspectiv</SubTitle>
        <ImageWrapper>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </ImageWrapper>
        <Text>
          Perspectiv Gardens is an Award-Winning landscaping company based in
          Rockwall, Texas. With almost 20 years of experience, you can count on
          us to perform the kind of the work that will leave your neighbors in
          awe. The name, "Perspectiv", came from the numerous customers over the
          years who mentioned the word whenever our work was completed, things
          like: "I love the perspective you drew up for my wife and I. I never
          would have thought of going that route in landscaping, but I'm glad we
          did!" or "I would walk out my back door sometimes and just be lost. I
          didn't know what to do and what not to do. I needed a landscaper with
          a different perspective."
        </Text>
      </Container>
    </Layout>
  )
}

export default About
