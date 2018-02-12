import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import store from 'store'

import Landing from 'scenes/Landing'
import Browse from 'scenes/Browse'
import Import from 'scenes/Import'

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/browse/:category/:content" component={Browse} />
        <Route path="/import" component={Import} />
      </Switch>
    </Provider>
  </BrowserRouter>
)

render(<App />, document.getElementById('root'))
