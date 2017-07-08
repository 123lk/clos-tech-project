import React, {Component} from 'react';
import Header from './Header';
import List from './List';
import NewUserForm from './NewUserForm';
import '../css/App.css';

class App extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
          <Header />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <List />
            <NewUserForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
