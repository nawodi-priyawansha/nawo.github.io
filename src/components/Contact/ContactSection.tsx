import { MsgIcon, PhoneIcon, MapIcon } from '@/utils/icons'
import { footerLinks, languages } from '@/appData'
import ContactForm from './ContactForm'
import LocationIcon from '@/assets/icons/location.png'


const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-secondary my-8 grid grid-cols-1 gap-16 rounded-4xl p-8 md:my-16 md:grid-cols-2 md:gap-8 lg:gap-12">
      <ContactForm />
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-neutral text-3xl font-bold">Let's Talk</h3>
          <h4 className="text-accent text-2xl font-bold md:text-3xl">I'd love to help</h4>
          <p className="text-neutral mt-8">
            Always happy to connect or collaborate — let’s build something awesome! 
          </p>
        </div>

        <div className="flex flex-col justify-between gap-[200px] md:flex-row md:gap-8">
          <div className="space-y-10 md:self-end">
            <div className="flex flex-col">
              <h5 className="text-neutral mb-4 text-lg font-medium">Contact Us</h5>
              <a
                href="mailto:n.t.priyawansha@gmail.com"
                className="flex items-center gap-2 hover:text-tertiary-content text-neutral/60 text-sm font-light transition-colors duration-300 mb-3">
                <MsgIcon /> n.t.priyawansha@gmail.com
              </a>
              <a
                href="tel:+94 725407597"
                className="flex items-center gap-2 hover:text-tertiary-content text-neutral/60 text-sm font-light transition-colors duration-300">
                <PhoneIcon /> +94 725407597
              </a>
            </div>
            <div>
              <div>
                <h5 className="text-neutral mb-4 text-lg font-medium">Location</h5>
                <address className="flex items-center gap-2 hover:text-tertiary-content text-neutral/60 text-sm font-light">
                  {/* <img src={LocationIcon.src} alt="Location" className="w-7 h-7" /> */}
                  <MapIcon /><span>Negombo, Sri Lanka</span>
                  <span></span>
                </address>
              </div>
            </div>
          </div>

          <div className="md:self-end">
            <p className="text-neutral mb-8 text-sm md:text-right">Languages</p>
            <div className="flex gap-8 md:gap-4 lg:gap-8">
              {languages.map((language, idx) => (
                <span
                  key={language}
                  className={idx === 0 ? 'text-neutral' : 'text-tertiary-content'}>
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="space-y-2">
          <p className="text-neutral text-lg font-bold">Contact Information</p>
          <a
            href="mailto:johndoe@gmail.com"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <MsgIcon /> johndoe@gmail.com
          </a>
          <a
            href="tel:+92 3123456789"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <PhoneIcon /> +92 3123456789
          </a>
        </div> */}
      </div>

    </section>
  )
}

export default ContactSection
