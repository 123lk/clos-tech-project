import React, {Component} from 'react';

class Devices extends Component {
  render () {
    if (!this.props.devices) {
      return <h3>Loading...</h3>;
    }
    return (
      <div className='devices'>
      <h4>Devices</h4>
      <h4>Device name: {this.props.devices[0].name}</h4>
      </div>
    );
  }
}

export default Devices;
