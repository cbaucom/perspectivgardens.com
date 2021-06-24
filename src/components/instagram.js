// import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import moment from 'moment'
// import styled from 'styled-components'
// import Heart from '../images/heart.svg'

// const GramWrapper = styled.div`
// 	margin: 0 auto;
// 	padding: 3rem 0.5rem;
// 	text-align: center;

// 	a.instalink {
// 		font-size: 1.25rem;
// 		text-decoration: none;
// 		transition: all 400ms ease-in;

// 		&:hover {
// 			border-bottom: 1px solid ${({ theme }) => theme.colors.primary.default};
// 			color: ${({ theme }) => theme.colors.primary.default};
// 		}
// 	}
// `

// const Title = styled.h1`
// 	color: ${({ theme }) => theme.colors.primary.default};
// 	font-size: ${({ theme }) => theme.fontSize.xxlarge};
// 	font-weight: 100;
// 	letter-spacing: 3px;
// 	margin-bottom: 1rem;
// 	text-align: center;
// 	text-transform: uppercase;
// `

// const Grid = styled.div`
// 	margin: 1rem 20px 5rem 20px;
// 	display: grid;
// 	grid-gap: 20px;
// 	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
// 	@media (max-width: 1000px) {
// 		grid-template-columns: 1fr 1fr 1fr;
// 	}
// 	@media (max-width: 768px) {
// 		grid-template-columns: 1fr 1fr;
// 	}
// 	@media (max-width: 480px) {
// 		grid-template-columns: 1fr;
// 	}
// `

// const Overlay = styled.div`
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	right: 0;
// 	bottom: 0;
// 	background: rgba(0, 0, 0, 0.6);
// 	z-index: 2;
// 	opacity: 0;
// 	transition: all 0.3s ease 0s;
// `

// const PostTitle = styled.div`
// 	color: white;
// 	font-size: 1.25rem;
// 	text-align: center;
// 	text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
// 	transform: translateY(50px);
// 	transition: all 0.4s ease 0s;
// 	opacity: 0;
// `

// const Bottom = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	flex-wrap: nowrap;
// 	justify-content: space-between;
// 	color: white;
// 	transform: translateY(45px);
// 	opacity: 0;
// 	transition: all 0.4s ease 0s;
// `

// const Item = styled.a`
// 	position: relative;
// 	overflow: hidden;
// 	> div img {
// 		transition: all 0.3s ease 0s !important;
// 	}
// 	&:hover {
// 		${Overlay} {
// 			opacity: 1;
// 		}
// 		${Bottom} {
// 			transform: translateY(0);
// 			opacity: 1;
// 		}
// 		${PostTitle} {
// 			transform: translateY(-20px);
// 			opacity: 1;
// 		}
// 		box-shadow: 0 3px 5px 1px rgba(42, 42, 42, 0.4);
// 	}
// `

// const Content = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	flex-wrap: nowrap;
// 	justify-content: space-between;
// 	z-index: 10;
// 	position: absolute;
// 	left: 0;
// 	top: 0;
// 	right: 0;
// 	bottom: 0;
// 	padding: 1.25rem;
// 	font-size: 1rem;
// 	letter-spacing: 1px;
// 	line-height: 1.25;
// 	@media (max-width: 1000px) {
// 		font-size: 1rem;
// 		line-height: 1.1;
// 	}
// 	@media (max-width: 768px) {
// 		font-size: 0.85rem;
// 	}
// 	@media (max-width: 480px) {
// 		font-size: 1.15rem;
// 	}
// `

// const HeartIcon = styled.img`
// 	width: 1.25rem;
// 	height: 1.25rem;
// 	margin: -5px 0;
// 	@media (max-width: 768px) {
// 		width: 1rem;
// 		height: 1rem;
// 	}
// `

// const Instagram = () => (
// 	<StaticQuery
// 		query={graphql`
// 			query InstagramQuery {
// 				instagram: allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 24) {
// 					edges {
// 						node {
// 							caption
// 							id
// 							timestamp
// 							likes
// 							localFile {
// 								childImageSharp {
// 									fluid(quality: 100, maxWidth: 600, maxHeight: 600) {
// 										...GatsbyImageSharpFluid_withWebp
// 									}
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		`}
// 		render={(data) => (
// 			<GramWrapper>
// 				<Title>Follow us on Instagram!</Title>
// 				<a className="instalink" href="https://instagram.com/perspectivgardens">
// 					@perspectivgardens
// 				</a>
// 				<Grid>
// 					{data.instagram.edges.map(({ node }) => {
// 						const pic = node.localFile.childImageSharp.fluid
// 						const title = node.caption.split('#')[0]
// 						const date = new Date(node.timestamp * 1000)
// 						const formattedDate = moment(date).format('MMMM DD')
// 						return (
// 							<Item href={`https://www.instagram.com/p/${node.id}/`} key={node.id}>
// 								<Overlay />
// 								<Img fluid={pic} alt={title} />
// 								<Content>
// 									<Bottom>
// 										<span>
// 											<HeartIcon src={Heart} alt="Heart" /> {node.likes}
// 										</span>
// 										<span>{`${formattedDate}`}</span>
// 									</Bottom>
// 									<PostTitle>{title}</PostTitle>
// 								</Content>
// 							</Item>
// 						)
// 					})}
// 				</Grid>
// 			</GramWrapper>
// 		)}
// 	/>
// )

// export default Instagram

import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import Heart from '../images/heart.svg'

const GramWrapper = styled.div`
	margin: 0 auto;
	padding: 3rem 0.5rem;
	text-align: center;

	a.instalink {
		font-size: 1.25rem;
		text-decoration: none;
		transition: all 400ms ease-in;

		&:hover {
			border-bottom: 1px solid ${({ theme }) => theme.colors.primary.default};
			color: ${({ theme }) => theme.colors.primary.default};
		}
	}
`

const Title = styled.h1`
	color: ${({ theme }) => theme.colors.primary.default};
	font-size: ${({ theme }) => theme.fontSize.xxlarge};
	font-weight: 100;
	letter-spacing: 3px;
	margin-bottom: 1rem;
	text-align: center;
	text-transform: uppercase;
`

const Grid = styled.div`
	margin: 1rem 20px 5rem 20px;
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	@media (max-width: 1000px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	@media (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 480px) {
		grid-template-columns: 1fr;
	}
`

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.6);
	z-index: 2;
	opacity: 0;
	transition: all 0.3s ease 0s;
`

const PostTitle = styled.div`
	color: white;
	font-size: 1.25rem;
	text-align: center;
	text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	transform: translateY(50px);
	transition: all 0.4s ease 0s;
	opacity: 0;
`

const Bottom = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	color: white;
	transform: translateY(50px);
	opacity: 0;
	transition: all 0.4s ease 0s;
`

const Item = styled.a`
	position: relative;
	overflow: hidden;
	> div img {
		transition: all 0.3s ease 0s !important;
	}
	&:hover {
		${Overlay} {
			opacity: 1;
		}
		${Bottom} {
			transform: translateY(0);
			opacity: 1;
		}
		${PostTitle} {
			transform: translateY(-30px);
			opacity: 1;
		}
		box-shadow: 0 3px 5px 1px rgba(42, 42, 42, 0.4);
	}
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-between;
	z-index: 10;
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	padding: 1.25rem;
	font-size: 1rem;
	letter-spacing: 1px;
	line-height: 1.25;
	@media (max-width: 1000px) {
		font-size: 1rem;
		line-height: 1.1;
	}
	@media (max-width: 768px) {
		font-size: 0.85rem;
	}
	@media (max-width: 480px) {
		font-size: 1.15rem;
	}
`

const HeartIcon = styled.img`
	width: 1.25rem;
	height: 1.25rem;
	margin: -5px 0;
	@media (max-width: 768px) {
		width: 1rem;
		height: 1rem;
	}
`

export default function Instagram() {
	const ACCESS_TOKEN =
		'IGQVJYeFl4QkxBTU8ycVotZAUlYVW5hUUQzb3FSR2YxYmN5Q0NJYWlWTklfRUxyVUJFelRtVnZAlWW1ucnRQU2hWY05uSGJfRHRKcS1FY0FJWVc0ZAGUwZAW15dDhDd3RheGtHQTB4Nl9LVDlfcnVQc3ZAOagZDZD'
	const LIMIT = 12

	const [photos, setPhotos] = React.useState([])

	React.useEffect(() => {
		loadData()
	}, [])

	const loadData = async () => {
		const response = await fetch(
			`https://graph.instagram.com/me/media?fields=id,caption,children,media_url,media_type,permalink,thumbnail_url,timestamp,username&limit=${LIMIT}&access_token=${ACCESS_TOKEN}`
		)
		const { data } = await response.json()
		setPhotos(data)
	}

	return (
		<GramWrapper>
			<Title>Follow us on Instagram!</Title>
			<a className="instalink" href="https://instagram.com/perspectivgardens">
				@perspectivgardens
			</a>
			<Grid>
				{photos &&
					photos.map((item) => {
						console.log('🚀 ~ file: instagram.js ~ line 370 ~ photos.map ~ item', item)
						const pic = item.media_url
						const title = item.caption.split('#')[0]
						const date = new Date(item.timestamp)
						const formattedDate = moment(date).format('MMMM DD')
						const video = item.media_type === 'VIDEO'

						return (
							<Item href={item.permalink} key={item.id}>
								<Overlay />
								<img src={video ? item.thumbnail_url : pic} alt={title} />
								<Content>
									<Bottom>
										<span>{/* <HeartIcon src={Heart} alt="Heart" /> {item.likes} */}</span>
										<span>{`${formattedDate}`}</span>
									</Bottom>
									<PostTitle>{title}</PostTitle>
								</Content>
							</Item>
						)
					})}
			</Grid>
		</GramWrapper>
	)
}
