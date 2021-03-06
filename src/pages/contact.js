import React from 'react'
import styled from 'styled-components'
import { FiPhoneCall, FiMail } from 'react-icons/fi'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contact-form'
import Container from '../components/container'

function Contact() {
	return (
		<Layout>
			<SEO
				title="Rockwall Yard Maintenance: Lawn & Garden Care"
				description="Our yard maintenance experts here is Rockwall can help you with all your lawn and garden needs. Contact us today and get a quote."
			/>
			<Container>
				<Title>Contact</Title>

				<FormWrapper>
					<Text>Please fill out the form below and we will get back to you as soon as possible.</Text>
					<Card>
						<ContactForm />
					</Card>
				</FormWrapper>

				<InfoWrapper>
					<SectionWrapper>
						<div className="icon-wrapper">
							<FiPhoneCall />
						</div>
						<div className="text-wrapper">
							<h4>
								<a href="tel:1-469-267-9048">Give us a call</a>
							</h4>
							<p>
								Give us a call at <a href="tel:1-469-267-9048">(469) 267-9048</a> and let's schedule an
								appointment!
							</p>
						</div>
					</SectionWrapper>
					<SectionWrapper>
						<div className="icon-wrapper">
							<FiMail />
						</div>
						<div className="text-wrapper">
							<h4>
								<a href="mailto:perspectivgardens@gmail.com">Send us an email</a>
							</h4>
							<p>
								Perspectiv Gardens prides itself on providing excellent quality and care for all your
								lawn care and landscaping needs. Contact us today for a free quote!
							</p>
						</div>
					</SectionWrapper>
				</InfoWrapper>
			</Container>
		</Layout>
	)
}

export default Contact

// Component Styles
const Title = styled.h1`
	text-transform: uppercase;
	letter-spacing: 3px;
	font-size: ${({ theme }) => theme.fontSize.xxlarge};
	font-weight: 100;
	color: ${({ theme }) => theme.colors.primary.default};
	text-align: center;
`

const FormWrapper = styled.div`
	padding: 3rem 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;

	@media (min-width: ${({ theme }) => theme.breakpoints.phone}) {
		padding: 2rem 1rem;
	}

	form {
		text-align: left;
	}
	.form-error {
		margin: 0 0 1rem 0;
		font-style: italic;
		color: red;
		text-align: center;
	}
	label {
		margin-bottom: 1rem;
		text-align: left;
		font-size: 1rem;
	}
	input,
	textarea,
	select {
		width: 100%;
		box-sizing: border-box;
		margin: 0.25rem 0 0.75rem;
		padding: 0.5rem;
		font-size: 1rem;
		border: 1px solid RGBA(68, 142, 199, 0.3);
		&:focus {
			outline: 0;
			border-color: #33bb77;
		}
	}
	select {
		font-size: 1.25rem;
	}
	.same-line {
		display: grid;
		grid-template-columns: 1fr;
		align-items: baseline;
		margin: 0.5rem 0;
		@media (min-width: ${({ theme }) => theme.breakpoints.phone}) {
			grid-template-columns: 1fr 5fr;
		}
	}
`

const Text = styled.h3`
	width: 90%;
`

const Card = styled.article`
	padding: 3rem 1rem;
	margin: 1rem auto;
	width: 100%;
	box-shadow: 0 0 6px rgba(13, 97, 49, 0.25);
	transition: 0.25s;
	display: flex;
	flex-direction: column;
	&:hover {
		box-shadow: 0 0 10px rgba(13, 97, 49, 0.5);
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.phone}) {
		width: 90%;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		width: 80%;
	}

	h2 {
		margin-top: 0;
		margin-bottom: 0.1rem;
	}
`
const InfoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;

	@supports (display: grid) {
		display: grid;
		grid-gap: 20px;
		grid-template-columns: 1fr 1fr;
		padding: 1rem;
		width: 100%;

		@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
			grid-template-columns: 1fr;
		}
	}

	h3,
	h4 {
		text-align: center;
	}
	p {
		margin: 0.5rem auto;
	}
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.primary.default};
	}
	.contact-text-wrapper,
	.info {
		li {
			text-decoration: none;
		}
	}
`

const SectionWrapper = styled.div`
	display: flex;
	justify-content: start;
	align-items: flex-start;
	margin: 2rem auto;
	padding: 0.5rem;
	text-align: left;
	width: 100%;
	flex: 1 1 100%;

	@media (min-width: ${({ theme }) => theme.breakpoints.phone}) {
		flex: 1 1 40%;
		margin: 2rem 0.5rem;
	}
	h4 {
		margin-bottom: 0.5rem;
		a {
			color: ${({ theme }) => theme.colors.primary.default};
			font-size: 1.4rem;
		}
	}
	p {
		font-size: 1.25rem;
	}

	.icon-wrapper {
		margin-right: 15px;
		svg {
			height: 35px;
			width: 35px;
			margin: 0 10px 0 0;
			color: ${({ theme }) => theme.colors.primary.default};
		}
	}

	.text-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: flex-start;
		width: 100%;

		p {
			width: 100%;
		}

		a {
			&:hover {
				color: ${({ theme }) => theme.colors.primary.light};
				border-bottom: 2px solid ${({ theme }) => theme.colors.primary.light};
			}
		}
	}
`
