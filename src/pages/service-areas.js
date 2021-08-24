import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'
import { Link } from 'gatsby'

const SERVICE_AREAS = [
	{
		id: 1,
		name: 'Frisco',
		url: '/frisco',
		description:
			'Homeowners in Frisco Texas trust Perspectiv gardens with all of their landscaping and lawn care needs. Contact our experts today!',
		image: 'https://res.cloudinary.com/crbaucom/image/upload/v1609691684/perspectivgardens.com/A2.jpg',
	},
	{
		id: 2,
		name: 'McKinney',
		url: '/mckinney',
		description:
			'McKinney is a busy city with many major shopping and service areas. McKinney is a great place to live if you want to live in a city that is packed with shopping and service areas. McKinney is also a great place to live if you want to live in a city that is packed with shopping and service areas.',
		image: 'https://res.cloudinary.com/crbaucom/image/upload/v1609691687/perspectivgardens.com/D2.jpg',
	},
]

function ServiceAreas() {
	return (
		<Layout>
			<SEO title="" description="" />
			<Container>
				<Title>Service Areas</Title>
				<ServicesContainer>
					{SERVICE_AREAS.map((area) => (
						<StyledCard to={area.url} key={area.id}>
							<img alt={area.name} src={area.image} />
							<div className="info">
								<h3>{area.name}</h3>
								<p>{area.description}</p>
							</div>
						</StyledCard>
					))}
				</ServicesContainer>
			</Container>
		</Layout>
	)
}

export default ServiceAreas

// Component Styles
const Title = styled.h1`
	text-transform: uppercase;
	letter-spacing: 3px;
	font-size: ${({ theme }) => theme.fontSize.xxlarge};
	font-weight: 100;
	color: ${({ theme }) => theme.colors.primary.default};
	text-align: center;
`

const ServicesContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;
	padding: 0 1rem;

	@supports (display: grid) {
		display: grid;
		justify-items: center;
		grid-template-columns: 1fr;
		grid-gap: 1rem;
		align-items: stretch;
		padding-bottom: 1rem;
		margin: 0 10px;

		@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
			grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		}
	}
`
const StyledCard = styled(Link)`
	background: #fff;
	margin: 2rem auto;
	padding-bottom: 1rem;
	border-radius: 5px;
	border-top: 5px solid ${({ theme }) => theme.colors.primary.default};
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
	transition: 0.25s;
	width: 100%;
	flex: 1 1 100%;

	&:hover {
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
	}

	img {
		height: 350px;
		width: 100%;
		object-fit: cover;
	}

	.info {
		padding: 1rem;
	}
`
