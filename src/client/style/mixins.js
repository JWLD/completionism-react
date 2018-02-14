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
  ${flexVertical}
	min-width: 100vw;
	margin-top: ${vars.sizing.navBarHeight}rem;
	padding: ${vars.sizing.pagePadding}rem;
`

const itemListWrap = `
  ${flex}
  width: 75rem;
  padding: ${vars.sizing.itemListPadding}rem;
  border-radius: 0.4rem;
  background-color: ${vars.colours.mainGrey};

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`

const itemListItem = `
  width: 100%;
  height: ${vars.sizing.itemHeight}rem;
  border-radius: 0.3rem;
`

const wrapMixins = {
  itemListItem,
  itemListWrap,
  page
}

export default {
  ...flexMixins,
  ...wrapMixins
}
