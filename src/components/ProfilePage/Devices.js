import React, { Component } from 'react';

class Devices extends Component {
  render () {
    if (!this.props.devices) {
      return <h3>Loading...</h3>;
    }
    return (
      <div className='devices'>
        <h2>Devices</h2>
        {this.props.devices.map((device, i) => {
          return (
            <h4 key={i}>Device name: {device.name}</h4>
          );
        })}
      </div>
    );
  }
}

export default Devices;
