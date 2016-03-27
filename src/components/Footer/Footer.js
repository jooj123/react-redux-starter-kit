import React, { Component } from 'react';
import style from './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className={style.root}>
        &copy; My Company 2016
      </div>
    );
  }
}

export default Footer;
