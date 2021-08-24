import React from 'react'
import styled from 'styled-components'

import Container from '../components/container'
import Layout from '../components/layout'
import SEO from '../components/seo'

function MckinneyPage() {
	return (
		<Layout>
			<SEO
				title="McKinney Landscape Design & Yard Maintenance"
				description="Looking for a unique landscape design for your McKinney home? Contact the lawn care specialists at Perspectiv Gardens today!"
			/>
			<Container>
				<Content>
					<Title>McKinney, TX</Title>
					<Text>
						A lush, attractive outdoor space for your home or business can really heighten your mood, invite
						compliments, and enhance the beauty of your dwelling. If you need prompt and skilled lawn care
						or landscaping expertise for your McKinney home, don’t hesitate to reach out to the landscape
						design and yard maintenance specialists at Perspectiv Gardens Lawn care and Landscaping. With
						over two decades of experience making Texas’ greenery that much greener, we have the right tools
						for the job. No matter whether you’re looking for a larger scale landscape design or something
						smaller, like tree trimming or yard maintenance in the McKinney area, we’re ready, willing, and
						able to knock the job out of the park for you!
					</Text>
					<Text>
						We’re proud to say that our stellar customer service and carefully honed horticultural talents
						have earned us local awards and acclaim. Day in and day out, we are passionate about the work we
						do to keep McKinney beautiful with expert landscape design and yard maintenance, and we love to
						provide our clients with world-class lawn care, lawn maintenance, and landscape designs.
					</Text>
					<SubTitle>Our range of services includes:</SubTitle>
					<ul>
						<li>Seasonal Cleanups for Fall and Spring</li>
						<li>Flower Bed Maintenance and Cleanup</li>
						<li>Landscaping Upkeep</li>
						<li>Landscaping Installations</li>
						<li>Landscaping Designs</li>
						<li>Stone Work</li>
						<li>Flagstone Pathways</li>
						<li>Flagstone Patios</li>
						<li>Trimming Trees and Shrubs</li>
						<li>And Much More!</li>
					</ul>
					<Text>
						Our experts work with fresh, highly creative mindsets and have unique perspectives on
						landscaping aesthetics, hence our name! Perspective really is what it’s all about. We tailor
						treatments and maintenance to the specific needs of your outdoor area, ensuring that we live up
						to your expectations with customized landscaping service! We pride ourselves in keeping a
						personal touch on everything, which we feel really sets us apart from other lawn care companies.
						Contact us today and our experts can not only provide you with a free estimate, but also answer
						any questions you may have about our services or your particular needs. We can’t wait to hear
						from you and hope to have the honor of providing you with our award-winning care.
					</Text>
				</Content>
			</Container>
		</Layout>
	)
}

export default MckinneyPage

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
