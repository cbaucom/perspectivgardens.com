import styled, { css } from 'styled-components'

export const buttonStyles = css`
	background: ${({ theme }) => theme.colors.primary.default};
	border: none;
	width: 100px;
	height: 50px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	font-size: 1.25rem;
	color: ${({ theme }) => theme.colors.white.default};
	padding: 0.25rem 1rem;
	transition: all ${({ theme }) => theme.transitions.normal};
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.31);

	&:hover {
		background: ${({ theme }) => theme.colors.primary.light};
		color: ${({ theme }) => theme.colors.white.default};
		cursor: pointer;
		transform: translateY(-2px);
		box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.51);
	}
	&:focus {
		outline: none;
	}
	svg {
		width: 20px;
		height: 20px;
		margin-right: 0.75rem;
		fill: ${({ theme }) => theme.colors.white.default};
	}
`

const Button = styled.button`
	${buttonStyles}
`

export default Button
