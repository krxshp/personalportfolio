"use client"

import { motion } from "framer-motion"
import { BackButton } from "./back-button"
import { Download, FileText, ExternalLink } from "lucide-react"

// CUSTOMIZABLE CONTENT - Edit these skills and stats as needed
const RESUME_CONTENT = {
  title: "Resume",
  skills: {
    "Programming Languages": ["C++", "Python", "JavaScript", "C", "MATLAB"],
    "Hardware & Embedded": ["Arduino", "ESP32", "Raspberry Pi", "Circuit Design", "PCB Design"],
    "Software & Tools": ["CAD (Inventor)", "Git", "Linux", "React", "Node.js"],
    Engineering: ["Digital Logic", "Signal Processing", "Control Systems", "Robotics"],
  },
  quickStats: [
    { value: "3+", label: "Years Experience", color: "blue" },
    { value: "10+", label: "Projects Completed", color: "green" },
    { value: "5+", label: "Technologies", color: "purple" },
    { value: "2+", label: "Awards Won", color: "yellow" },
  ],
  bottomMessage: "Looking for a specific format or have questions about my experience? Feel free to reach out!",
}

interface ResumeSectionProps {
  setCurrentSection: (section: string) => void
}

export function ResumeSection({ setCurrentSection }: ResumeSectionProps) {
  return (
    <div className="min-h-screen px-4 py-8">
      {/* Back Button */}
      <BackButton onClick={() => setCurrentSection("home")} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mt-20"
      >
        <h1 className="text-4xl font-minecraft text-green-400 mb-8 text-center">{RESUME_CONTENT.title}</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* PDF Viewer Section */}
          <div className="bg-black/50 border-2 border-gray-600 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-minecraft text-yellow-400 mb-6 flex items-center gap-2">
              <FileText size={24} />
              Resume Document
            </h2>

            {/* PDF Preview Placeholder - REPLACE WITH YOUR ACTUAL RESUME */}
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-8 mb-6 min-h-[400px] flex flex-col items-center justify-center">
              <FileText size={64} className="text-gray-500 mb-4" />
              <p className="text-gray-400 font-minecraft text-center mb-4">Resume PDF Preview</p>
              <p className="text-gray-500 font-minecraft text-sm text-center">Click download to view full resume</p>
            </div>

            {/* Resume Action Buttons */}
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-3 bg-green-800 border border-green-600 rounded hover:bg-green-700 transition-colors flex-1">
                <Download size={20} className="text-green-300" />
                <span className="font-minecraft text-green-300">Download PDF</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-3 bg-blue-800 border border-blue-600 rounded hover:bg-blue-700 transition-colors flex-1">
                <ExternalLink size={20} className="text-blue-300" />
                <span className="font-minecraft text-blue-300">View Online</span>
              </button>
            </div>
          </div>

          {/* Skills and Stats Section */}
          <div className="space-y-6">
            {/* Skills Overview */}
            <div className="bg-black/50 border-2 border-gray-600 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-minecraft text-yellow-400 mb-6">Skills Overview</h2>

              {Object.entries(RESUME_CONTENT.skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="mb-6"
                >
                  <h3 className="text-lg font-minecraft text-green-400 mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-800 border border-gray-600 rounded text-gray-300 font-minecraft text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="bg-black/50 border-2 border-gray-600 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-minecraft text-yellow-400 mb-6">Quick Stats</h2>

              <div className="grid grid-cols-2 gap-4">
                {RESUME_CONTENT.quickStats.map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-${stat.color}-900/30 border border-${stat.color}-600 p-4 rounded text-center`}
                  >
                    <div className={`text-2xl font-minecraft text-${stat.color}-300`}>{stat.value}</div>
                    <div className="text-sm font-minecraft text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="bg-gray-900/80 border border-gray-600 p-6 rounded-lg">
            <p className="text-gray-300 font-minecraft text-sm">{RESUME_CONTENT.bottomMessage}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
