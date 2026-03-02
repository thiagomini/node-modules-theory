import { keysOf } from 'buildable-lib';
import { log } from './log.ts';

const appName = 'Node App with TS';

log(`Hello from ${appName}!`);
log(`Keys of buildable-lib: ${keysOf({ a: 1, b: 2, c: 3 })}`);
