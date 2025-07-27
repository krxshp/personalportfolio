"use client"

import { motion } from "framer-motion"
import { BackButton } from "./back-button"
import { Monitor, Wrench, Cpu, Trophy, GraduationCap } from "lucide-react"

// CUSTOMIZABLE CONTENT - Edit these experiences as needed
const TIMELINE_DATA = [
  {
    title: "IT Infrastructure Analyst",
    company: "Cyber System Solutions",
    period: "Sept 2024 – Present",
    description:
      "Managing IT infrastructure, troubleshooting systems, and implementing security protocols for enterprise clients.",
    icon: Monitor,
    color: "blue",
    achievements: ["Network optimization", "Security implementations", "System maintenance"],
  },
  {
    title: "IT Assistant",
    company: "McMaster Housing",
    period: "Apr – Aug 2025",
    description: "Providing technical support for residential systems and maintaining campus IT infrastructure.",
    icon: Wrench,
    color: "green",
    achievements: ["Technical support", "System maintenance", "User training"],
  },
  {
    title: "Mechanical Team Member",
    company: "McMaster RoboSub",
    period: "2025 – Present",
    description: "Designing and building autonomous underwater vehicles for international competition.",
    icon: Cpu,
    color: "purple",
    achievements: ["Mechanical design", "System integration", "Competition preparation"],
  },
  {
    title: "CAD Coach & Trainer",
    company: "VEX Robotics",
    period: "2022 – 2024",
    description: "Training students in CAD design and mechanical engineering principles for competitive robotics.",
    icon: Trophy,
    color: "yellow",
    achievements: ["Student mentoring", "CAD training", "Competition success"],
  },
  {
    title: "Computer Engineering Student",
    company: "McMaster University",
    period: "2023 – Present",
    description: "Pursuing Bachelor of Engineering in Computer Engineering with focus on embedded systems.",
    icon: GraduationCap,
    color: "red",
    achievements: ["Academic excellence", "Project development", "Research participation"],
  },
]

const TIMELINE_CONTENT = {
  title: "Experience Timeline",
  subtitle: "Advancements Unlocked",
  achievementTitle: "Achievement Unlocked!",
  achievementDescription: "Continuous Learning - Always seeking new challenges and opportunities to grow",
}

interface TimelineSectionProps {
  setCurrentSection: (section: string) => void
}

export function TimelineSection({ setCurrentSection }: TimelineSectionProps) {
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
        <h1 className="text-4xl font-minecraft text-green-400 mb-8 text-center">{TIMELINE_CONTENT.title}</h1>
        <p className="text-center text-gray-400 font-minecraft mb-12">{TIMELINE_CONTENT.subtitle}</p>

        <div className="relative">
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
                transition={{ delay: index * 0.2, duration: 0.6 }}
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
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-minecraft text-green-400">{exp.title}</h3>
                      <span className="text-yellow-400 font-minecraft text-sm">{exp.period}</span>
                    </div>

                    <h4 className="text-lg font-minecraft text-gray-300 mb-3">{exp.company}</h4>

                    <p className="text-gray-400 font-minecraft text-sm mb-4 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <span key={i} className={`px-3 py-1 rounded border text-xs font-minecraft ${colorClasses}`}>
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
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-green-900/30 border border-green-600 p-6 rounded-lg">
            <h3 className="text-green-300 font-minecraft text-lg mb-2">{TIMELINE_CONTENT.achievementTitle}</h3>
            <p className="text-gray-300 font-minecraft text-sm">{TIMELINE_CONTENT.achievementDescription}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
