import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import { reducer as browseReducer } from 'scenes/Browse/reducer';
import importReducer from 'scenes/Import/reducer';

const rootReducer = combineReducers({
	browse: browseReducer,
	form: formReducer,
	import: importReducer
});

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
