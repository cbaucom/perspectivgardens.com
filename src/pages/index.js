import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Testimonials from "../components/testimonials"
import FrontpageServices from "../components/frontpage-services"
import Gallery from "../components/gallery"
import FrontpageHero from "../components/frontpage-hero"

const Container = styled.div`
  margin-top: 10px;

  @media (min-width: ${props => props.theme.breakpoints.phone}) {
    margin-top: 100px;
  }
`

const Content = styled.section`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  padding: 0.5rem 1rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home | Perspectiv Gardens" />
    <Container>
      <FrontpageHero />
      <Content>
        <FrontpageServices />
        <Testimonials />
        <Gallery />
      </Content>
    </Container>
  </Layout>
)

export default IndexPage
