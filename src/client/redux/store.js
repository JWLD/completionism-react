import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

import browseReducer from 'Browse/reducer'
import dataReducer from 'redux/reducer'
import importReducer from 'Import/reducer'

const rootReducer = combineReducers({
  browse: browseReducer,
  data: dataReducer,
  form: formReducer,
  import: importReducer
})

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
