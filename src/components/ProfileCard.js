import React, { Component } from 'react';
import Devices from './Devices';
import Twitter from './Twitter';
import Facebook from './Facebook';
import Interests from './Interests';
import people from '../people.json';
import * as helpers from '../helpers/helpers.js';
import '../css/ProfileCard.css';

const findById = helpers.findById;
const data = findById(people.people);

class ProfileCard extends Component {
  render () {
  let devices = data[this.props.id].devices;
  let social = data[this.props.id].social;
  let interests = data[this.props.id].interests;
    return (
      <div className='profile-card'>
        <img src={require('../images/' + this.props.avatar)} id="avatar" alt="" />
        <span>{this.props.firstName} {this.props.lastName}</span>
        <p>
          <button className="btn btn-primary" id='details-button' type="button" data-toggle="collapse" data-target={'#' + this.props.id} aria-expanded="false" aria-controls="details">
            View details
        </button>
        </p>
        <div className="collapse" id={this.props.id}>
          <div className="card card-block">
            <div className="card-block" id="personal">
            <h4 className="card-header">Personal</h4>
            <ul>
            <li>Age: {this.props.age}</li>
            <li>Job: {this.props.job}</li>
            <li>Company: {this.props.company}</li>
            <li>City: {this.props.city}</li>
            <li>Country: {this.props.country}</li>
            </ul>
            </div>
            <div className="card-block" id="devices">
            <h4 className="card-header">Devices</h4>
            {devices.map((device, i) => {
              return <Devices 
              name={device.name}
              vendor={device.vendor}
              count={device.count}
              />;
            })}
            </div>
            <div className="card-block" id="social">
            <h4 className="card-header">Social</h4>
            {social.map((account, i) => {
              if (account.type === 'twitter') {
                return <Twitter 
                type={account.type}
                username={account.username}
                url={account.url}
                account_age={account.account_age}
                following={account.following}
                followers={account.followers}
                />;
              }
            if (account.type === 'facebook') {
              return <Facebook 
              type={account.type}
              id={account.id}
              url={account.url}
              account_age={account.account_age}
              friends={account.friends}
              />;
            }
            })}
            </div>
            <div className="card-block" id="interests">
            <h4 className="card-header">Interests</h4>
            {interests.map((interest, i) => {
              return <Interests
              name={interest.name}
              count={interest.count}
               />;
            })}
            </div>
            <div className="card-block">
            Scores
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
