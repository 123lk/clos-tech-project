import React, {Component} from 'react';
import '../../css/Interests.css';

class Interests extends Component {
  render () {
    if (!this.props.interests) {
      return <h3>Loading...</h3>;
    }
    return (
      <div className='interests'>
      <h2>Interests</h2>
      {this.props.interests.map((interest, i) => {
        return (
      <h4 key={i}>Name: {interest.name}</h4>
        );
      })}
      </div>
    );
  }
}

export default Interests;
