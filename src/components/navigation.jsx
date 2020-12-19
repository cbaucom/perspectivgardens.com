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
	justify-content: space-between;
	flex-direction: row;
	width: 100%;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		justify-content: center;
	}
`

const StyledLink = styled(Link)`
	display: flex;
	font-weight: 700;
	align-items: center;
	svg {
		height: 100px;
		width: 150px;
		margin-bottom: 0;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		height: 50px;
		width: 100px;
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
	display: flex;
	justify-content: flex-end;
	font-size: ${({ theme }) => theme.fontSize.xlarge};
	font-family: ${({ theme }) => theme.fontFamily.heading};
	align-items: center;
	a {
		color: ${({ theme }) => theme.colors.white.default};
		margin-left: 2rem;
		width: auto;
		transition: all ${({ theme }) => theme.transitions.normal};
		&:hover {
			color: ${({ theme }) => theme.colors.white.dark};
		}
		&:focus {
			color: ${({ theme }) => theme.colors.white.default};
		}

		@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
			margin-left: 1rem;
		}
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: ${({ theme }) => theme.fontSize.large};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		display: none;
	}
`
