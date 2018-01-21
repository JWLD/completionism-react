import vars from './variables';

export const flex = `
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const page = `
	flex-direction: column;
	min-width: 100vw;
	margin-top: ${vars.sizing.navBarHeight}rem;
	padding: ${vars.sizing.pagePadding}rem;
`;

export default {
	flex,
	page
};
