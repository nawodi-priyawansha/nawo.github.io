interface WebpackRequire extends NodeRequire {
  context(
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ): {
    keys(): string[]
    <T = { default: string }>(id: string): T
  }
}

declare const require: WebpackRequire

const req = require.context('./icons', false, /\.svg$/)

const icons = req.keys().map((key) => ({
  name: key.replace('./', '').replace('.svg', ''),
  src: req<{ default: string }>(key).default,
}))
