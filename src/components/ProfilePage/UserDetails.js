import React, {Component} from 'react';
import Personal from './Personal';
import Devices from './Devices';
import Social from './Social';
import Interests from './Interests';
import Scores from './Scores';

class UserDetails extends Component {
  render () {
    return (
      <div className='UserDetails'>
        <h2>I am the user details for {this.props.name}</h2>
        <h3>My id is {this.props.id}</h3>
        <Personal />
        <Devices />
        <Social />
        <Interests />
        <Scores />
      </div>
    );
  }
}

export default UserDetails;