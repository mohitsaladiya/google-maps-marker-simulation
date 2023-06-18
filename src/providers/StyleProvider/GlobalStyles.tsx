/* eslint-disable max-lines */
import { createGlobalStyle, css } from 'styled-components';

const baseCSS = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
`;

const resetCSS = css`
	html,
	body,
	div,
	span,
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
	code,
	del,
	dfn,
	em,
	img,
	q,
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
	dialog,
	figure,
	footer,
	header,
	hgroup,
	nav,
	section,
	input,
	select,
	textarea {
		margin: 0;
		padding: 0;
		border: 0;
		font-weight: inherit;
		font-style: inherit;
		font-size: 100%;
		font-family: inherit;
		vertical-align: baseline;
	}

	ul li {
		list-style-type: none;
	}

	article,
	aside,
	dialog,
	figure,
	footer,
	header,
	hgroup,
	nav,
	section {
		display: block;
	}

	body {
		line-height: 1.5;
	}

	table {
		border-collapse: separate;
		border-spacing: 0;
	}

	caption,
	th,
	td {
		text-align: left;
		font-weight: normal;
	}

	table,
	td,
	th {
		vertical-align: middle;
	}

	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: '';
	}

	blockquote,
	q {
		quotes: '' '';
	}

	a img {
		border: none;
	}

	@page {
		size: 8.5in 11in;
		margin: 10mm;
	}
	@page :footer {
		display: none;
	}

	@page :header {
		display: none;
	}
`;

const typographyCSS = css``;

export const GlobalStyles = createGlobalStyle`
  ${baseCSS}
  ${resetCSS}
  ${typographyCSS}
`;
