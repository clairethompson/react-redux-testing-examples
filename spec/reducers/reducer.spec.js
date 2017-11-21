import {expect} from '../specHelper';
import reducer from '../../src/reducers/reducer';

describe('reducer', () => {
  describe('INCREMENT_COUNTER', () => {
    it('increments the counter', () => {
      const initialState = {count: 3};
      const action = {type: 'INCREMENT_COUNTER'};
      const result = reducer(initialState, action);

      expect(result.count).to.eq(4);
    });
  });
});
