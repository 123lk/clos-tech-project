import * as types from '../actions/types';

export const initialState = {
  people: [],
  person: [],
  personData: {}
};

export default function (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_PEOPLE:
      return Object.assign({}, prevState, {
        people: action.people
      });
    case types.FETCH_PERSON_DATA:
      return Object.assign({}, prevState, {
        personData: action.personData
      });
    case types.ADD_PERSON:
      return Object.assign({}, prevState, {
        people: prevState.people.concat(action.person)
      });
    default:
      return prevState;
  }
}