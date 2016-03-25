import React from 'react';
import { render } from 'react-dom';
import NotFound from './components/NotFound.js';
import App from './components/App.js';

import { Router, Route, browserHistory } from 'react-router';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById('main'));
