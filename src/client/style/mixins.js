import vars from 'style/variables'

const flex = `
	display: flex;
	justify-content: center;
	align-items: center;
`

const flexLeft = `
  display: flex;
  justify-content: flex-start;
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

const flexVerticalTop = `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const flexBox = {
  flex,
  flexLeft,
  flexRight,
  flexVertical,
  flexVerticalTop
}

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
  browseItem
}

export default {
  ...flexBox,
  ...wrapMixins
}
