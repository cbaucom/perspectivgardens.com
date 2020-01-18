import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Card from "../components/card"
import { buttonStyles } from "../components/button"

const StyledLink = styled(Link)`
  ${buttonStyles}
  width: 200px;
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

const FrontpageServices = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___id }, limit: 4) {
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
    <Wrapper>
      <Title>Services</Title>
      <ServicesContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card key={node.frontmatter.id} {...node} />
        ))}
      </ServicesContainer>
      <StyledLink to="services">See all services</StyledLink>
    </Wrapper>
  )
}

export default FrontpageServices
