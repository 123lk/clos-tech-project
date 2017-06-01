import React, { Component } from 'react';

class Twitter extends Component {
  render () {
    let date = new Date().getFullYear();
    return (
      <div className='twitter'>
        <ul>
          <li>Company: {this.props.type}</li>
          <li>Username: {this.props.username}</li>
          <li>URL: <a href={this.props.url}>{this.props.url}</a></li>
          <li>Joined: {date - this.props.account_age}</li>
          <li>Following: {this.props.following}</li>
          <li>Followers: {this.props.followers}</li>
        </ul>
      </div>
    );
  }
}

export default Twitter;