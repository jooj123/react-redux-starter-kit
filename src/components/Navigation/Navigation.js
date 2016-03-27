import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import style from './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className={style.root}>
        <ul>
          <li><IndexLink to="/" activeClassName={style.active}>Home</IndexLink></li>
          <li><Link to="/async" activeClassName={style.active}>Async Example</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
