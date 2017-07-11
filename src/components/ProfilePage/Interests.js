import React, {Component} from 'react';
import '../../css/Interests.css';

class Interests extends Component {
  render () {
    if (!this.props.interests) {
      return <h3>Loading...</h3>;
    }
    return (
      <div className='interests'>
      <h4>Interests</h4>
      <h4>Name: {this.props.interests[0].name}</h4>
      </div>
    );
  }
}

export default Interests;
