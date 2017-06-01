import React, { Component } from 'react';

class Interests extends Component {
  render () {
    return (
      <div className='interests'>
        <h5><strong>{this.props.name}</strong></h5>
        <div className="progress">
          <div className="progress-bar" style={{ width: this.props.count + '%' }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    );
  }
}

export default Interests;
