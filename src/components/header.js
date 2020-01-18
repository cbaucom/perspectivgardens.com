import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

import logo from "../images/PG_Logo2.1_Green_cropped.png"

const Wrapper = styled.header`
  /* background: ${({theme}) => theme.colors.primary.dark}; */
  margin-bottom: 1.25rem;
  width: 100vw;
  /* max-height: 120px; */
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15); */
`

const Content = styled.div`
  margin: 0 auto;
  max-width: ${({theme}) => theme.maxWidth};
  padding: 0.5rem 1rem;
  display: flex;
  /* justify-content: center; */
  align-items: center;

  img {
    height: 110px;
  }
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Content>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <img src={logo} alt={siteTitle} />
      </Link>
    </Content>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
