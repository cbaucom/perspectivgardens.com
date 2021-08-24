import React from 'react'
import { bool } from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

Menu.propTypes = {
	open: bool.isRequired,
}

function Menu({ open, ...props }) {
	const isHidden = open ? true : false
	const tabIndex = isHidden ? 0 : -1

	// Prevent the page from scrolling when the modal is open
	if (typeof window !== 'undefined') {
		const body = document.querySelector('body')

		if (open) {
			body.style.overflow = 'hidden'
			body.style.position = 'fixed'
		} else {
			body.style.overflow = 'auto'
			body.style.position = 'inherit'
		}
	}

	return (
		<StyledMenu open={open} aria-hidden={!isHidden} {...props} className={`menu-${open ? 'open' : 'closed'}`}>
			<StyledLink to="/about" tabIndex={tabIndex}>
				About
			</StyledLink>
			<StyledLink to="/design" tabIndex={tabIndex}>
				Design
			</StyledLink>
			<StyledLink to="/maintenance" tabIndex={tabIndex}>
				Maintenance
			</StyledLink>
			<StyledLink to="/projects" tabIndex={tabIndex}>
				Projects
			</StyledLink>
			<StyledLink to="/services" tabIndex={tabIndex}>
				Services
			</StyledLink>
			<StyledLink to="/service-areas" tabIndex={tabIndex}>
				Service Areas
			</StyledLink>
			<StyledLink to="/contact" tabIndex={tabIndex}>
				Contact
			</StyledLink>
		</StyledMenu>
	)
}

export default Menu

// Component Styles
const StyledMenu = styled.nav`
	background: ${({ theme }) => theme.colors.bg};
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: space-evenly;
	left: 0;
	overflow-y: scroll;
	padding: 2rem;
	position: absolute;
	text-align: center;
	top: 0;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
	transition: transform 0.3s ease-in-out;

	@media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
		width: 100%;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		display: none;
	}
`

const StyledLink = styled(Link)`
	font-size: 2rem;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 0.5rem;
	color: ${({ theme }) => theme.colors.white.default};
	text-decoration: none;
	transition: color 0.3s linear;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: 1.5rem;
		text-align: center;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.white.light};
	}
`
