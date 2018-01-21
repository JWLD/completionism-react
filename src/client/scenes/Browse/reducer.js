import { ADD_CATEGORY_DATA } from './actions';

const initialState = {};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
	case ADD_CATEGORY_DATA:
		return { ...state, [action.category]: action.payload };
	default:
		return state;
	}
};
