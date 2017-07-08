import React, { Component } from 'react';
import '../css/App.css';

class Header extends Component {
  render () {
    return (
      <header id='header'>
        <a href="http://localhost:3000/"><img id="header-logo"  src={require('../images/headerLogo.png')} width="40%" alt="" /></a>
      </header>
    );
  }
}

export default Header;