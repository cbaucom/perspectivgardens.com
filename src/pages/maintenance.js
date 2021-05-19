import React from 'react'
import styled from 'styled-components'

import Container from '../components/container'
import Layout from '../components/layout'
import SEO from '../components/seo'

function MaintenancePage() {
	return (
		<Layout>
			<SEO
				title="Rockwall Lawn Maintenance | Sod, Aeration, Raking"
				description="The dedicated team at Perspectiv Gardens can maintain your lawn beautifully with services like sod, aeration, raking, and pruning."
			/>
			<Container>
				<Content>
					<Title>Maintenance</Title>
					<Text>
						At Perspectiv Gardens, we have a passion for helping the people of Rockwall with lawn
						maintenance and a reputation for excellent customer service and the highest quality work.
						Whether we’re designing a new flagstone patio or simply weeding a flower bed, we take pride in a
						job well done. In addition to unique landscape design, we offer a variety of landscape and lawn
						maintenance services to Rockwall, TX, and nearby cities.
					</Text>
					<SubTitle>Sod Installation</SubTitle>
					<Text>
						If your lawn is past the point of no return because of weeds or insect infestation, new sod
						installation can give your yard a fresh start. A beautiful and vibrant lawn accents your home
						and your landscaping, and provides an enjoyable place for your family to spend quality time
						together. Whether you need to replace old sod or are wanting to add a new area of sod in your
						landscaping, the Rockwall sod installation experts at Perspectiv Gardens have you covered.
					</Text>
					<SubTitle>Aerations</SubTitle>
					<Text>
						It’s common knowledge that plants, trees, and grass need water and sunlight to thrive, but they
						also need aerated soil in order to receive water and nutrients. Over time, soil can become
						compacted, making it difficult for root systems to absorb water. If your plants are showing
						signs of wilting or dropping a large amount of leaves, it may be time to aerate the soil.
						Perspectiv Gardens can provide soil aeration to your lawn and landscaping, so your plants and
						lawn will flourish.
					</Text>
					<SubTitle>Spring and Fall Cleanup</SubTitle>
					<Text>
						To keep your lawn and landscaping looking pristine all year round, seasonal cleanup is a must.
						Removing leaves, weeds, and other debris from your yard will help it thrive and look its best.
						Whether you need our Dallas and Rockwall raking and bagging services in the fall or weeding and
						fertilizing in the spring, our team of experts can keep your lawn looking clean and beautiful.{' '}
					</Text>
					<SubTitle>Flower Bed Maintenance</SubTitle>
					<Text>
						The splash of color flowers add to your landscaping brightens up any area of your yard.
						Perspectiv Gardens offers people in Rockwall lawn maintenance and garden care service that will
						keep their plants and flowers in great condition, ensuring they remain healthy and beautiful all
						year long.
					</Text>
					<SubTitle>Flower Bed Cleanups</SubTitle>
					<Text>
						Our flower bed cleanup services include weeding, mulching, and removal of any dead plants. We
						will keep your flower beds beautiful, healthy, and free of weeds and debris. For a new
						perspective in landscaping and lawn maintenance services, call the team of professionals at
						Perspectiv Gardens for an estimate! We look forward to providing you with superior customer
						service and high quality lawn maintenance services to Rockwall and other Texas Communities.
					</Text>
				</Content>
			</Container>
		</Layout>
	)
}

export default MaintenancePage

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
const SubTitle = styled.h3`
	color: ${({ theme }) => theme.colors.primary.default};
	font-weight: 100;
	letter-spacing: 3px;
	margin: 1.25rem 0 0;
	text-align: center;
	text-transform: uppercase;
`
const Text = styled.p`
	align-self: flex-start;
	font-size: 1.1rem;
	line-height: 1.65;
	margin: 0 auto 2rem;
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
