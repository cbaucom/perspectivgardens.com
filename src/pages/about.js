import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'

function About() {
	const data = useStaticQuery(graphql`
		query {
			chrisImage: file(relativePath: { eq: "ChrisWithPerspectivShirt.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 600) {
						...GatsbyImageSharpFluid
					}
				}
			}
			perspectiveImage: file(relativePath: { eq: "about.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1200) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<Layout>
			<SEO title="About | Perspectiv Gardens" />
			<Container>
				<Title>About Us</Title>
				<SubTitle>A Landscaper with Perspectiv</SubTitle>
				<MainWrapper>
					<ImageWrapper>
						<Img
							fluid={data.chrisImage.childImageSharp.fluid}
							alt="Chris Greenlee"
							loading="eager"
							placeholderStyle={{ visibility: 'hidden' }}
						/>
					</ImageWrapper>
					<Text>
						Perspectiv Gardens is an Award-Winning landscaping company based in Rockwall, Texas. With almost
						20 years of experience, you can count on us to perform the kind of the work that will leave your
						neighbors in awe. The name, "Perspectiv", came from the numerous customers over the years who
						mentioned the word whenever our work was completed, things like: "I love the perspective you
						drew up for my wife and I. I never would have thought of going that route in landscaping, but
						I'm glad we did!" or "I would walk out my back door sometimes and just be lost. I didn't know
						what to do and what not to do. I needed a landscaper with a different perspective."
					</Text>
				</MainWrapper>

				<ImageWrapper>
					<Img
						fluid={data.perspectiveImage.childImageSharp.fluid}
						alt="Logo"
						loading="eager"
						placeholderStyle={{ visibility: 'hidden' }}
					/>
				</ImageWrapper>
			</Container>
		</Layout>
	)
}

export default About

// Component Styles
const Title = styled.h1`
	text-transform: uppercase;
	letter-spacing: 3px;
	font-size: ${({ theme }) => theme.fontSize.xxlarge};
	font-weight: 100;
	color: ${({ theme }) => theme.colors.primary.default};
	text-align: center;
`

const SubTitle = styled.h3`
	margin: 1.25rem auto;
	text-transform: uppercase;
	letter-spacing: 3px;
	font-weight: 100;
	color: ${({ theme }) => theme.colors.primary.default};
	text-align: center;
`

const MainWrapper = styled.div`
	width: 100%;
	padding: 1rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	/* > 600px */
	@media (min-width: ${({ theme }) => theme.breakpoints.phone}) {
		flex-direction: row;
	}
`

const ImageWrapper = styled.div`
	width: 100%;
	object-fit: contain;
	align-self: flex-start;
	padding: 1rem;
	margin: 0 auto;
`

const Text = styled.p`
	align-self: flex-start;
	padding: 1rem 1rem 0 1rem;
	width: 100%;
	margin-bottom: 0;

	/* 600px - 799px */
	@media (min-width: ${({ theme }) => theme.breakpoints.phone}) {
		font-size: calc(1vw + 0.9vh);
	}

	/* > 800px */
	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: calc(1vw + 1.1vh);
	}
`
