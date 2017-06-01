import React, { Component } from 'react';

class Devices extends Component {
  render () {
    return (
      <div className='devices'>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Vendor: {this.props.vendor}</li>
          <li>Count: {this.props.count}</li>
        </ul>
      </div>
    );
  }
}

export default Devices;
