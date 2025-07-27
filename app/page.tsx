"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TypewriterText } from "@/components/typewriter-text"
import { FloatingStars } from "@/components/floating-stars"
import { TopNavigation } from "@/components/top-navigation"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ResumeSection } from "@/components/resume-section"
import { ContactSection } from "@/components/contact-section"
import { EasterEgg } from "@/components/easter-egg"
import { Linkedin } from "lucide-react"
import { Monitor, Cpu, Waves, Settings } from "lucide-react"
import { EducationSection } from "@/components/education-section"

// CUSTOMIZABLE CONTENT - Edit these texts as needed
const MAIN_PAGE_CONTENT = {
  welcomeText: "Krish Patel",
  poeticLines: [
    "Computer Engineering @ McMaster University",
    "C, Python, Scripting",
    "Inventor Professional, Solidworks, AutoCAD",
    "ESP32, Arduino, Raspberry Pi, Computers",
  ],
  finalMessage: "Welcome to my portfolio!",
  profileImageAlt: "Krish Patel - Computer Engineer",
  linkedinUrl: "https://www.linkedin.com/in/krishpatel2006-/",
}

// Timeline data with proper icon definitions - Updated with McMaster Housing image
const TIMELINE_DATA = [
  {
    title: "IT Technical Assistant Co-op",
    company: "McMaster Housing and Conference Services",
    period: "Apr – Aug 2025",
    description:
      "Working on summer projects for the department revolving around automation. This includes the Dropbox project - a project pending approval for students and guests to check in and out of residences quickly. Used scripting to automate computer setup, and Python for various automation projects. Also provided technical support for campus systems and maintaining campus IT network infrastructure.",
    icon: Cpu,
    color: "green",
    achievements: ["Automation", "Network maintenance", "Scripting"],
    image: "/images/work/mcmaster-housing.jpeg", // Added company image
  },
  {
    title: "Mechanical Team Member",
    company: "McMaster RoboSub",
    period: "Feb 2025 – Present",
    description:
      "Designing and building autonomous underwater vehicles for international competition. Working on the Actuation (Thruster Placement and Mobility) components. This includes choosing the correct mechanisms for movement and how to place them on the submarine using Solidworks.",
    icon: Waves,
    color: "purple",
    achievements: ["Mechanical design", "System integration", "Solidworks"],
  },
  {
    title: "IT Infrastructure Analyst",
    company: "Cyber System Solutions",
    period: "Sept 2024 – Present",
    description:
      "Managing IT infrastructure, troubleshooting systems, and implementing security protocols for enterprise clients. Providing support for Microsoft Azure cloud systems and servers.",
    icon: Monitor,
    color: "blue",
    achievements: ["Network optimization", "Microsoft Azure", "System maintenance"],
  },
  {
    title: "CAD Training Coordinator",
    company: "Central Peel VEX Robotics",
    period: "2022 – 2024",
    description:
      "Training students in CAD design and mechanical engineering principles for competitive robotics. Guided 50+ students in mastering CAD.",
    icon: Settings,
    color: "yellow",
    achievements: ["Student mentoring", "CAD training", "Competition success"],
  },
]

const getColorClasses = (color: string) => {
  const colors = {
    blue: "border-blue-600 bg-blue-900/30 text-blue-300",
    green: "border-green-600 bg-green-900/30 text-green-300",
    purple: "border-purple-600 bg-purple-900/30 text-purple-300",
    yellow: "border-yellow-600 bg-yellow-900/30 text-yellow-300",
    red: "border-red-600 bg-red-900/30 text-red-300",
  }
  return colors[color as keyof typeof colors] || colors.blue
}

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home")

  const renderSection = () => {
    switch (currentSection) {
      case "about":
        return <AboutSection setCurrentSection={setCurrentSection} />
      case "projects":
        return <ProjectsSection setCurrentSection={setCurrentSection} />
      case "education":
        return <EducationSection setCurrentSection={setCurrentSection} />
      case "resume":
        return <ResumeSection setCurrentSection={setCurrentSection} />
      case "contact":
        return <ContactSection setCurrentSection={setCurrentSection} />
      default:
        return (
          <div className="min-h-screen px-4 py-8 pt-24">
            {/* Added pt-24 to account for fixed top nav */}
            <div className="max-w-6xl mx-auto">
              {/* Main Header Section */}
              <div className="text-center mb-16">
                {/* Main Typewriter Text */}
                <TypewriterText
                  text={MAIN_PAGE_CONTENT.welcomeText}
                  className="text-3xl md:text-5xl mb-8 text-green-400"
                  delay={500}
                />

                {/* Profile Picture and LinkedIn - Below main title */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 4, duration: 1 }}
                  className="mb-8"
                >
                  <div className="w-40 h-40 mx-auto mb-4 bg-gray-700 border-4 border-gray-500 rounded-lg overflow-hidden">
                    <img
                      src="/images/profile/krish-profile.png"
                      alt={MAIN_PAGE_CONTENT.profileImageAlt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        e.currentTarget.src = "/placeholder.svg?height=160&width=160&text=Your+Photo"
                      }}
                    />
                  </div>

                  <motion.a
                    href={MAIN_PAGE_CONTENT.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-800 border-2 border-blue-600 rounded text-blue-300 hover:bg-blue-700 transition-colors nav-text text-sm"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </motion.a>
                </motion.div>

                {/* Poetic Lines - Load word by word */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 6, duration: 1 }}
                  className="space-y-6 text-xl md:text-2xl text-gray-300 mb-12"
                >
                  {MAIN_PAGE_CONTENT.poeticLines.map((line, index) => (
                    <TypewriterText key={index} text={line} className="" delay={6500 + index * 2000} speed={100} />
                  ))}
                </motion.div>

                {/* Final Message */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 14, duration: 1 }}
                  className="mb-16"
                >
                  <p className="text-yellow-400 text-2xl mb-8 minecraft-font">{MAIN_PAGE_CONTENT.finalMessage}</p>
                </motion.div>
              </div>

              {/* Timeline Section - On Home Page */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="mb-16"
              >
                <h2 className="text-4xl minecraft-font text-green-400 mb-8 text-center">Experience Timeline</h2>
                <p className="text-center text-gray-400 minecraft-font mb-12 text-lg">Advancements Unlocked</p>

                <div className="relative max-w-4xl mx-auto">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600"></div>

                  {/* Timeline Items */}
                  {TIMELINE_DATA.map((exp, index) => {
                    const Icon = exp.icon
                    const colorClasses = getColorClasses(exp.color)

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.5 + index * 0.2, duration: 0.6 }}
                        className="relative flex items-start mb-12"
                      >
                        {/* Timeline Icon */}
                        <div
                          className={`flex-shrink-0 w-16 h-16 rounded-full border-2 ${colorClasses} flex items-center justify-center z-10 bg-black`}
                        >
                          <Icon size={24} />
                        </div>

                        {/* Timeline Content */}
                        <div className="ml-8 flex-1">
                          <div className="bg-black/50 border-2 border-gray-600 rounded-lg p-6 backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                              <div className="flex-1">
                                <h3 className="text-xl minecraft-font text-green-400">{exp.title}</h3>
                                <h4 className="text-lg minecraft-font text-gray-300 mb-2">{exp.company}</h4>

                                {/* Company Image for McMaster Housing */}
                                {exp.image && (
                                  <div className="mb-3">
                                    <img
                                      src={exp.image || "/placeholder.svg"}
                                      alt={exp.company}
                                      className="w-32 h-32 object-contain bg-white rounded border border-gray-600"
                                    />
                                  </div>
                                )}
                              </div>
                              <span className="text-yellow-400 minecraft-font text-sm">{exp.period}</span>
                            </div>

                            <p className="text-gray-400 minecraft-font text-sm mb-4 leading-relaxed">
                              {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {exp.achievements.map((achievement, i) => (
                                <span
                                  key={i}
                                  className={`px-3 py-1 rounded border text-xs minecraft-font ${colorClasses}`}
                                >
                                  {achievement}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Achievement Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4, duration: 0.8 }}
                  className="text-center mt-12"
                >
                  <div className="bg-green-900/30 border border-green-600 p-6 rounded-lg max-w-2xl mx-auto">
                    <h3 className="text-green-300 minecraft-font text-lg mb-2">Achievement Unlocked!</h3>
                    <p className="text-gray-300 minecraft-font text-sm">
                      Continuous Learning - Always seeking new challenges and opportunities to grow
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-end-poem-background bg-cover bg-center bg-fixed relative overflow-x-hidden">
      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 bg-black/70 z-0" />

      {/* Top Navigation Bar - Fixed and always visible */}
      <TopNavigation currentSection={currentSection} setCurrentSection={setCurrentSection} />

      {/* Floating stars - now yellow and less frequent */}
      <FloatingStars />

      {/* Easter egg pickaxe */}
      <EasterEgg />

      {/* Main content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
