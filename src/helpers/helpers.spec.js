import {expect} from 'chai';
import * as helpers from './helpers';

const findById = helpers.findById;

describe('findById', () => {
  it('is a function', () => {
    expect(findById).to.be.a('function');
  });
  it('returns an object', () => {
    expect(findById([{id: 0, name: 'Laura'}])).to.be.an('object');
  });
  it('returns an object with the id as a key', () => {
    let actual = findById([{id: 0, name: 'Laura'}, {id:1, name: 'Jared'}]);
    let expected = {0: {id: 0, name: 'Laura'}, 1: {id:1, name: 'Jared'}};
    expect(actual).to.eql(expected);
  });
});