import React from 'react'
import styled from 'styled-components'

import Container from '../components/container'
import Layout from '../components/layout'
import SEO from '../components/seo'

function FriscoPage() {
	return (
		<Layout>
			<SEO
				title="Frisco Landscaping: Lawn Care & Landscape Designers"
				description="Homeowners in Frisco Texas trust Perspectiv gardens with all of their landscaping and lawn care needs. Contact our experts today!"
			/>
			<Container>
				<Content>
					<Title>Frisco, TX</Title>
					<Text>
						Are you tired of looking at the same old yard? When you look around outside your home or
						business, do you wish it was a bit more maintained or appealing? Sometimes, all you need is a
						little Perspectiv!
					</Text>
					<Text>
						The experts at Perspectiv Gardens Lawn care and Landscaping have been beautifying outdoor spaces
						all across Frisco for over 20 years now. Your greenest landscaping aspirations are in very good
						hands with us, as we specialize in lawn care and landscape design. In fact, we’re so passionate
						about what we do, that our reputable and professional services are award-winning! We feel that
						our passion and genuine love for landscaping is highly reflected by this community recognition
						in particular.
					</Text>
					<Text>
						Over the last two decades, we’ve developed a sterling reputation for top-shelf plants,
						compassionate customer service, and fresh, innovative horticultural design. We pride ourselves
						on being prompt, responsive, and communicative, asking you the real questions so landscape
						designers can get to the root of your Frisco lawn care and landscaping needs.
					</Text>
					<SubTitle>We provide the following services:</SubTitle>
					<ul>
						<li>Landscaping Maintenance, Installation, and Design</li>
						<li>Maintaining and Cleaning Flower Beds</li>
						<li>Flagstone Patios and Pathways</li>
						<li>Stone Work</li>
						<li>Trimming Trees and Shrubs</li>
						<li>Seasonal Cleanups (Spring and Fall)</li>
						<li>Plus Much More!</li>
					</ul>
					<Text>
						We know that our creative eye and attention to detail are what really separates us from the
						competition. We’d love for you to see the difference for yourself! We personally can’t see a
						reason why you should have to wait any longer. Reach out and give us a call today to take the
						first step in actualizing your dream landscape! We are happy to provide you with a quick
						consultation and a free estimate. We’re excited to discuss your needs and look forward to
						answering any questions you may have about our world-class landscaping and lawn care services in
						the Frisco area.
					</Text>
				</Content>
			</Container>
		</Layout>
	)
}

export default FriscoPage

// Component Styles
const Content = styled.section`
	margin: 0 auto;
	max-width: ${({ theme }) => theme.maxWidth};
	padding: 0.5rem 1rem;

	.bold {
		font-weight: bold;
	}

	li {
		list-style: disc;
		margin-left: 2.5rem;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.phone}) {
		font-size: calc(1vw + 0.8vh);
	}
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
const SubTitle = styled.h3`
	color: ${({ theme }) => theme.colors.primary.default};
	font-size: 1.5rem;
	font-weight: 100;
	letter-spacing: 3px;
	margin: 1.25rem 0 1.75rem;
	text-align: center;
	text-transform: uppercase;

	@media (min-width: ${({ theme }) => theme.breakpoints.phone}) {
		font-size: calc(1vw + 1.1vh);
	}
`
const Text = styled.p`
	align-self: flex-start;
	line-height: 1.65;
	margin: 0 auto 2rem;
	padding: 1rem;
	width: 100%;
`
