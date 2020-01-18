import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  background: ${({theme}) => theme.colors.bg};
  margin: 150px auto 0;
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  text-align: center;

  h1,
  h3 {
    margin-bottom: 2rem;
  }
`

const StyledLink = styled(Link)`
  appearance: none;
  background: ${({theme}) => theme.colors.primary.default};
  border: 1px solid ${({theme}) => theme.colors.primary.light};
  box-shadow: 0 1px 5px 0 ${({theme}) => theme.colors.primary.dark},
    inset 0 1px 0 0 ${({theme}) => theme.colors.primary.dark},
    inset 0 2px 4px 0 ${({theme}) => theme.colors.primary.dark};
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  max-width: 200px;
  height: 50px;
  text-decoration: none;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 100%;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 8px 18px ${({theme}) => theme.colors.primary.dark},
      inset 0 2px 1px ${({theme}) => theme.colors.primary.dark};
  }
`
export default props => {
  if (typeof window !== "undefined") {
    return (
      <Layout>
        <SEO title="Thanks | Perspectiv Gardens" />
        <Container>
          <div className="text-wrapper">
            <h1>Thanks, {props.location.state.name}! </h1>
            <h3>We will be in touch shortly!</h3>
          </div>
          <StyledLink to="/">Back Home</StyledLink>
        </Container>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO title="Thanks | Perspectiv Gardens" />
        <Container>
          <div className="text-wrapper">
            <h1>Thanks! </h1>
            <h3>We will be in touch shortly!</h3>
          </div>
          <StyledLink to="/">Back Home</StyledLink>
        </Container>
      </Layout>
    )
  }
}
