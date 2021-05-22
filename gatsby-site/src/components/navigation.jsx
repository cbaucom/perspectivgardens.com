import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'
import { FiPhoneCall } from 'react-icons/fi'
import FocusLock from 'react-focus-lock'

import { useOnClickOutside } from '../hooks'
import Logo from './logo'
import Burger from './burger'
import Menu from './menu'

function Navigation() {
	const [open, setOpen] = useState(false)
	const node = useRef()
	const menuId = 'main-menu'

	useOnClickOutside(node, () => setOpen(false))

	return (
		<Headroom>
			<PhoneLink>
				<a href="tel:1-469-267-9048">
					<FiPhoneCall />
				</a>
			</PhoneLink>
			<Wrapper>
				<StyledLink to="/" aria-label="Perspectiv Gardens, Back to homepage">
					<Logo />
				</StyledLink>
				<Nav>
					<StyledLink to="/about">About</StyledLink>
					<StyledLink to="/design">Design</StyledLink>
					<StyledLink to="/maintenance">Maintenance</StyledLink>
					<StyledLink to="/projects">Projects</StyledLink>
					<StyledLink to="/services">Services</StyledLink>
					<StyledLink to="/contact">Contact</StyledLink>
				</Nav>
			</Wrapper>
			<div ref={node}>
				<FocusLock disabled={!open}>
					<Burger open={open} setOpen={setOpen} aria-controls={menuId} />
					<Menu open={open} setOpen={setOpen} id={menuId} />
				</FocusLock>
			</div>
		</Headroom>
	)
}

export default Navigation

// Component Styles
const Wrapper = styled.div`
	margin: 0 auto;
	max-width: ${({ theme }) => theme.maxWidth};
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	width: 100%;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		justify-content: space-between;
	}
`

const StyledLink = styled(Link)`
	display: flex;
	font-weight: 700;
	align-items: center;
	svg {
		height: 50px;
		width: 100px;
		margin-bottom: 0;

		@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
			height: 75px;
			width: 125px;
		}

		@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
			height: 100px;
			width: 150px;
		}
	}
`

const PhoneLink = styled.div`
	position: absolute;
	top: 25px;
	left: 1.5rem;

	a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	svg {
		height: 35px !important;
		width: 35px !important;
		margin: 0;
		color: ${({ theme }) => theme.colors.primary.default};
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		display: none;
	}
`

const Nav = styled.nav`
	display: none;
	justify-content: flex-end;
	font-size: ${({ theme }) => theme.fontSize.large};
	font-family: ${({ theme }) => theme.fontFamily.heading};
	align-items: center;
	a {
		color: ${({ theme }) => theme.colors.white.default};
		margin-left: 1rem;
		width: auto;
		transition: all ${({ theme }) => theme.transitions.normal};
		&:hover {
			color: ${({ theme }) => theme.colors.white.dark};
		}
		&:focus {
			color: ${({ theme }) => theme.colors.white.default};
		}

		@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
			margin-left: 2rem;
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		display: flex;
		font-size: 1.1rem;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		font-size: ${({ theme }) => theme.fontSize.xlarge};
	}
`
