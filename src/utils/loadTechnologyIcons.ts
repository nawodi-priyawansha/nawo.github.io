
interface WebpackContext {
  keys: () => string[]
  (id: string): {
    default: any
  }
}

//const svgIcons = require.context('../assets/icons', false, /\.svg$/) as WebpackContext
const pngIcons = require.context('../assets/icons', false, /\.png$/) as WebpackContext

type IconEntry =
  | { type: 'component'; component: React.FC<React.SVGProps<SVGSVGElement>> }
  | { type: 'image'; path: string }

export const technologyIconMap: Record<string, IconEntry> = {}

// Load SVGs as React components
// svgIcons.keys().forEach((key) => {
//   const iconName = key.replace('./', '').replace('.svg', '').toLowerCase()
//   technologyIconMap[iconName] = {
//     type: 'image',
//     path: svgIcons(key).default,
//   }
// })

// Load PNGs (or non-component SVGs) as paths
pngIcons.keys().forEach((key) => {
  const iconName = key.replace('./', '').replace('.png', '').toLowerCase()
  technologyIconMap[iconName] = {
    type: 'image',
    path: pngIcons(key).default,
  }
})
