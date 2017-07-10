import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/ProfileCard.css';

class ProfileCard extends Component {
  render () {
    return (
      <div className='profile-card' id='profile'>
        <span><img src={require('../../images/' + this.props.avatar)} id="avatar" alt="" /></span>
        <span>
          <Link to={`${this.props.id}/${this.props.firstName}-${this.props.lastName}`} id='list-name'>{this.props.firstName} {this.props.lastName}</Link>
        </span>
      </div>
    );
  }
}

export default ProfileCard;
