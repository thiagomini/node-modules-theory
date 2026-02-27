## Glossary

- **Module**: A file that contains code (functions, variables, etc.) that can be reused in other parts of the application. In Node.js, each file is considered a module.

- **Script**: A file that is executed directly by Node.js. It can contain code that runs immediately when the file is executed, and does not export anything for use in other files. Scripts share global scope.

- **Host**: In the Typescript context, the host is "the system that ultimately consumes the output code to direct its module loading behavior.”.

| Scenario                                                                                              | Who Is the Host?                                         | Why?                                                                                                                                |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `tsc` outputs JS, and the JS is executed in **Node.js**                                               | **Node.js runtime**                                      | It consumes the emitted JS and determines how modules are loaded (CJS or ESM resolution).                                           |
| A runtime executes **TypeScript files directly** (no emitted JS)                                      | **The runtime (e.g., ts-node, Deno, Bun)**               | It directly consumes `.ts` files and controls module resolution behavior.                                                           |
| A **bundler** (e.g., Webpack, Rollup, esbuild) consumes TS inputs or JS outputs and produces a bundle | **The bundler**                                          | It reads original imports, resolves them, and rewrites or erases them into a new bundle structure.                                  |
| The bundled output is later executed in Node.js or the browser                                        | **The runtime that executes the bundle**                 | That runtime becomes the host for the _bundled modules_, but TypeScript does not model what happens after bundling.                 |
| A transpiler/optimizer/formatter runs after `tsc` but does not change imports/exports                 | **Not a host (from TypeScript’s perspective)**           | Because it doesn’t affect module resolution behavior.                                                                               |
| Modules loaded in a **web browser**                                                                   | **Split responsibility:** Browser JS engine + Web server | The browser controls accepted module format (e.g., ESM). The web server determines which file is served when imports are requested. |
| The **TypeScript compiler (tsc)** itself                                                              | ❌ Not a host                                            | It only models other hosts; it does not execute or load modules.                                                                    |

A host is the system that ultimately decides:

- How module specifiers are resolved ("./foo" → which file?)
- What module formats are accepted (CJS, ESM, etc.)
- How imports/exports are interpreted at runtime
  If something consumes imports and decides what file gets loaded, it’s a host.
  If something just transforms code without touching module boundaries, it’s not.

## TSConfig tips

See official docs for more details: https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html
