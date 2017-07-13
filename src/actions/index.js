import * as types from './types';
import data from '../people.json';

function arrangeById (arr) {
  return arr.reduce(function (acc, item) {
    acc[item.id] = item;
    return acc;
  }, {});
}

const byId = arrangeById(data.people);

export function fetchPeople () {
  return function (dispatch) {
    return dispatch({
      type: types.FETCH_PEOPLE,
      people: data.people
    });
  };
}

export function fetchPersonData (id) {
  return function (dispatch) {
    return dispatch({
      type: types.FETCH_PERSON_DATA,
      personData: byId[id]
    });
  };
}


let newId = data.people[data.people.length - 1].id;

export function addPerson (name) {
  return function (dispatch) {
    newId++;
    return dispatch({
      type: types.ADD_PERSON,
      person: [{id: newId, personal: {first_name: name, last_name: 'Test', avatar: 'avatars/avatar-default.png'}}]
    });
  };
}