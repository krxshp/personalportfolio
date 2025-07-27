"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

interface BackButtonProps {
  onClick: () => void
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-20 left-4 z-30 flex items-center gap-2 px-4 py-2 bg-gray-800/90 border-2 border-gray-600 rounded text-gray-300 hover:bg-gray-700 hover:border-gray-500 transition-colors minecraft-font text-sm backdrop-blur-sm"
    >
      <ArrowLeft size={16} />
      Back to Home
    </motion.button>
  )
}
