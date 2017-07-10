import React, {Component} from 'react';
import ProfileCard from './ProfileCard';
import {connect} from 'react-redux';

class List extends Component {
  render () {
    return (
      <div className='list'>
        {this.props.data.people.map((person, i) => {
          return (
            <ProfileCard
              key={i}
              id={person.id}
              firstName={person.personal.first_name}
              lastName={person.personal.last_name}
              avatar={person.personal.avatar}
            />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    data: state.people
  };
}

export default connect(mapStateToProps)(List);


