import React, { Component } from 'react';

class Scores extends Component {
  render() {
    if (!this.props.scores) {
      return <h3>Loading...</h3>;
    }
    return (
      <div className='Scores'>
        <h2>Scores</h2>
        <h4>Commenter: {this.props.scores.commenter}</h4>
      </div>
    );
  }
}

export default Scores;