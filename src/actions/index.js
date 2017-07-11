import * as types from './types';
import data from '../people.json';
// if (process.env.NODE_ENV === 'development') {
//   //create variable to store path to relevant file
// }

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


let newId = data.people[data.people.length - 1].id + 1;

export function addPerson (name) {
  return function (dispatch) {
    return dispatch({
      type: types.ADD_PERSON,
      person: [{id: newId, personal: {first_name: name, last_name: 'Test', avatar: 'avatars/avatar-default.png'}}]
    });
  };
}