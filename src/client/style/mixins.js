const flex = `
	display: flex;
	justify-content: center;
	align-items: center;
`

const flexTop = `
	${flex};
	align-items: flex-start;
`

const flexRight = `
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const flexLeft = `
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const flexVertical = `
  display: flex;
	flex-direction: column;
  justify-content: center;
  align-items: center;
`

const flexVerticalTop = `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const flexVerticalLeft = `
  display: flex;
	flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export default {
  flex,
  flexTop,
  flexRight,
  flexLeft,
  flexVertical,
  flexVerticalTop,
  flexVerticalLeft
}
