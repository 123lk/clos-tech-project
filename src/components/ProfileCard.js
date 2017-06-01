import React, { Component } from 'react';
import Devices from './Devices';
import people from '../people.json';
import * as helpers from '../helpers/helpers.js';
import '../css/ProfileCard.css';

const findById = helpers.findById;
const data = findById(people.people);

class ProfileCard extends Component {
  render () {
  let devices = data[this.props.id].devices;
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
            <div className="card-block">
            Social
            </div>
            <div className="card-block">
            Interests
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


    // function getById (id) {
    // return data.people.map(function (person)=>{
    //   return person.id === id
    // }) 
  
    // } 