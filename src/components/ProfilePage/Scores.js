import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Scores extends Component {
  render () {
    if (!this.props.scores) {
      return <h3>Loading...</h3>;
    }
    return (
      <div className='Scores'>
        <h2>Scores</h2>
        <h4>Commenter: {this.props.scores.commenter}</h4>
        <h4>Footprint Size: {this.props.scores.footprint_size}</h4>
      </div>
    );
  }
}

Scores.propTypes = {
  scores: PropTypes.object
};

export default Scores;