import * as types from './types';
import data from '../people.json';

export function fetchPeople () {
  return function (dispatch) {
    return dispatch({
      type: types.FETCH_PEOPLE,
      people: data.people
    });
  };
}