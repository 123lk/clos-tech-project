import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Social extends Component {
  render() {
    if (!this.props.social) {
      return <h3>Loading...</h3>;
    }
    return (
      <div className='Social'>
        <h2>Social</h2>
        {this.props.social.map((account, i) => {
          return (
            <div key={i}>
              <h4>Account type: {account.type}</h4>
              <span>URL: </span><a href={account.url}>{account.url}</a>
            </div>
          );
        })}
      </div>
    );
  }
}

Social.propTypes = {
  social: PropTypes.array
};

export default Social;