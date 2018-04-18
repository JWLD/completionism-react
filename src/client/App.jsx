import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import store from 'redux/store'
import initialiseApp from 'services/app_initialiser'

import Landing from 'Landing'
import Browse from 'Browse'
import Import from 'Import'

initialiseApp()

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/browse/:category/:content" component={Browse} />
      <Route path="/import" component={Import} />
    </Switch>
  </Provider>
)

export default hot(module)(App)
