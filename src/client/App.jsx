import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from 'redux/store';
import Landing from 'components/Landing/Landing';
import Category from 'containers/Category/Category';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/:category" component={Category} />
      </Switch>
    </Provider>
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
