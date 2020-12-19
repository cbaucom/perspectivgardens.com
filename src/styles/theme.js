import { lighten } from 'polished'

const colors = {
	primary: {
		default: '#005826',
		light: '#10713A',
		lighter: '#258A51',
		lightest: lighten(0.5, '#005826'),
		dark: '#003D1B',
		darkest: '#00210F',
	},
	bg: '#fbfbfb', // Background color
	color: '#005826',
	black: {
		dark: 'rgba(0, 0, 0, 0.9)',
		default: 'rgba(0, 0, 0, 0.7)',
		light: 'rgba(0, 0, 0, 0.5)',
		ultraLight: 'rgba(0, 0, 0, 0.25)',
	},
	white: {
		darker: 'rgba(255,255,255, 0.5)',
		dark: 'rgba(255,255,255, 0.75)',
		default: 'rgba(255,255,255, 0.9)',
		light: 'rgba(255,255,255, 1)',
	},
}

const transitions = {
	normal: '0.5s',
	headroom: 'all 0.25s ease-in-out',
}

const fontSize = {
	small: '0.9rem',
	medium: '1rem',
	large: '1.25rem',
	xlarge: '1.5rem',
	xxlarge: '2.5rem',
}

const fontFamily = {
	heading: `'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
	body: `'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
}

const breakpoints = {
	phone: '600px',
	tablet: '800px',
}

const theme = {
	colors,
	transitions,
	fontSize,
	breakpoints,
	fontFamily,
	maxWidth: '1200px',
	baseFontSize: '18px',
}

export default theme
