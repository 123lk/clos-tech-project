import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Personal extends Component {
  render () {
    if (!this.props.personal) {
      return <h3>Loading...</h3>;
    }
    return (
      <div className='Personal'>
      <h1>User details for {this.props.personal.first_name} {this.props.personal.last_name}</h1>
      <h2>Personal</h2>
      <h4>Age: {this.props.personal.age}</h4>
      <h4>City: {this.props.personal.city}</h4>
      <h4>Id: {this.props.id}</h4>
      </div>
    );
  }
}

Personal.propTypes = {
  personal: PropTypes.object,
  id: PropTypes.number
};

export default Personal;