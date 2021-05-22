import React from 'react'
import styled from 'styled-components'

import FrontpageHero from '../components/frontpage-hero'
import FrontpageServices from '../components/frontpage-services'
import FrontpageText from '../components/frontpage-text'
import Layout from '../components/layout'
import Reviews from '../components/reviews'
import SEO from '../components/seo'

function IndexPage() {
	const GOOGLE_SEARCH_CONSOLE_META = [
		{
			name: `google-site-verification`,
			content: `${process.env.GATSBY_GOOGLE_SEARCH_CONSOLE_KEY}`,
		},
	]
	return (
		<Layout>
			<SEO
				title="Rockwall Landscaping Company & Lawn Care"
				meta={GOOGLE_SEARCH_CONSOLE_META}
				description="Perspectiv Gardens is a Rockwall based landscaping company that can make your yard beautiful and keep it that way all year long."
			/>
			<Container>
				<FrontpageHero />
				<Content>
					<FrontpageText />
					<FrontpageServices />
					<Reviews />
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
