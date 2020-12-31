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

	return (
		<StyledMenu open={open} aria-hidden={!isHidden} {...props}>
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
			<StyledLink to="/contact" tabIndex={tabIndex}>
				Contact
			</StyledLink>
		</StyledMenu>
	)
}

export default Menu

// Component Styles
const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${({ theme }) => theme.colors.bg};
	height: 100vh;
	text-align: center;
	padding: 2rem;
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 0.3s ease-in-out;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		width: 100%;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		display: none;
	}
`

const StyledLink = styled(Link)`
	font-size: 2rem;
	text-transform: uppercase;
	padding: 2rem 0;
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
