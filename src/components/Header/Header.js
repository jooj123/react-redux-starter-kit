import React, { Component } from 'react';
import style from './Header.css';

class Header extends Component {
  render() {
    return (
      <div className={style.root}>
        <h1>React Redux Starter Kit</h1>
      </div>
    );
  }
}

export default Header;
