import { navBarHeight, pagePadding } from './variables';

export const flex = `
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const page = `
	flex-direction: column;
	min-height: 100vh;
	margin-top: ${navBarHeight};
	padding: ${pagePadding};
`;

export default {
	flex,
	page
};
