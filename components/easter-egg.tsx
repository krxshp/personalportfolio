"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function EasterEgg() {
  const [showPickaxe, setShowPickaxe] = useState(false)
  const [clicks, setClicks] = useState(0)

  const handlePickaxeClick = () => {
    setClicks((prev) => prev + 1)

    // Play sound effect (you can add actual audio here)
    console.log("*Redstone activation sound*")

    // Show special message after 5 clicks
    if (clicks >= 4) {
      alert("🎉 You found the secret! The redstone engineer approves! ⛏️")
      setClicks(0)
    }
  }

  return (
    <>
      {/* Hidden pickaxe in bottom right corner */}
      <motion.div
        className="fixed bottom-8 right-8 z-50 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={() => setShowPickaxe(true)}
        onMouseLeave={() => setShowPickaxe(false)}
        onClick={handlePickaxeClick}
      >
        <div className="w-12 h-12 bg-gray-700 border-2 border-gray-500 rounded flex items-center justify-center hover:bg-gray-600 transition-colors">
          <span className="text-2xl">⛏️</span>
        </div>
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {showPickaxe && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-20 right-8 z-50 bg-black/80 border border-gray-600 rounded px-3 py-2"
          >
            <span className="font-minecraft text-sm text-gray-300">
              {clicks === 0 ? "Click the pickaxe!" : `${5 - clicks} more clicks...`}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating particles when clicked */}
      <AnimatePresence>
        {clicks > 0 && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="fixed bottom-16 right-12 z-40 pointer-events-none"
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: 0, x: 0, opacity: 1 }}
                animate={{
                  y: -50 - i * 10,
                  x: (i - 1) * 20,
                  opacity: 0,
                }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
                className="absolute text-red-500 text-sm"
              >
                ✨
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
