import { concatenateKeys } from '#app/concatenate-keys.ts';
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('concatenateKeys', () => {
  it('should return a string with the keys of the object concatenated', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = concatenateKeys(obj);
    assert.strictEqual(result, 'a, b, c');
  });
});
