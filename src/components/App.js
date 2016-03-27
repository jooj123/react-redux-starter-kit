import React, { Component, PropTypes } from 'react';
import Navigation from './Navigation';
import Helmet from 'react-helmet';

class App extends Component {

  static propTypes = {
    children: PropTypes.element,
  };

  render() {
    return (
      <div>
        <Helmet title="React Redux Starter Kit" />
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default App;
