import styled from 'styled-components'

const Container = styled.div`
	margin: calc(1rem + 100px) auto 3rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: ${({ theme }) => theme.maxWidth};

	/* > 800px */
	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		margin: calc(2rem + 100px) auto 3rem;
	}

	/* > 1000px */
	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		margin: calc(4rem + 100px) auto 3rem;
	}
`

export default Container
