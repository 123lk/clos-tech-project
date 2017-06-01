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
              <h1>Hello Soda</h1>
            </header>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
