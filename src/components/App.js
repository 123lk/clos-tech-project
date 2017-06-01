import React, { Component } from 'react';
import List from './List';
import '../css/App.css';

class App extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <header id='header'>
              <img src={require('../images/headerLogo.png')} width="40%" alt=""/>
            </header>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <List />
          </div>
        </div>
          {/*<div className='footer'>
            <span id='footer-item'>www.hellosoda.com</span>
          </div>*/}
      </div>
    );
  }
}

export default App;
