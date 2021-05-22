import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

function Gallery() {
	const data = useStaticQuery(graphql`
		{
			allCloudinaryMedia {
				edges {
					node {
						public_id
						secure_url
					}
				}
			}
		}
	`)

	const clImages = data.allCloudinaryMedia.edges

	return (
		<Wrapper>
			<Title>Gallery</Title>
			<GalleryContainer>
				<Grid>
					{clImages.map((image, index) => (
						<Item key={`${index}-cl`}>
							<img src={image.node.secure_url} alt={image.node.public_id} />
						</Item>
					))}
				</Grid>
			</GalleryContainer>
		</Wrapper>
	)
}

export default Gallery

// Component Styles
const Wrapper = styled.section`
	padding: 2rem 0 6rem;
`

const Title = styled.h2`
	text-transform: uppercase;
	letter-spacing: 3px;
	font-size: ${({ theme }) => theme.fontSize.xxlarge};
	font-weight: 100;
	color: ${({ theme }) => theme.colors.primary.default};
	text-align: center;
	padding-bottom: 2rem;
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
