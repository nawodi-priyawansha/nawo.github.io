'use client'

import { Education } from '@/lib/types'
import { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import EducationCard from './EducationCard'

interface EducationSectionProps {
  educations: Education[]
}

const EducationSection: React.FC<EducationSectionProps> = ({ educations }) => {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <section id="educations">
      <SectionHeading
        title=""
        subtitle="** Education"
      />

      <div className="hide-scrollbar my-8 flex gap-8 overflow-x-auto">
        {educations.map((education, idx) => (
          <EducationCard
            key={idx}
            education={education}
            handleActiveCard={() => {
              setActiveCard(idx)
            }}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-1 sm:hidden">
        {educations.map((_, idx) => (
          <div
            key={idx}
            className={`${idx === activeCard ? 'bg-accent size-[12px]' : 'size-[10px] bg-white/50'} rounded-full`}
          />
        ))}
      </div>
    </section>
  )
}

export default EducationSection
