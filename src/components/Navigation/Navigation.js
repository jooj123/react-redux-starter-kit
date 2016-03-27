import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className={style.root}>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/async'}>Async Example</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
