import React from "react"
import styled from "styled-components"

const StyledCardHeader = styled.header`
  padding: 15px;
  height: 50%;
  img {
    width: 100%;
    background-size: cover;
    background-position: center;
    object-fit: cover;

    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      height: 300px;
    }
  }
`

const CardHeader = props => {
  const { image } = props

  return <StyledCardHeader>{image}</StyledCardHeader>
}

export default CardHeader
