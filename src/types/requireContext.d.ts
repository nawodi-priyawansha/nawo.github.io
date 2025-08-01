// This tells TypeScript that require.context exists (used by Webpack)
interface Require {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): {
    keys(): string[]
    <T>(id: string): T
  }
}

// Required to extend the `require` keyword
declare var require: Require
