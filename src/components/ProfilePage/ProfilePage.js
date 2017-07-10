import React, {Component} from 'react';
import Header from '../Header';
import UserDetails from './UserDetails';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../../actions/index.js';


class ProfilePage extends Component {
  componentDidMount () {
    this.props.fetchPersonData(this.props.match.params.id);
  }
  render () {
    if (!this.props.personData) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
          <Header />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <UserDetails
            data={this.props.personData}
            id={this.props.match.params.id}
            name={this.props.match.params.name}
             />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    personData: state.people.personData
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPersonData: (id) => {
      dispatch(actions.fetchPersonData(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);