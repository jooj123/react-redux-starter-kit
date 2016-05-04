import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NotFound from './components/NotFound/NotFound';
import App from './components/App/App';
import Home from './components/Home/Home';
import AsyncExample from './components/AsyncExample/AsyncExample';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// see: https://github.com/facebook/react/issues/436
injectTapEventPlugin();

const store = configureStore();

// for material ui
const ThemedApp = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/async" component={AsyncExample} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

render((
  <ThemedApp />
), document.getElementById('main'));
