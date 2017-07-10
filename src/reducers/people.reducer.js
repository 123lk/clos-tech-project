import * as types from '../actions/types';

export const initialState = {
  people: []
};

export default function (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_PEOPLE:
      return Object.assign({}, prevState, {
        people: action.people
      });
    default:
      return prevState;
  }
}