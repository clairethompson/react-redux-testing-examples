import {expect} from '../specHelper';
import incrementCounter from '../../src/actions/incrementCounter';

describe('incrementCounter', () => {
  it('returns the action to increment the counter', () => {
    const result = incrementCounter();
    expect(result).to.eql({type: 'INCREMENT_COUNTER'});
  });
});
