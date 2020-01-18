import React from "react"
import { string } from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

import logo from "../images/PG_Logo2.1_Green_cropped.png"

Header.propTypes = {
  siteTitle: string,
}

Header.defaultProps = {
  siteTitle: ``,
}

function Header({ siteTitle }) {
  return (
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
}

export default Header

// Component Styles
const Wrapper = styled.header`
  margin-bottom: 1.25rem;
  width: 100vw;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;

  img {
    height: 110px;
  }
`
