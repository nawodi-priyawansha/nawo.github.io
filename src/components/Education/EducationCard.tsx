import { Education } from '@/lib/types'
import { isInViewport } from '@/utils'
import { FC, useEffect, useRef } from 'react'

interface EducationCardProps {
  education: Education
  handleActiveCard: () => void
}

const EducationCard: FC<EducationCardProps> = ({
  education: { name, univercity, time},
  handleActiveCard,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let observer: IntersectionObserver

    if (cardRef.current) {
      observer = isInViewport(cardRef.current, handleActiveCard)
    }

    return () => {
      observer?.disconnect()
    }
  }, [cardRef.current])

  return (
    <div
      ref={cardRef}
      className="bg-secondary border-border flex max-w-full shrink-0 flex-col items-center justify-between gap-4 rounded-2xl border p-4 text-center sm:max-w-[425px]">
      <p className="text-neutral text-center">
        {time}
      </p>
      
          <p className="text-neutral text-lg font-semibold">{name}</p>
          <p className="text-neutral/60 text-sm">{univercity}</p>
        
    </div>
  )
}

export default EducationCard
