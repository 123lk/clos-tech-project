import React, {Component} from 'react';

class Devices extends Component {
  render () {
    return (
      <div className='devices'>
        <ul>
          <li><strong>Name:  </strong>{this.props.name}</li>
          <li><strong>Vendor:  </strong>{this.props.vendor}</li>
          <li><strong>Count:  </strong>{this.props.count}</li>
        </ul>
      </div>
    );
  }
}

export default Devices;
