import { keysOf } from 'buildable-lib';

export function concatenateKeys<T extends object>(obj: T): string {
  return keysOf(obj).join(', ');
}
