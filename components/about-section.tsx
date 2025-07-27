"use client"

import { motion } from "framer-motion"
import { BackButton } from "./back-button"

// CUSTOMIZABLE CONTENT - Edit these as needed
const ABOUT_CONTENT = {
  title: "About Me",
  profileImageAlt: "Krish Patel",
  didYouKnowFacts: [
    "🚗 Loves cars and automotive engineering",
    "⛏️ Minecraft enthusiast since 2011",
    "🐞 Enjoys solving weird bugs at 2am",
    "🔧 Can build both redstone circuits and real ones",
  ],
  mainDescription: [
    "Hello! I'm Krish, a Computer Engineering student at McMaster University with a passion for bridging the gap between hardware and software.",
    "From designing emergency vehicle prototypes to building stove safety devices, I love creating solutions that make a real-world impact. My experience spans from low-level Arduino programming to high-level system design.",
    "When I'm not coding or designing circuits, you'll find me mentoring robotics teams, working on cars, or exploring the latest in tech innovation.",
  ],
  quote: "Redstone and real-world circuits? Not so different...",
  currentFocus: "Embedded Systems",
  favoriteLanguage: "C++ & Python",
}

interface AboutSectionProps {
  setCurrentSection: (section: string) => void
}

export function AboutSection({ setCurrentSection }: AboutSectionProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* Back Button */}
      <BackButton onClick={() => setCurrentSection("home")} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mt-20"
      >
        <div className="bg-black/50 border-2 border-gray-600 p-8 rounded-lg backdrop-blur-sm">
          <h1 className="text-4xl font-minecraft text-green-400 mb-8 text-center">{ABOUT_CONTENT.title}</h1>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Profile Picture and Fun Facts */}
            <div className="space-y-6">
              {/* Profile Picture Placeholder - REPLACE WITH YOUR IMAGE */}
              <div className="w-48 h-48 mx-auto bg-gray-700 border-2 border-gray-500 rounded-lg flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=192&width=192&text=Your+Photo"
                  alt={ABOUT_CONTENT.profileImageAlt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Did You Know Section */}
              <div className="bg-gray-800/80 border border-gray-600 p-4 rounded">
                <h3 className="text-yellow-400 font-minecraft text-lg mb-2">Did you know?</h3>
                <ul className="text-gray-300 space-y-2 font-minecraft text-sm">
                  {ABOUT_CONTENT.didYouKnowFacts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Description and Details */}
            <div className="space-y-6">
              {/* Main Description */}
              <div className="bg-gray-900/80 border border-gray-600 p-6 rounded">
                {ABOUT_CONTENT.mainDescription.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 font-minecraft leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Quote Section */}
              <div className="bg-green-900/30 border border-green-600 p-4 rounded">
                <blockquote className="text-green-300 font-minecraft text-center italic">
                  "{ABOUT_CONTENT.quote}"
                </blockquote>
              </div>

              {/* Skills/Focus Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-900/30 border border-blue-600 p-3 rounded text-center">
                  <h4 className="text-blue-300 font-minecraft text-sm">Current Focus</h4>
                  <p className="text-gray-300 font-minecraft text-xs mt-1">{ABOUT_CONTENT.currentFocus}</p>
                </div>
                <div className="bg-purple-900/30 border border-purple-600 p-3 rounded text-center">
                  <h4 className="text-purple-300 font-minecraft text-sm">Favorite Language</h4>
                  <p className="text-gray-300 font-minecraft text-xs mt-1">{ABOUT_CONTENT.favoriteLanguage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
