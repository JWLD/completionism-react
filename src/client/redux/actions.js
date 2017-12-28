import Axios from 'axios'

// ACTION TYPES

export const ADD_CATEGORY_DATA = 'ADD_CATEGORY_DATA';

// ACTION CREATORS

export function addCategoryData(categoryData, category) {
	return {
		type: ADD_CATEGORY_DATA,
		payload: categoryData,
		category
	}
};

// THUNKS

export function fetchCategoryData(category) {
	return (dispatch) => {
		Axios.get(`/api/db-category?q=${category}`)
			.then((response) => {
				dispatch(addCategoryData(response.data, category));
			})
			.catch((err) => {
				return console.log(err.response.data || err);
			});
	};
};
