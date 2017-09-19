import { reducer } from './names.reducer';
import * as si from 'seamless-immutable';

describe('names reducer', () => {
  it('should count names', () => {

    const names = [
      'Erich', 'Richard',
      'Ralph', 'John',
      'Richard'];

    const saveAcc = si.from({});

    const expected = names.reduce(reducer, saveAcc);

    expect(expected).toEqual({
      'Erich': 1,
      'Richard': 2,
      'Ralph': 1,
      'John': 1 }
    );
  });
});
