import { UPDATE_REALM_LIST } from './actions';

const initialState = {
	realms: {}
};

const importReducer = (state = initialState, action) => {
	switch (action.type) {
	case UPDATE_REALM_LIST:
		return { ...state, [action.region]: action.payload };
	default:
		return state;
	}
};

export default importReducer;
