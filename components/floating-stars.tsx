"use client"

import { motion } from "framer-motion"

export function FloatingStars() {
  // Reduced from 20 to 8 stars for less frequency
  const stars = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 2, // Slightly smaller
    duration: Math.random() * 15 + 10, // Slower movement
    delay: Math.random() * 5, // Random start delay
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-yellow-400 rounded-full opacity-40" // Changed to yellow and more subtle
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            y: [0, -30, 0], // Gentle floating motion
            x: [0, 10, -10, 0], // Side-to-side drift
            opacity: [0.2, 0.6, 0.2], // Gentle pulsing
            scale: [1, 1.3, 1], // Subtle size change
          }}
          transition={{
            duration: star.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
    </div>
  )
}
