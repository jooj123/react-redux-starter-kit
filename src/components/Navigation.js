import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/async'}>Async Example</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
