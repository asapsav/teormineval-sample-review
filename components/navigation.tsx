"use client"

import { useState, useEffect } from "react"

interface NavigationProps {
  onLogoHover?: (isHovering: boolean) => void
  onLogoClick?: () => void
}

export function Navigation({ onLogoHover, onLogoClick }: NavigationProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [submitProblemClicked, setSubmitProblemClicked] = useState(false)

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const links = [
    { href: "/findings", label: "Blog", internal: true },
    { href: "/inspect-ai-viewer/", label: "Traces", internal: true },
    { href: "/logs/", label: "Console", internal: true },
    { href: "https://github.com/asapsav/TeorMininumEval", label: "GitHub", internal: false },
    { href: "https://airtable.com/appBIwEl9RwgXitoc/pagzxsqR1zDi7R6eh/form", label: "Submit Problem", internal: false },
  ]

  const handleSubmitProblemHover = (isHovering: boolean) => {
    if (!isMobile) {
      onLogoHover?.(isHovering)
    }
  }

  const handleSubmitProblemClick = () => {
    if (isMobile) {
      setSubmitProblemClicked(true)
      onLogoClick?.()
      
      // Reset click state after animation
      setTimeout(() => {
        setSubmitProblemClicked(false)
      }, 800)
    }
  }

  return (
    <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          {...(link.internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
          className="text-gray-600 hover:text-gray-900 transition-colors"
          onMouseEnter={() => link.label === "Submit Problem" ? handleSubmitProblemHover(true) : undefined}
          onMouseLeave={() => link.label === "Submit Problem" ? handleSubmitProblemHover(false) : undefined}
          onClick={() => link.label === "Submit Problem" ? handleSubmitProblemClick() : undefined}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}
