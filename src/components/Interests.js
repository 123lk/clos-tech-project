import React, {Component} from 'react';
import '../css/Interests.css';

class Interests extends Component {
  render () {
    return (
      <div className='interests'>
        <ul>
          <li><strong>Interest: </strong>{this.props.name}</li>
          <li><strong>Count:  </strong>{this.props.count}</li>
        </ul>
      </div>
    );
  }
}

export default Interests;
