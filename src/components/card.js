import React from "react"
import styled from "styled-components"
import { object } from "prop-types"

import CardHeader from "../components/card-header"
import CardBody from "../components/card-body"

Card.propTypes = {
  frontmatter: object.isRequired,
}

function Card({ frontmatter }) {
  return (
    <StyledCard>
      <CardHeader frontmatter={frontmatter} />
      <CardBody
        name={frontmatter.title}
        description={frontmatter.description}
      />
    </StyledCard>
  )
}

export default Card

// Component Styles
const StyledCard = styled.article`
  background: #fff;
  margin: 2rem auto;
  padding-bottom: 1rem;
  border-radius: 5px;
  border-top: 5px solid ${({ theme }) => theme.colors.primary.default};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  transition: 0.25s;
  width: 100%;
  flex: 1 1 100%;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.phone}) {
    flex: 1 1 40%;
    height: 700px;
    margin: 2rem 0.5rem;
  }
`
