import React, {Component} from 'react';
import Header from '../Header';
import List from './List';
import NewUserForm from './NewUserForm';
import PropTypes from 'prop-types';
import * as actions from '../../actions/index.js';
import {connect} from 'react-redux';
import '../../css/App.css';

class App extends Component {
  componentDidMount () {
    this.props.fetchPeople();
  }
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

function mapDispatchToProps (dispatch) {
  return {
    fetchPeople: () => {
      dispatch(actions.fetchPeople());
    }
  };
}

App.propTypes = {
  fetchPeople: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(App);
