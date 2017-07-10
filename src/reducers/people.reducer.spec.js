import {expect} from 'chai';
import deepFreeze from 'deep-freeze';
import * as types from '../actions/types';
import people, {initialState} from './people.reducer';

describe('reducers: people', () => {
  it('is a function', () => {
    expect(people).to.be.a('function');
  });
  it('returns the previous state for unhandled actions', () => {
    const initialState = {
      test: 123
    };
    const action = {type: 'test'};
    expect(people(initialState, action)).to.equal(initialState);
  });
  it('returns the intitial state if no previous state is passed', () => {
    const action = {type: 'another test'};
    expect(people(undefined, action)).to.equal(initialState);
  });
  describe('action: fetchPeople', () => {
    it('handles action type FETCH_PEOPLE', () => {
      const initialState = deepFreeze({
        people: []
      });
      const action = {
        type: types.FETCH_PEOPLE,
        people: [
          {id: 1, name: 'Test 1'},
          {id: 2, name: 'Test 2'}
        ]
      };
      const expectedState = {
        people: [
          {id: 1, name: 'Test 1'},
          {id: 2, name: 'Test 2'}
        ]
      };
      expect(people(initialState, action)).to.eql(expectedState);
    });
  });
  describe('action: fetchPersonData', () => {
    it('handles action type FETCH_PERSON_DATA', () => {
      const initialState = deepFreeze({
        personData: {}
      });
      const action = {
        type: types.FETCH_PERSON_DATA,
        personData: { id: 1, personal: { first_name: 'Jo', last_name: 'Bloggs' } }
      };
      const expectedState = {
        personData: { id: 1, personal: { first_name: 'Jo', last_name: 'Bloggs' } }
      };
      expect(people(initialState, action)).to.eql(expectedState);
    });
  });
  describe('action: addPerson', () => {
    it('handles action type ADD_PERSON', () => {
      const initialState = deepFreeze({
        people: [
          {
            id: 4,
            personal: { first_name: 'Laura', last_name: 'Test', avatar: 'avatars/woman1.png' }
          }
        ]
      });
      const action = {
        type: types.ADD_PERSON,
        person: [
          {
            id: 5,
            personal: { first_name: 'Sarah', last_name: 'Test', avatar: 'avatars/avatar-default.png' }
          }
        ]
      };
      const expectedState = {
        people: [
          {
            id: 4,
            personal: { first_name: 'Laura', last_name: 'Test', avatar: 'avatars/woman1.png' }
          },
          {
            id: 5,
            personal: { first_name: 'Sarah', last_name: 'Test', avatar: 'avatars/avatar-default.png' }
          }
        ]
      };
      expect(people(initialState, action)).to.eql(expectedState);
    });
  });
}); 
