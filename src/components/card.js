import React from "react"
import styled from "styled-components"
import CardHeader from "../components/card-header"
import CardBody from "../components/card-body"

const StyledCard = styled.article`
  background: #fff;
  margin: 2rem auto;
  padding-bottom: 1rem;
  border-radius: 5px;
  border-top: 5px solid ${props => props.theme.colors.primary.default};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  transition: 0.25s;
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    /* display: flex; */
    height: auto;
  }
`

const Card = props => {
  return (
    <StyledCard>
      <CardHeader image={props.image} />
      <CardBody name={props.name} description={props.description} />
    </StyledCard>
  )
}

export default Card
