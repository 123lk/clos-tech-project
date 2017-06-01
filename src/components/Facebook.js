import React, { Component } from 'react';

class Facebook extends Component {
  render () {
    let date = new Date().getFullYear();
    return (
      <div className='facebook'>
        <ul>
          <li><strong>Company:  </strong> {this.props.type}</li>
          <li><strong>ID:  </strong> {this.props.id}</li>
          <li><strong>URL:  </strong> <a href={this.props.url}>{this.props.url}</a></li>
          <li><strong>Joined:  </strong> {date - this.props.account_age}</li>
          <li><strong>Friends:  </strong> {this.props.friends}</li>          
        </ul>
      </div>
    );
  }
}

export default Facebook;