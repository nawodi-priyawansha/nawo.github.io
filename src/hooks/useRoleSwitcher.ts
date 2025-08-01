import { useEffect, useState } from 'react'

interface RoleSwitcherOptions {
  roles: string[]
  interval?: number         // Time between full role switches (in ms)
  typingSpeed?: number      // Time between each character (in ms)
}

function useRoleSwitcher({
  roles,
  interval = 2000,
  typingSpeed = 100,
}: RoleSwitcherOptions): string {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (!roles.length) return

    const currentRole = roles[roleIndex]

    if (isTyping) {
      if (charIndex < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)
        }, typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        const pause = setTimeout(() => {
          setIsTyping(false)
        }, interval)
        return () => clearTimeout(pause)
      }
    } else {
      const backspace = setTimeout(() => {
        if (charIndex > 0) {
          setDisplayText((prev) => prev.slice(0, -1))
          setCharIndex((prev) => prev - 1)
        } else {
          setIsTyping(true)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }, typingSpeed)
      return () => clearTimeout(backspace)
    }
  }, [charIndex, isTyping, roleIndex, roles, interval, typingSpeed])

  return displayText
}

export default useRoleSwitcher

