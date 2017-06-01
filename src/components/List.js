import React, { Component } from 'react';
import ProfileCard from './ProfileCard';
import data from '../people.json';
import '../css/List.css';

const people = data.people;

class List extends Component {
  render () {
    return (
      <div className='list'>
        {people.map((person, i) => {
          return (
            <ProfileCard
              key={i}
              id={person.id}
              firstName={person.personal.first_name}
              lastName={person.personal.last_name}
              age={person.personal.age}
              job={person.personal.job_title}
              avatar={person.personal.avatar}
              company={person.personal.job_company}
              city={person.personal.city}
              country={person.personal.country}
              devices={person.devices}
              devicesName={person.devices.name}
              devicesVendor={person.devices.vendor}
              devicesCount={person.devices.count}
            />
          );
        })}
      </div>
    );
  }
}

export default List;


