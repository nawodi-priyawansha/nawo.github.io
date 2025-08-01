import { footerLinks, languages } from '@/appData'
import { socials } from '@/appData/personal'
import { Socials } from "@/appData/index"

import Logo from '../Navbar/Logo'

const Footer = () => {
  return (
    <footer className="bg-secondary relative flex min-h-fit flex-col justify-between gap-20 overflow-hidden px-4 py-14 md:py-4 md:px-14">
      <div className="relative z-20 flex flex-col items-center justify-between gap-4 md:flex-row">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <h5 className="flex items-center gap-2">
            <Logo width={40} height={40} />
          </h5>
        </div>

        {/* Center copyright text */}
        <p className="text-tertiary-content text-sm text-center">
          © 2025 <span className="text-accent/50">Nawodi Priyawansha</span>. All Rights Reserved
        </p>

        {/* Social icons on the right */}
        <ul className="flex items-center gap-4">
          {Socials.map((item, index) => {
            const Icon = item.icon
            return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral hover:text-neutral/50 transition-colors duration-300"
            >
              <Icon />
            </a>
            )
        })}
          {/* {socials.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral transition-colors duration-300 hover:text-neutral/50"
              >
                {item.icon}
              </a>
            </li>
          ))} */}
        </ul>
      </div>

    </footer>
  )
}

export default Footer
