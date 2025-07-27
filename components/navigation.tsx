"use client"

import { motion } from "framer-motion"

interface NavigationProps {
  currentSection: string
  setCurrentSection: (section: string) => void
  showHome?: boolean
}

export function Navigation({ currentSection, setCurrentSection, showHome = true }: NavigationProps) {
  const navItems = [
    ...(showHome ? [{ id: "home", label: "Home" }] : []),
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap justify-center gap-4 mb-8"
    >
      {navItems.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => setCurrentSection(item.id)}
          className={`px-6 py-3 text-lg border-2 transition-all duration-300 ${
            currentSection === item.id
              ? "bg-green-600 border-green-400 text-white"
              : "bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
          }`}
          style={{
            fontFamily: '"Courier New", "Monaco", "Menlo", "Consolas", monospace',
            fontWeight: "bold",
            letterSpacing: "0.05em",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          [{item.label}]
        </motion.button>
      ))}
    </motion.nav>
  )
}
