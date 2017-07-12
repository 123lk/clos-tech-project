import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Devices.propTypes = {
  devices: PropTypes.array
};

export default Devices;
