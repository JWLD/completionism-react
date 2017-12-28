import { ADD_CATEGORY_DATA } from 'redux/actions';

const initialState = {
	categories: {}
};

const addCategoryData = (state, action) => {
	return Object.assign({}, state, {
		[action.category]: action.payload
	});
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
		case ADD_CATEGORY_DATA:
			return addCategoryData(state, action);
    default:
      return state;
  }
};

export default rootReducer;
