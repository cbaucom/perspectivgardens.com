import { css } from 'styled-components'
import theme from '../styles/theme'

const reset = css`
	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}
	html {
		text-rendering: optimizeLegibility;
		overflow-x: hidden;
		overflow-y: auto !important;
		box-sizing: border-box;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		-webkit-text-size-adjust: 100%;
	}
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}
	body {
		line-height: 1.2;
	}
	ol,
	ul {
		list-style: none;
	}
	blockquote,
	q {
		quotes: none;
	}
	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	body {
		margin: 0;
		color: ${theme.colors.black.dark};
		background-color: ${theme.colors.bg};
		font-family: ${theme.fontFamily.body};
	}

	a {
		background-color: transparent;
		color: ${theme.colors.primary.default};
		transition: ${theme.transitions.normal};
		text-decoration: none;
		&:hover,
		&:focus {
			color: ${theme.colors.primary.dark};
		}
	}
	a:not([href]):not([tabindex]) {
		color: inherit;
		text-decoration: none;
		&:hover,
		&:focus {
			color: inherit;
			text-decoration: none;
		}
		&:focus {
			outline: 0;
		}
	}
	img {
		max-width: 100%;
		margin-bottom: 0;
	}
	h1 {
		color: inherit;
		font-family: ${theme.fontFamily.heading};
		font-weight: bold;
		text-rendering: optimizeLegibility;
		font-size: 2.25rem;
		line-height: 1.1;
	}
	h2 {
		color: inherit;
		font-family: ${theme.fontFamily.heading};
		font-weight: bold;
		text-rendering: optimizeLegibility;
		font-size: 1.62671rem;
		line-height: 1.1;
	}
	h3 {
		margin-bottom: 1rem;
		color: inherit;
		font-family: ${theme.fontFamily.heading};
		font-weight: bold;
		text-rendering: optimizeLegibility;
		font-size: 1.38316rem;
		line-height: 1.1;
	}
	h4 {
		margin-bottom: 1rem;
		color: inherit;
		font-family: ${theme.fontFamily.heading};
		font-weight: bold;
		text-rendering: optimizeLegibility;
		font-size: 1rem;
		line-height: 1.1;
	}
	h5 {
		margin-bottom: 1rem;
		color: inherit;
		font-family: ${theme.fontFamily.heading};
		font-weight: bold;
		text-rendering: optimizeLegibility;
		font-size: 0.85028rem;
		line-height: 1.1;
	}
	h6 {
		margin-bottom: 1rem;
		color: inherit;
		font-family: ${theme.fontFamily.heading};
		font-weight: bold;
		text-rendering: optimizeLegibility;
		font-size: 0.78405rem;
		line-height: 1.1;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: ${theme.colors.primary.dark};
	}
	hgroup {
		margin-bottom: 1.45rem;
	}
	ul {
		margin-bottom: 1.45rem;
		list-style-position: outside;
		list-style-image: none;
	}
	ol {
		margin-bottom: 1.45rem;
		list-style-position: outside;
		list-style-image: none;
	}
	dl {
		margin-bottom: 1.45rem;
	}
	dd {
		margin-bottom: 1.45rem;
	}
	p {
		margin-bottom: 1.45rem;
	}
	figure {
		margin-bottom: 1.45rem;
	}
	pre {
		margin-left: 0;
		margin-right: 0;
		margin-top: 0;
		margin-bottom: 1.45rem;
		font-size: 0.85rem;
		line-height: 1.42;
		background: hsla(0, 0%, 0%, 0.04);
		border-radius: 3px;
		overflow: auto;
		word-wrap: normal;
		padding: 1.45rem;
	}
	table {
		margin-bottom: 1.45rem;
		font-size: 1rem;
		line-height: 1.45rem;
		border-collapse: collapse;
		width: 100%;
	}
	fieldset {
		margin-bottom: 1.45rem;
	}
	blockquote {
		margin-left: 1.45rem;
		margin-right: 1.45rem;
		margin-top: 0;
		padding-bottom: 0;
		padding-left: 0;
		padding-right: 0;
		padding-top: 0;
		margin-bottom: 1.45rem;
	}
	form {
		margin-bottom: 1.45rem;
	}
	noscript {
		margin-bottom: 1.45rem;
	}
	iframe {
		margin-bottom: 1.45rem;
	}
	hr {
		margin-bottom: calc(1.45rem - 1px);
		background: hsla(0, 0%, 0%, 0.2);
		border: none;
		height: 1px;
	}
	address {
		margin-bottom: 1.45rem;
	}
	b {
		font-weight: bold;
	}
	strong {
		font-weight: bold;
	}
	dt {
		font-weight: bold;
	}
	th {
		font-weight: bold;
	}
	li {
		margin-bottom: calc(1.45rem / 2);
	}
	ol li {
		padding-left: 0;
	}
	ul li {
		padding-left: 0;
	}
	li > ol {
		margin-left: 1.45rem;
		margin-bottom: calc(1.45rem / 2);
		margin-top: calc(1.45rem / 2);
	}
	li > ul {
		margin-left: 1.45rem;
		margin-bottom: calc(1.45rem / 2);
		margin-top: calc(1.45rem / 2);
	}
	blockquote *:last-child {
		margin-bottom: 0;
	}
	li *:last-child {
		margin-bottom: 0;
	}
	p *:last-child {
		margin-bottom: 0;
	}
	li > p {
		margin-bottom: calc(1.45rem / 2);
	}
`

export default reset
