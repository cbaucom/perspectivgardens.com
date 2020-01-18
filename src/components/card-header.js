import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledCardHeader = styled.header`
  padding: 1rem;
  height: 350px;

  .gatsby-image-wrapper {
    height: 100%;
    object-fit: contain;
  }
`

const CardHeader = ({ frontmatter }) => (
  <StyledCardHeader>
    <Img
      fluid={frontmatter.cover_image.childImageSharp.fluid}
      alt={frontmatter.title}
    />
  </StyledCardHeader>
)

export default CardHeader
