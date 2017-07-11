import React, {Component} from 'react';

class Personal extends Component {
  render () {
    if (!this.props.personal) {
      return <h3>Loading...</h3>;
    }
    return (
      <div className='Personal'>
      <h2>User details for {this.props.personal.first_name} {this.props.personal.last_name}</h2>
      <h4>Personal</h4>
      <h4>Age: {this.props.personal.age}</h4>
      <h4>City: {this.props.personal.city}</h4>
      </div>
    );
  }
}

export default Personal;