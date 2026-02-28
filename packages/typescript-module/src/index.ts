import { format } from './format.ts';
import { run } from './job.ts';
import { type Options, defaultOptions } from './interface.ts';

console.log(format('Hello, TypeScript module system!'));
console.log('Default options:', defaultOptions);
run();
