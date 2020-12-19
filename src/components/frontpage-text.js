import React from 'react'
import styled from 'styled-components'

// Component Styles
const Wrapper = styled.section`
	margin: 2rem auto 1rem;
	padding: 1rem;

	.bold {
		font-weight: bold;
	}

	li {
		list-style: disc;
		margin-left: 1.5rem;
	}
`
const Text = styled.p`
	font-size: 1.2rem;
	line-height: 1.65;

	@media (min-width: ${({ theme }) => theme.breakpoints.phone}) {
		font-size: 1.25rem;
		line-height: 1.8;
	}
`

function FrontpageText() {
	return (
		<Wrapper>
			<Text>
				Is your yard needing some much-needed attention? Would you like to have a beautiful, well-kept outdoor
				area to enjoy every day of the year? Your yard can become an oasis of natural beauty with the help of
				Perspectiv Gardens Lawncare and Landscaping. We’re an award-winning landscaping company based in
				Rockwall, Texas, with more than 20 years of landscaping experience. Whether you’re needing a fresh, new
				look in landscape design, thinking about adding an appealing flagstone pathway or flower bed, or simply
				wanting weekly maintenance to keep your lawn looking immaculate, our team of landscaping and design
				professionals can help with friendly and professional service.{' '}
			</Text>

			<Text>
				Over the past 20 years, we have earned a reputation for providing excellent customer service, quick
				response time, and high quality materials and plants. We have a passion for the work we do, and it shows
				in each job we complete. We offer free estimates and designs for any landscaping or outdoor
				beautification project you can imagine.
			</Text>
			<Text className="bold">Our services include:</Text>
			<ul>
				<li>Landscape Design</li>
				<li>Landscape Installation</li>
				<li>Landscape Maintenance</li>
				<li>Stone Work</li>
				<li>Flagstone Pathways and Patios</li>
				<li>Tree and Shrub Trimming</li>
				<li>Flower Bed Cleanup and Maintenance</li>
				<li>Spring and Fall Cleanups</li>
				<li>And Much More!</li>
			</ul>
			<Text>
				Our unique, creative landscape designs set us apart from other landscaping companies. Why wait another
				day? We can transform your yard into a beautiful and inviting outdoor sanctuary. When you’re ready for a
				new perspective in landscaping, call the experts at Perspectiv Gardens for a free estimate! We look
				forward to providing you with outstanding service and the highest quality in landscape design and lawn
				care.
			</Text>
		</Wrapper>
	)
}

export default FrontpageText
