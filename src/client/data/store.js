import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { reducer as browseReducer } from 'scenes/Browse/data/reducer';

const appReducer = combineReducers({
	browse: browseReducer,
});

const store = createStore(
	appReducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
