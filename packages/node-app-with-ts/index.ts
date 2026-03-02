import { keysOf } from 'buildable-lib';

const appName = 'Node App with TS';

console.log(`Hello from ${appName}!`);
console.log('Keys of buildable-lib:', keysOf({ a: 1, b: 2, c: 3 }));
