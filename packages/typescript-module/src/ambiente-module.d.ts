// Ambient Module Declaration - Allows importing this module and its exported contents without TypeScript errors, even if the actual implementation is not present at compile time.
declare module 'example' {
  export function exampleFunction(): void;
}

// Pattern Ambient Module Declaration - Allows importing files with the .html extension as modules
declare module '*.html' {
  const content: string;
  export default content;
  export function taggedTemplate(
    strings: TemplateStringsArray,
    ...values: any[]
  ): string;
}
