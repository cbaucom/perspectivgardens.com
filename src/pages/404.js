import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Background = styled.div`
	background: url(https://res.cloudinary.com/crbaucom/image/upload/v1629777524/404.jpg) no-repeat center center;
	height: 70vh;
	margin-top: 80px;

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		margin-top: 130px;
	}
`

function NotFoundPage() {
	return (
		<Layout>
			<SEO title="404: Not found" />
			<Background />
		</Layout>
	)
}

export default NotFoundPage
