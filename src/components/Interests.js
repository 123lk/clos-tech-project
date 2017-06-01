import React, { Component } from 'react';
import '../css/Interests.css';

class Interests extends Component {
  render () {
    return (
      <div className='interests'>
        <h5 id='interest-item'><strong>{this.props.name}</strong></h5>
        <div className="progress">
          <div className="progress-bar" style={{width: this.props.count + '%'}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{this.props.count}%</div>
        </div>
      </div>
    );
  }
}

export default Interests;
