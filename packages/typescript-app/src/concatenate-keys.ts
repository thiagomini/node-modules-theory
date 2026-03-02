import { keysOf } from 'buildable-lib';

export function concatenateKeys<T extends object>(obj: T): string {
  const keys = keysOf(obj);
  return keys.join(', ');
}
