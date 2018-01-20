import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from 'redux/store';
import Landing from 'scenes/Landing/Landing';
import Browse from 'scenes/Browse/Browse';
import Import from 'scenes/Import/Import';

const App = () => (
	<BrowserRouter>
		<Provider store={store}>
			<div className="app">
				<Route exact path="/" component={Landing} />
				<Route path="/browse/:category/:content" component={Browse} />
				<Route path="/import" component={Import} />
			</div>
		</Provider>
	</BrowserRouter>
);

render(<App />, document.getElementById('root'));
