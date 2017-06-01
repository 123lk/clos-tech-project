import React, {Component} from 'react';

class Twitter extends Component {
  render () {
    let date = new Date().getFullYear();
    return (
      <div className='twitter'>
        <ul>
          <li><strong>Company:  </strong>{this.props.type}</li>
          <li><strong>Username:  </strong>{this.props.username}</li>
          <li><strong>URL:  </strong><a href={this.props.url}>{this.props.url}</a></li>
          <li><strong>Joined:  </strong>{date - this.props.account_age}</li>
          <li><strong>Following:  </strong>{this.props.following}</li>
          <li><strong>Followers:  </strong>{this.props.followers}</li>
        </ul>
      </div>
    );
  }
}

export default Twitter;