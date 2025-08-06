'use client'
// import useRoleSwitcher from '@/hooks/useRoleSwitcher'
// import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import SectionHeading from '../SectionHeading/SectionHeading'
import Image from 'next/image'
import { ItGirl } from '../../utils/images'
import EducationSection from '../Education/EducationSection'
import SkillPeramid from '../Skills/SkillPeramid'
import { Education } from '@/lib/types'

interface AboutProps {
  educations: Education[]
}
const About: React.FC<AboutProps> = ({ educations }) => {

  return (
    <section id="about" className="bg-primary min-h-[calc(dvh-4rem)] bg-no-repeat">
      <SectionHeading title="// About Me" />
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-8 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        {/* IMAGE */}
        <div className="bg-secondary border-border rounded-[14px] border flex min-h-[10.75rem] items-center justify-center lg:min-h-[15rem]">
          <div className="text-accent relative size-56 sm:size-60 md:size-[20rem] lg:size-[15.00rem]">
            <Image
              src={ItGirl}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
              alt="Nawodi Priyawansha - Full Stack Developer"
              className="object-contain p-7"
            />
            {/* <Ellipse
              ref={ellipseRef}
              className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]"
            /> */}
          </div>
        </div>
        {/* About Me */}
        <div className="flex min-h-48 flex-col justify-between lg:min-h-[15rem] lg:max-w-max">
          <h1>
            <span className="text-neutral mb-3 block text-3xl font-bold">About Nawodi</span>
            {/* <span className="text-accent block text-[1.75rem] font-bold">{role}</span> */}
          </h1>

          <h2 className="text-neutral mt-1 text-sm text-justify">
            Hey! I’m Nawodi Priyawansha, a Software Engineer and Team Leader at BPO Starling Solutions. I have a degree in Software Engineering from UCSC and love turning ideas into real, working tech.
            </h2>
          <h2 className="text-neutral mt-2 text-sm text-justify">
            I started as an Associate Engineer and now lead teams to build cool, effective solutions. I'm into clean code, creative problem-solving, and staying up-to-date with tech trends.
          </h2>
          <h2 className="text-neutral mt-2 mb-1 text-sm text-justify">
            Always happy to connect or collaborate — let’s build something awesome!           
          </h2>

          {/* <div className="mt-6 flex flex-wrap gap-6">
            <a
              href="#"
              aria-label="Connect with me"
              className="bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E]">
              Hire Me
            </a>
            <a
              href="#"
              aria-label="View LinkedIn Profile"
              className="text-neutral bg-secondary cursor-pointer rounded-lg px-[14px] py-[10px] text-sm">
              LinkedIn Profile
            </a>
          </div> */}
        </div>
      </div>

      {/* EDUCATION SECTION */}
      <div className="mt-8 px-4 lg:px-5">
         <EducationSection educations={educations || []} />
      </div>

      <div className="mt-8 px-4 lg:px-5">
         <SkillPeramid />
      </div>
     
    </section>
  )
}

export default About
