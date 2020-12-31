import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Container from '../components/container'
import Layout from '../components/layout'
import SEO from '../components/seo'

function DesignPage() {
	const data = useStaticQuery(graphql`
		{
			allFile(filter: { relativeDirectory: { eq: "design" } }) {
				edges {
					node {
						id
						name
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`)

	return (
		<Layout>
			<SEO title="Design | Perspectiv Gardens" />
			<Container>
				<Content>
					<Title>Design</Title>
					<Text>
						We’ve been told time and time again that our approach to landscaping design is creative, unique,
						and brings a whole new perspective to landscaping. The truth is, we have a passion for what we
						do, and we love designing and creating beautiful, natural works of art that make our customers’
						outdoor areas more appealing and enjoyable.
					</Text>
					<Text>
						At Perspectiv Gardens, our design team is truly special. We take a unique approach in our 2D and
						3D designs, so the landscapes we design are one of a kind. Best of all, our design team will
						have it ready for you in 24 hours!
					</Text>
					<Text>
						Our designers use high-tech landscape design software that provides our customers with a virtual
						preview of what their landscaping will look like after our work is completed. If you’ve been
						dreaming of transforming your dull and dreary backyard into an inviting outdoor oasis, come see
						what the designers at Perspectiv Gardens have to offer. Our award-winning team has a reputation
						for outstanding, high quality work, incredible attention to detail, efficient job completion,
						and friendly and professional customer service.
					</Text>
					<Text>
						If you would like our team to provide a landscape design concept to beautify your outdoor space
						or an estimate for lawn care and landscaping services, reach out to us today. We look forward to
						creating your dream landscape!
					</Text>
				</Content>
				<GalleryContainer>
					<Grid>
						{data.allFile.edges.map(({ node }) => (
							<Item key={node.id}>
								<Img
									fluid={node.childImageSharp.fluid}
									alt={node.name}
									loading="eager"
									placeholderStyle={{ visibility: 'hidden' }}
								/>
							</Item>
						))}
					</Grid>
				</GalleryContainer>
			</Container>
		</Layout>
	)
}

export default DesignPage

// Component Styles
const Content = styled.section`
	margin: 0 auto;
	max-width: ${({ theme }) => theme.maxWidth};
	padding: 0.5rem 1rem;
`
const Title = styled.h1`
	color: ${({ theme }) => theme.colors.primary.default};
	font-size: ${({ theme }) => theme.fontSize.xxlarge};
	font-weight: 100;
	letter-spacing: 3px;
	margin-bottom: 2rem;
	text-align: center;
	text-transform: uppercase;
`
const Text = styled.p`
	align-self: flex-start;
	font-size: 1.1rem;
	line-height: 1.65;
	margin: 0 auto 1rem;
	padding: 1rem;
	width: 100%;

	/* 600px - 799px */
	@media (min-width: ${({ theme }) => theme.breakpoints.phone}) {
		font-size: calc(1vw + 1vh);
	}

	/* > 800px */
	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: calc(1vw + 1.1vh);
	}
`
const GalleryContainer = styled.div`
	margin: 0 auto;
	width: 100%;
	padding-bottom: 3rem;

	.gatsby-image-wrapper {
		height: auto;
		width: 100%;
		overflow: hidden;
		background-size: cover;
		background-position: 50% 50%;
		background-repeat: no-repeat;
	}
`
const Grid = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
`

const Item = styled.div`
	margin: 1rem 0.5rem;
	flex: auto;
	/* flex: 1 1 100%; */
	width: 100%;

	@media (min-width: ${({ theme }) => theme.breakpoints.phone}) {
		flex: 1 1 40%;
	}
`
