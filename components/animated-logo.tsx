"use client"

import { useState, useEffect } from "react"

interface AnimatedLogoProps {
  className?: string
  alt?: string
  onHover?: (isHovering: boolean) => void
  onClick?: () => void
  externalHover?: boolean
  externalClick?: boolean
}

export function AnimatedLogo({ 
  className = "h-16 w-auto", 
  alt = "TeorMinimumEval Logo",
  onHover,
  onClick,
  externalHover = false,
  externalClick = false
}: AnimatedLogoProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle external hover state from navigation
  useEffect(() => {
    if (!isMobile) {
      setIsHovering(externalHover)
    }
  }, [externalHover, isMobile])

  // Handle external click from navigation
  useEffect(() => {
    if (isMobile && externalClick) {
      setIsAnimating(true)
      onClick?.()
      
      // Reset animation after winging completes
      setTimeout(() => {
        setIsAnimating(false)
      }, 800) // Duration of winging animation
    }
  }, [externalClick, isMobile, onClick])

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovering(true)
      onHover?.(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovering(false)
      onHover?.(false)
    }
  }

  const handleClick = () => {
    if (isMobile) {
      setIsAnimating(true)
      onClick?.()
      
      // Reset animation after winging completes
      setTimeout(() => {
        setIsAnimating(false)
      }, 800) // Duration of winging animation
    }
  }

  // Determine if brows should be up (hovered/clicked) or down (default)
  const browsUp = (!isMobile && (isHovering || externalHover)) || (isMobile && isAnimating)

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        cursor: isMobile ? 'pointer' : 'default'
      }}
    >
      {/* Base logo without brows */}
      <img 
        src="/images/logos/logo-no-brows.png"
        alt={alt}
        className={className}
      />
      
      {/* Brows logo overlay - moves up/down */}
      <img 
        src="/images/logos/logo-brows-only.png"
        alt=""
        className={`${className} absolute left-0 transition-all duration-500 ease-out ${
          isMobile && isAnimating ? 'animate-brows-wing' : ''
        }`}
        style={{
          top: browsUp ? '-8px' : '0px', // Move brows up when hovered/clicked
          animationDuration: isMobile && isAnimating ? '0.8s' : '0.5s',
          animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />
    </div>
  )
}
