import { skillList } from '@/appData'
import ContactSection from '@/components/Contact/ContactSection'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import ServiceSection from '@/components/Services/ServiceSection'
import About from '@/components/About/About'
import Skills from '@/components/Skills/Skills'
import Experience from '@/components/Experience/Experience'
import { getAllProjects, getAllEducations } from '@/services'

export default async function Home() {
  const projects = await getAllProjects()
  const educations = await getAllEducations()

  return (
    <main>
      <Hero />
      <Skills skills={skillList} />
      <div className="mx-auto my-8 max-w-[1300px] px-4 md:my-[3.75rem]">
        <About educations={educations} />
        <Experience />
        <ServiceSection />
        <ProjectSection projects={projects} />
        {/* <TestimonialSection testimonials={testimonials} /> */}
        <ContactSection />
      </div>
    </main>
  )
}
