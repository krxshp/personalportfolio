"use client"

import { motion } from "framer-motion"

interface TopNavigationProps {
  currentSection: string
  setCurrentSection: (section: string) => void
}

export function TopNavigation({ currentSection, setCurrentSection }: TopNavigationProps) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b-2 border-gray-600"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side - Name/Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center"
        >
          <h1 className="text-2xl main-title text-green-400 tracking-wider">Krish Patel</h1>
        </motion.div>

        {/* Right side - Navigation Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center gap-2 md:gap-4"
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setCurrentSection(item.id)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              className={`px-3 md:px-4 py-2 text-sm md:text-base border-2 transition-all duration-300 nav-text ${
                currentSection === item.id
                  ? "bg-green-600 border-green-400 text-white shadow-lg"
                  : "bg-gray-800/80 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              [{item.label}]
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  )
}
