export const dataSelector = (state, props) => {
	console.log(props.match.params);

	return state[props.match.params.category];
};
