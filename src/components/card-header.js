import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { object } from "prop-types"

CardHeader.propTypes = {
  frontmatter: object.isRequired,
}

function CardHeader({ frontmatter }) {
  return (
    <StyledCardHeader>
      <Img
        fluid={frontmatter.cover_image.childImageSharp.fluid}
        alt={frontmatter.title}
      />
    </StyledCardHeader>
  )
}

export default CardHeader

// Component Styles
const StyledCardHeader = styled.header`
  padding: 1rem;
  height: 350px;

  .gatsby-image-wrapper {
    height: 100%;
    object-fit: contain;
  }
`
