import React, { Component } from 'react';

class Facebook extends Component {
  render () {
    let date = new Date().getFullYear();
    return (
      <div className='facebook'>
        <ul>
          <li>Company: {this.props.type}</li>
          <li>ID: {this.props.id}</li>
          <li>URL: <a href={this.props.url}>{this.props.url}</a></li>
          <li>Joined: {this.props.account_age}</li>
          <li>Friends: {this.props.friends}</li>          
        </ul>
      </div>
    );
  }
}

export default Facebook;