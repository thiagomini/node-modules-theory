import { concatenateKeys } from '../src/concatenate-keys';

describe('concatenateKeys', () => {
  test('should concatenate the keys of an object into a string', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = concatenateKeys(obj);
    expect(result).toBe('a, b, c');
  });
});
