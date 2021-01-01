import { css } from 'styled-components'
import theme from '../styles/theme'

const headroom = css`
	.headroom-wrapper {
		position: fixed;
		width: 100%;
		z-index: 2000;
	}
	.headroom {
		margin: 0 auto;
		background-color: ${theme.colors.white.light};
		font-size: ${theme.fontSize.large};
		padding: 15px 1rem;
		width: 100%;
		/* svg {
			width: 120px;
			height: 80px;
		} */
		nav {
			a {
				color: ${theme.colors.primary.default};
				transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
				&:hover {
					color: ${theme.colors.primary.dark};
				}
				&:focus {
					color: ${theme.colors.primary.dark};
				}
			}
		}
	}
	/* Top: 0 */
	.headroom--unfixed {
		position: relative;
		background-color: ${theme.colors.white.light};
		transform: translateY(0);
		transition: ${theme.transitions.headroom};
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
	}
	/* Scrolling down  */
	.headroom--unpinned {
		position: fixed;
		transform: translateY(-100%);
		transition: ${theme.transitions.headroom};
	}
	/* Scrolling up */
	.headroom--scrolled {
		transition: ${theme.transitions.headroom};
	}
	/* Scrolling up */
	.headroom--pinned {
		position: fixed;
		transform: translateY(0);
		transition: ${theme.transitions.headroom};
		background-color: ${theme.colors.white.light};
		box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;

		span {
			color: ${theme.colors.primary.default};
		}
	}
`

export default headroom
