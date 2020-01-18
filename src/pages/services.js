import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Container from "../components/container"

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
  width: 100%;

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

const Services = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___id }) {
        edges {
          node {
            frontmatter {
              title
              description
              id
              cover_image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Services | Perspectiv Gardens" />
      <Container>
        <Title>Services</Title>
        <ServicesContainer>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Card key={node.frontmatter.id} {...node} />
          ))}
        </ServicesContainer>
      </Container>
    </Layout>
  )
}

export default Services
