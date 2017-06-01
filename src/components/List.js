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
              id={i}
              firstName={person.personal.first_name}
              lastName={person.personal.last_name}
              age={person.personal.age}
              job={person.personal.job_title}
              avatar={person.personal.avatar}
            />
          );
        })}
      </div>
    );
  }
}

export default List;


