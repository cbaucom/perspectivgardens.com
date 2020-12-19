import React from 'react'
import styled from 'styled-components'

import FrontpageHero from '../components/frontpage-hero'
import FrontpageServices from '../components/frontpage-services'
import FrontpageText from '../components/frontpage-text'
import Gallery from '../components/gallery'
import Layout from '../components/layout'
import Reviews from '../components/reviews'
import SEO from '../components/seo'

function IndexPage() {
	return (
		<Layout>
			<SEO title="Home | Perspectiv Gardens" />
			<Container>
				<FrontpageHero />
				<Content>
					<FrontpageText />
					<FrontpageServices />
					<Reviews />
					<Gallery />
				</Content>
			</Container>
		</Layout>
	)
}

export default IndexPage

// Component Styles
const Container = styled.div`
	margin-top: 10px;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		margin-top: 100px;
	}
`

const Content = styled.section`
	margin: 0 auto;
	max-width: ${({ theme }) => theme.maxWidth};
	padding: 0.5rem 1rem;
`
