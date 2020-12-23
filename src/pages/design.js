import React from 'react'
import styled from 'styled-components'

import Container from '../components/container'
import Layout from '../components/layout'
import SEO from '../components/seo'

function DesignPage() {
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
						At Perspectiv Gardens, our design team is truly one of a kind. We take a unique approach in our
						2D and 3D designs, so the landscapes we design are one of a kind. You might think that designing
						such imaginative landscaping would take a lot of time, but in reality, our designs are usually
						ready within 24 hours and we don’t charge extra for all this creativity!
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
