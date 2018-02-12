import vars from './variables'

const flex = `
	display: flex;
	justify-content: center;
	align-items: center;
`

const page = `
	flex-direction: column;
	min-width: 100vw;
	margin-top: ${vars.sizing.navBarHeight}rem;
	padding: ${vars.sizing.pagePadding}rem;
`

export default {
  flex,
  page
}
