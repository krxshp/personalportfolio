"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-sm pixel-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xs md:text-sm text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-xs md:text-sm text-foreground hover:text-accent transition-colors">
              About Me
            </Link>
            <Link href="/resume" className="text-xs md:text-sm text-foreground hover:text-accent transition-colors">
              Resume
            </Link>
          </div>
          <a
            href="https://www.linkedin.com/in/krishpatel2006-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm text-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  )
}
