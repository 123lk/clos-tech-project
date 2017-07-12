import React, { Component } from 'react';
import Personal from './Personal';
import Devices from './Devices';
import Social from './Social';
import Interests from './Interests';
import Scores from './Scores';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class UserDetails extends Component {
  render () {
    if (!this.props.data) {
      return <h3>Loading...</h3>;
    }
    return (
      <div className='UserDetails'>
        <Personal
          personal={this.props.data.personal}
        />
        <Devices
          devices={this.props.data.devices}
        />
        <Social 
          social={this.props.data.social}
        />
        <Interests 
          interests={this.props.data.interests}
        />
        <Scores 
        scores={this.props.data.scores}
        />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    data: state.people.personData
  };
}

UserDetails.propTypes = {
  data: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(UserDetails);