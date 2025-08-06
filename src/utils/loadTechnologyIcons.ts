interface WebpackContext {
  keys: () => string[]
  (id: string): {
    default: string
  }
}

// Load PNGs from assets/icons folder
const pngIcons = require.context('../assets/icons', false, /\.png$/) as WebpackContext

type IconEntry =
  | { type: 'component'; component: React.FC<React.SVGProps<SVGSVGElement>> }
  | { type: 'image'; path: string }

export const technologyIconMap: Record<string, IconEntry> = {}

pngIcons.keys().forEach((key) => {
  const iconName = key.replace('./', '').replace('.png', '').toLowerCase()
  technologyIconMap[iconName] = {
    type: 'image',
    path: pngIcons(key).default,
  }
})
