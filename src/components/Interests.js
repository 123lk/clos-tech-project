import React, { Component } from 'react';

class Interests extends Component {
  render () {
    return (
      <div className='interests'>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Count: {this.props.count}</li>
        </ul>
      </div>
    );
  }
}

export default Interests;