// At the top of your file or in a global .d.ts file:
interface WebpackRequire extends NodeRequire {
  context(
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ): {
    keys(): string[]
    <T = any>(id: string): T
  }
}

declare const require: WebpackRequire

// Main logic
const req = require.context('./icons', false, /\.svg$/)

const icons = req.keys().map((key) => ({
  name: key.replace('./', '').replace('.svg', ''),
  src: req<{ default: string }>(key).default ?? req<string>(key)
}))
