'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import { Girl } from '../../utils/images'
import { WebDevelopmentIcon, AppDevelopmentIcon, DevopsIcon } from '@/utils/icons'
import Ellipse from './Ellipse'
import Link from 'next/link'

const Hero = () => {
  const ellipseRef = useRotatingAnimation()
  const { text: role, icon: RoleIcon }  = useRoleSwitcher({
    roles: [
      {
        label: 'FULLSTACK DEVELOPER',
        icon: <Image src={WebDevelopmentIcon} alt="Web Icon" className="w-10 h-10 ml-3" />,
      },
      {
        label: 'MOBILE DEVELOPER',
        icon: <Image src={AppDevelopmentIcon} alt="App Icon" className="w-10 h-10 ml-3" />,
      },
      {
        label: 'DEVOPS ENGINEER',
        icon: <Image src={DevopsIcon} alt="DevOps Icon" className="w-10 h-10 ml-3" />,
      },
    ],
    interval: 2000, // pause after full word
    typingSpeed: 80 // speed of typing/deleting
  })

  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(dvh-4rem)] bg-no-repeat">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4 mt-5 md:mt-0">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">Hi,</span>
            <span className="text-neutral mb-2 block text-4xl font-bold">I'm Nawodi Priyawansha</span>
            <span className="text-accent flex  text-[1.75rem] font-bold">{role} {RoleIcon}<span className="animate-pulse">|</span></span>
          </h1>

          <h2 className="text-neutral mt-3">
            Crafting innovative solutions to solve real-world problems
          </h2>

          <div className="mt-6 flex flex-wrap gap-6">
          <Link
            href="/#contact"
            aria-label="Connect with me"
            className="bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E]">
            Hire Me
          </Link>

            <a
              href="/nawodipriyawansha_resume.pdf"
              download
              aria-label="View LinkedIn Profile"
              className="text-neutral bg-secondary cursor-pointer rounded-lg px-[14px] py-[10px] text-sm">
              Download CV
            </a>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="text-accent relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
            <Image
              src={Girl}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
              alt="John Doe - Full Stack Developer"
              className="object-contain p-5 scale-x-[-1]"
            />
            <Ellipse
              ref={ellipseRef}
              className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
