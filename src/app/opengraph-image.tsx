// app/opengraph-image/route.ts
import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'SOLOPRENEUR'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Set runtime based on environment variable
export const runtime =
  process.env.DISABLE_OG_IMAGE === 'true' ? 'node' : 'edge'

export default async function Image() {
  // When disabled (for static export), return simple response
  if (process.env.DISABLE_OG_IMAGE === 'true') {
    return new Response('OpenGraph image disabled for static export')
  }

  // Normal OG image generation
  return new ImageResponse(
    (
      <div
        style={{
          background: '#011627',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        <h1 style={{ fontSize: 32, color: '#18f2e5', margin: 0 }}>
          Nawodi Priyawansha | Full-Stack Web Developer
        </h1>
        <h2 style={{ fontSize: 40, color: 'white', marginTop: 30 }}>
          Crafting innovative solutions to solve real-world problems
        </h2>
      </div>
    ),
    {
      ...size,
    }
  )
}
