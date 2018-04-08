import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

import appReducer from 'redux/reducer'
import browseReducer from 'Browse/reducer'
import importReducer from 'Import/reducer'

const rootReducer = combineReducers({
  app: appReducer,
  browse: browseReducer,
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
