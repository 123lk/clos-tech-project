import React, { Component } from 'react';

class Social extends Component {
  render () {
    if (!this.props.social) {
      return <h3>Loading...</h3>;
    }
    return (
      <div className='Social'>
        <h2>Social</h2>
        <h4>Account type: {this.props.social[0].type}</h4>
      </div>
    );
  }
}

export default Social;