// components/Socials/FixedSocials.tsx
'use client'

import { socials } from '@/appData/personal'
import { Socials } from "@/appData/index"


const FixedSocials = () => {
  return (
    <div className="hidden lg:flex fixed left-4 bottom-20 z-50 flex-col gap-8 bg-secondary/[0.75] rounded-lg p-4 shadow-2xl">
      {Socials.map((item, index) => {
        const Icon = item.icon
        return (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral hover:text-neutral/50 transition-colors duration-300 scale-125 transform"
        >
          <Icon />
        </a>
        )
    })}
    </div>
  )
}

export default FixedSocials
