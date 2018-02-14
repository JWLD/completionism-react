import vars from './variables'

const flex = `
	display: flex;
	justify-content: center;
	align-items: center;
`

const flexRight = `
  ${flex}
  justify-content: flex-end;
`

const flexVertical = `
  ${flex}
  flex-direction: column;
`

const flexMixins = {
  flex,
  flexRight,
  flexVertical
}

const page = `
  ${flex}
	flex-direction: column;
	min-width: 100vw;
	margin-top: ${vars.sizing.navBarHeight}rem;
	padding: ${vars.sizing.pagePadding}rem;
`

const wrapMixins = {
  page
}

export default {
  ...flexMixins,
  ...wrapMixins
}
