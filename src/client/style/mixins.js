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

const browseItem = `
  ${flex};

  width: 100%;
  height: ${vars.itemHeight}rem;
  border-radius: 0.3rem;
`

const wrapMixins = {
  browseItem
}

export default {
  ...flexBox,
  ...wrapMixins
}
