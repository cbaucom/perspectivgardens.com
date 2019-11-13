import React from "react"
import Slider from "react-slick"
import styled from "styled-components"

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 9000,
  speed: 2000,
  slideToShow: 1,
  slideToScroll: 1,
  swipeToSlide: true,
}

const Wrapper = styled.section`
  background: ${props => props.theme.colors.primary.default};
  position: relative;
  padding: 0 1.5rem;
  min-height: 200px;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
`

const TextContainer = styled.div`
  padding: 4rem 1rem 1rem;
  margin: 0 auto;
  width: 100%;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 75%;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 100;
  color: #fff;
  text-align: center;
  padding-bottom: 2rem;
`

const Blockquote = styled.blockquote`
  padding: 1rem 0.5rem;
  position: relative;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 1);

  &:before {
    content: none;
  }

  cite {
    display: block;
    font-size: 1rem;
    font-style: normal;
    line-height: 18px;
    color: #fff;
  }

  cite:before {
    content: "- ";
  }
`

const Text = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 2rem;
  color: #fff;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.5rem;
    line-height: 3rem;
  }
`

const Testimonials = () => (
  <Wrapper id="testimonials">
    <TextContainer>
      <Title>Client Testimonials</Title>
      <ul>
        <Slider {...settings}>
          <li>
            <Blockquote>
              <Text>
                I love the perspective you drew up for my wife and I. I never
                would have thought of going that route in landscaping, but I'm
                glad we did!
              </Text>
              <cite>Steve Jobs</cite>
            </Blockquote>
          </li>
          <li>
            <Blockquote>
              <Text>
                I would walk out my back door sometimes and just be lost. I
                didn't know what to do and what not to do. I needed a landscaper
                with a different perspective.
              </Text>
              <cite>John Doe</cite>
            </Blockquote>
          </li>
        </Slider>
      </ul>
    </TextContainer>
  </Wrapper>
)

export default Testimonials
