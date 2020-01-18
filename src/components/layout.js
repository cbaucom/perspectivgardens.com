import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import reset from "../styles/reset"
import headroom from "../styles/headroom"
import theme from "../styles/theme"

import Navigation from "./navigation"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${headroom}
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet
        meta={[
          {
            name: "description",
            content:
              "Perspectiv Gardens lawncare and landscaping in and around the Dallas Fort Worth area",
          },
          {
            name: "keywords",
            content:
              "lawncare, landscaping, lawn maintainence, perspective gardens, perspectiv gardens ",
          },
          { name: "msapplication-TileColor", content: "#005826" },
          { name: "theme-color", content: "#005826" },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <LayoutContainer id="App">
        <GlobalStyle />
        <Navigation />

        <MainContainer id="page-wrap">{children}</MainContainer>
        <Footer />
      </LayoutContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const LayoutContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`

const MainContainer = styled.main`
  flex-grow: 1;
  margin: 0 auto;
  width: 100%;
`

export default Layout
