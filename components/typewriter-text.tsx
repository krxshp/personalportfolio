"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
  wordByWord?: boolean
}

export function TypewriterText({
  text,
  className = "",
  delay = 0,
  speed = 50,
  wordByWord = false,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (wordByWord) {
      // Word by word animation
      const words = text.split(" ")
      const timer = setTimeout(
        () => {
          if (currentIndex < words.length) {
            setDisplayText((prev) => prev + (prev ? " " : "") + words[currentIndex])
            setCurrentIndex((prev) => prev + 1)
          }
        },
        currentIndex === 0 ? delay : speed * 3, // Slower for word-by-word
      )
      return () => clearTimeout(timer)
    } else {
      // Character by character animation (original)
      const timer = setTimeout(
        () => {
          if (currentIndex < text.length) {
            setDisplayText((prev) => prev + text[currentIndex])
            setCurrentIndex((prev) => prev + 1)
          }
        },
        currentIndex === 0 ? delay : speed,
      )
      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, delay, speed, wordByWord])

  return (
    <motion.div
      className={`end-poem-text ${className}`}
      style={{
        fontFamily:
          '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Source Code Pro", "Menlo", "Consolas", monospace',
        fontWeight: "400",
        letterSpacing: "0.08em",
        textShadow: "2px 2px 0px rgba(0,0,0,0.8)",
        fontVariant: "small-caps",
      }}
    >
      {displayText}
      {currentIndex < (wordByWord ? text.split(" ").length : text.length) && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="inline-block w-3 h-8 bg-green-400 ml-1"
        />
      )}
    </motion.div>
  )
}
