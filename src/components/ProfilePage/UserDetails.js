import React, { Component } from 'react';
import Personal from './Personal';
import Devices from './Devices';
import Social from './Social';
import Interests from './Interests';
import Scores from './Scores';
import {connect} from 'react-redux';

class UserDetails extends Component {
  render () {
    return (
      <div className='UserDetails'>
        <h2>I am the user details for {this.props.name}</h2>
        <h3>My id is {this.props.data.id}</h3>
        <Personal
          personal={this.props.data.personal}
        />
        <Devices
          devices={this.props.data.devices}
        />
        <Social />
        <Interests />
        <Scores />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    data: state.people.personData
  };
}

export default connect(mapStateToProps)(UserDetails);