import { format } from './format.ts';
import { run } from './job.ts';
import { type Options, defaultOptions } from './interface.ts';
import { exampleFunction } from 'example';
import htmlContent, { taggedTemplate } from './template.html';

console.log(format('Hello, TypeScript module system!'));
console.log('Default options:', defaultOptions);
run();
exampleFunction();
console.log('HTML content:', htmlContent);
console.log('Tagged template:', taggedTemplate`Hello, ${'world'}!`);
