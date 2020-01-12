import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import logo from "../images/PG_Logo2.1_White_cropped.png"
import { FaFacebook } from "react-icons/fa"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Wrapper = styled.footer`
  background: ${props => props.theme.colors.primary.default};
  width: 100vw;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ImageContainer = styled.div`
  width: 55vw;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 175px;
  }

  @media (min-width: ${props => props.theme.breakpoints.phone}) {
    width: 40vw;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 25vw;

    img {
      height: 200px;
    }
  }
`

const PhoneLink = styled.a`
  font-size: 1.45rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 0.25rem;
  color: ${props => props.theme.colors.white.darker};

  &:hover {
    color: ${props => props.theme.colors.white.light};
    border-bottom: 2px solid ${props => props.theme.colors.white.light};
  }
`

const NavContainer = styled.nav`
  padding: 1rem;
  width: 100%;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    align-content: space-around;
    text-align: center;
  }

  li {
    margin: 0 auto;
    padding: 1rem 0.5rem;
    font-size: 1.5rem;
  }

  ul > li > a {
    color: ${props => props.theme.colors.white.dark};

    &:hover {
      color: ${props => props.theme.colors.white.light};
      border-bottom: 2px solid ${props => props.theme.colors.white.light};
    }
  }
`

const SocialWrapper = styled.div`
  padding: 0.5rem;
  text-align: center;

  h3 {
    color: ${props => props.theme.colors.white.dark};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.white.darker};
    margin: 0 5px;
    padding: 0 4px 2px;
    font-size: 2rem;

    &:hover {
      color: ${props => props.theme.colors.white.light};
    }
  }
`

const FooterContainer = styled.section`
  padding: 0 1.45rem;
  width: 100%;
  display: flex;
  background-color: ${props => props.theme.colors.primary.default};
  color: ${props => props.theme.colors.white.dark};
  justify-content: center;
  span {
    transition: all ease-in-out 1s;

    &:hover {
      transform: translate(0, -5px);
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.white.default};
    margin: 0 5px;
    padding: 0 4px 2px;
    border-bottom: 2px solid ${props => props.theme.colors.primary.lightest};
  }
`

const Footer = () => (
  <Wrapper>
    <Content>
      <ImageContainer>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </ImageContainer>
      <PhoneLink href="tel:1-214-560-0265">(214) 560-0265</PhoneLink>
      <NavContainer>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </NavContainer>
      <SocialWrapper>
        <h3>Follow us on Facebook</h3>
        <ul>
          <li>
            <OutboundLink
              className="facebook"
              title="facebook"
              href="https://www.facebook.com/Perspectivgardens"
              target="blank"
            >
              <FaFacebook />
            </OutboundLink>
          </li>
        </ul>
      </SocialWrapper>
      <FooterContainer>
        © {new Date().getFullYear()}, Perspectiv Gardens
        {` `}
        {/* <a href="https://builtbybaucom.com">Built by Baucom</a> */}
      </FooterContainer>
    </Content>
  </Wrapper>
)

export default Footer
