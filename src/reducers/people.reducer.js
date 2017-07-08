import * as types from '../actions/types';

export const initialState = {
  loading: false,
  error: null,
  data: {}
};

export default function (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_PEOPLE_REQUEST:
      return Object.assign({}, prevState, {
        loading: true,
        error: null
      });
    case types.FETCH_PEOPLE_ERROR:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.error
      });
    case types.FETCH_PEOPLE_SUCCESS:
      return Object.assign({}, prevState, {
        loading: false,
        data: action.people
      });
    default:
      return prevState;
  }
}