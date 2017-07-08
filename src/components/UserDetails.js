import React, {Component} from 'react';

class UserDetails extends Component {
  render () {
    return (
      <div className='UserDetails'>
        <h2>I am the user details for {this.props.name}</h2>
        <h3>My id is {this.props.id}</h3>
      </div>
    );
  }
}

export default UserDetails;