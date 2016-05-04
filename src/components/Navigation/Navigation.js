import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import style from './Navigation.css';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import Menu from 'material-ui/lib/menus/menu';
import FontIcon from 'material-ui/lib/font-icon';
import PersonAdd from 'material-ui/lib/svg-icons/social/person-add';


class Navigation extends Component {

  render() {
    return (
      <LeftNav className={style.root}>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem rightIcon={<PersonAdd />}>Menu Item 2</MenuItem>
      </LeftNav>
    );
  }
}

export default Navigation;
