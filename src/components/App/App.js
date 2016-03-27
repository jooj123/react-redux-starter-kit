import React, { Component, PropTypes } from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Helmet from 'react-helmet';
import style from './App.css';

class App extends Component {

  static propTypes = {
    children: PropTypes.element,
  };

  render() {
    return (
      <div className={style.root}>
        <Helmet title="React Redux Starter Kit" />
        <Header />
        <Navigation />
        <div className={style.container}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
