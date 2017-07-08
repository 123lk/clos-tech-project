import axios from 'axios';
import * as types from './types';

const ROOT = '../people.json';

export function fetchPeople () {
  return function (dispatch) {
    dispatch({ type: types.FETCH_PEOPLE_REQUEST });
    return axios.get(`${ROOT}/home`)
      .then(function (response) {
        dispatch({
          type: types.FETCH_PEOPLE_SUCCESS,
          data: response.people,
        });
      })
      .catch(function (error) {
        dispatch({
          type: types.FETCH_PEOPLE_ERROR,
          error
        });
      });
  };
}