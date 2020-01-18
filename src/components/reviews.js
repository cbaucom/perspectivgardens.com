import React from "react"
import styled from "styled-components"
import { FaQuoteLeft } from "react-icons/fa"

import reviews from "../data/reviews"

const Wrapper = styled.section`
  padding: 2rem 0;
`

const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: ${({theme}) => theme.fontSize.xxlarge};
  font-weight: 100;
  color: ${({theme}) => theme.colors.primary.default};
  text-align: center;
`

const ReviewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .review:first-child {
    flex: 1 1 100%;
  }

  .review:not(:first-child) {
    flex: 1 1 100%;

    @media (min-width: ${({theme}) => theme.breakpoints.phone}) {
      flex: 1 1 40%;
    }
  }
`

const IconContainer = styled.div`
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -30px auto 0;

  svg {
    color: ${({theme}) => theme.colors.primary.default};
  }
`

const StyledCard = styled.article`
  background: #fff;
  color: #9e9e9e;
  display: inline-block;
  padding-bottom: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-size: 16px;
  margin: 3rem 10px 10px;
  position: relative;
  text-align: center;
  width: 100%;
  border-radius: 5px;
  border-top: 5px solid ${({theme}) => theme.colors.primary.default};
  transition: 0.25s;
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  figcaption {
    padding: 13% 10% 12%;
  }

  h3 {
    color: #3c3c3c;
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
    margin: 10px 0 5px;
  }

  blockquote {
    font-style: italic;
    font-weight: 300;
    margin: 0 0 20px;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    height: auto;
  }
`

const Reviews = () => (
  <Wrapper>
    <Title>Testimonials</Title>
    <ReviewsContainer>
      {reviews.map(({ id, name, description }) => (
        <StyledCard className="review" key={id}>
          <IconContainer>
            <FaQuoteLeft size={32} />
          </IconContainer>
          <figcaption>
            <blockquote>
              <p>{description}</p>
            </blockquote>
            <h3>{name}</h3>
          </figcaption>
        </StyledCard>
      ))}
    </ReviewsContainer>
  </Wrapper>
)

export default Reviews
