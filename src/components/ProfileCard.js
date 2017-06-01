import React, { Component } from 'react';
import '../css/ProfileCard.css';

class ProfileCard extends Component {
  render () {
    return (
      <div className='profile-card'>
        <img src={require('../images/' + this.props.avatar)} id="avatar" alt="" />
        <span>{this.props.firstName} {this.props.lastName}</span>
        <p>
          <button className="btn btn-primary" type="button" data-toggle="collapse" data-target={'#' + this.props.id} aria-expanded="false" aria-controls="details">
            View details
        </button>
        </p>
        <div className="collapse" id={this.props.id}>
          <div className="card card-block">
            More details.
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;