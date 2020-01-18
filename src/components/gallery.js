import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Wrapper = styled.section`
  padding: 2rem 0 6rem;
`

const Title = styled.h2`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: ${({theme}) => theme.fontSize.xxlarge};
  font-weight: 100;
  color: ${({theme}) => theme.colors.primary.default};
  text-align: center;
  padding-bottom: 2rem;
`

const GalleryContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-bottom: 3rem;

  .gatsby-image-wrapper {
    height: auto;
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
`
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const Item = styled.div`
  margin: 1rem 0.5rem;
  flex: auto;
  /* flex: 1 1 100%; */
  width: 100%;

  @media (min-width: ${({theme}) => theme.breakpoints.phone}) {
    flex: 1 1 40%;
  }
`

const Gallery = () => {
  const data = useStaticQuery(graphql`
    {
      allDriveNode {
        edges {
          node {
            id
            name
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
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
      <Title>Gallery</Title>
      <GalleryContainer>
        <Grid>
          {data.allDriveNode.edges.map(({ node }) => (
            <Item key={node.id}>
              <Img
                fluid={node.localFile.childImageSharp.fluid}
                alt={node.name}
              />
            </Item>
          ))}
        </Grid>
      </GalleryContainer>
    </Wrapper>
  )
}

export default Gallery
