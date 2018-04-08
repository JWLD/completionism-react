import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import store from 'redux/store'
import history from 'services/history'
import initialiseApp from 'services/app_initialiser'

import Landing from 'Landing'
import Browse from 'Browse'
import Import from 'Import'

initialiseApp()

const App = () => (
  <Router history={history}>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/browse/:category/:content" component={Browse} />
        <Route path="/import" component={Import} />
      </Switch>
    </Provider>
  </Router>
)

render(<App />, document.getElementById('root'))
