import vars from './variables'

const flex = `
	display: flex;
	justify-content: center;
	align-items: center;
`

const flexRight = `
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const flexVertical = `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const flexBox = {
  flex,
  flexRight,
  flexVertical
}

const pageWrap = `
  ${flexVertical};

	min-width: 100vw;
	margin-top: ${vars.navBarHeight}rem;
	padding: ${vars.pagePadding}rem;
`

const browseBlock = `
  ${flex};

  width: 100%;
  padding: ${vars.itemListPadding}rem;
  border-radius: 0.4rem;
  background-color: ${vars.mainGrey};

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`

const browseItem = `
  ${flex};

  width: 100%;
  height: ${vars.itemHeight}rem;
  border-radius: 0.3rem;
`

const wrapMixins = {
  browseBlock,
  browseItem,
  pageWrap
}

export default {
  ...flexBox,
  ...wrapMixins
}
