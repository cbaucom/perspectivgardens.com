import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { buttonStyles } from "./button"

const StyledLink = styled(Link)`
  ${buttonStyles}
  width: auto;
`

const StyledBody = styled.div`
  padding: 15px;
  height: 50%;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2,
  p {
    margin-bottom: 10px;
  }

  .body-content {
    padding: 1rem 0;
    font-size: 1.25rem;
    line-height: 1.8;
  }
`

const CardBody = ({ name, description }) => {
  return (
    <StyledBody>
      <div>
        <h2>{name}</h2>
        <p className="body-content">{description}</p>
      </div>
      <StyledLink to="contact">Request a quote</StyledLink>
    </StyledBody>
  )
}

export default CardBody