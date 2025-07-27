"use client"

import { motion } from "framer-motion"
import { BackButton } from "./back-button"
import { ExternalLink, Github, Play, Trophy } from "lucide-react"

// MAIN PROJECTS DATA - 3 main projects
const MAIN_PROJECTS_DATA = [
  {
    name: "ThermaLink",
    description:
      "Smart stove safety device using Arduino and C++ with Bluetooth connectivity to prevent kitchen accidents through real-time monitoring and alerts.",
    tech: ["Arduino", "C++", "Bluetooth", "IoT"],
    image: "/placeholder.svg?height=200&width=300&text=ThermaLink",
    github: "#", // Replace with your actual GitHub link
    demo: "#", // Replace with your actual demo link
    videoDemo: "/videos/thermalink-demo.mp4", // Add your video file here
    featured: true,
    hasVideo: true,
  },
  {
    name: "Spark Learnathon",
    description:
      "Educational platform and learning initiative designed to spark innovation and learning in technology and engineering fields.",
    tech: ["Web Development", "Education", "Community Building"],
    image: "https://startthespark.ca/spark_learnathon", // This will show the website
    github: "#", // Replace with your actual GitHub link
    demo: "https://startthespark.ca/spark_learnathon",
    featured: true,
    isWebsite: true,
  },
  {
    name: "FIRST Robotics - Team 4939",
    description:
      "CAD design and mechanical engineering work for competitive robotics team, contributing to award-winning robot designs.",
    tech: ["CAD", "Inventor", "Mechanical Design", "Robotics"],
    image: "/placeholder.svg?height=200&width=300&text=FIRST+Robotics",
    github: "#", // Replace with your actual GitHub link
    demo: "#", // Replace with your actual demo link
    featured: true,
  },
]

// HACKATHONS DATA - 2 hackathon projects
const HACKATHONS_DATA = [
  {
    name: "MediTANK",
    description:
      "Emergency vehicle prototype featuring ESP32 microcontroller and radar systems for enhanced emergency response capabilities.",
    tech: ["ESP32", "Radar Systems", "C++", "Embedded Systems"],
    image: "/placeholder.svg?height=200&width=300&text=MediTANK",
    github: "#", // Replace with your actual GitHub link
    demo: "#", // Replace with your actual demo link
    award: "Best Hardware Solution",
  },
  {
    name: "MES Egg Drop",
    description:
      "Engineering challenge project focused on designing and building a protective system for egg drop competition using innovative materials and design principles.",
    tech: ["Mechanical Design", "Materials Engineering", "Physics", "CAD"],
    image: "/placeholder.svg?height=200&width=300&text=MES+Egg+Drop",
    github: "#", // Replace with your actual GitHub link
    demo: "#", // Replace with your actual demo link
    award: "Most Creative Design",
  },
]

const PROJECTS_CONTENT = {
  title: "Projects",
  mainProjectsTitle: "Featured Projects",
  hackathonsTitle: "Hackathons & Competitions",
  moreProjectsTitle: "More Projects Coming Soon!",
  moreProjectsDescription:
    "I'm always working on new projects. Check back soon for updates, or follow my GitHub for the latest developments!",
}

interface ProjectsSectionProps {
  setCurrentSection: (section: string) => void
}

export function ProjectsSection({ setCurrentSection }: ProjectsSectionProps) {
  return (
    <div className="min-h-screen px-4 py-8">
      {/* Back Button */}
      <BackButton onClick={() => setCurrentSection("home")} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mt-20"
      >
        <h1 className="text-4xl font-minecraft text-green-400 mb-8 text-center">{PROJECTS_CONTENT.title}</h1>

        {/* Main Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-minecraft text-yellow-400 mb-6 text-center">
            {PROJECTS_CONTENT.mainProjectsTitle}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MAIN_PROJECTS_DATA.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`bg-black/50 border-2 ${
                  project.featured ? "border-yellow-600" : "border-gray-600"
                } rounded-lg overflow-hidden backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="bg-yellow-600 text-black text-center py-1">
                    <span className="font-minecraft text-xs">FEATURED</span>
                  </div>
                )}

                <div className="p-6">
                  {/* Project Image/Video/Website */}
                  <div className="mb-4">
                    {project.hasVideo ? (
                      <div className="relative">
                        <video
                          className="w-full h-40 object-cover rounded border border-gray-600"
                          controls
                          poster={project.image}
                        >
                          <source src={project.videoDemo} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-minecraft">
                          VIDEO DEMO
                        </div>
                      </div>
                    ) : project.isWebsite ? (
                      <div className="relative">
                        <iframe
                          src={project.image}
                          className="w-full h-40 rounded border border-gray-600"
                          title={`${project.name} website preview`}
                        />
                        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-minecraft">
                          LIVE SITE
                        </div>
                      </div>
                    ) : (
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-40 object-cover rounded border border-gray-600"
                      />
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-minecraft text-green-400 mb-2">{project.name}</h3>

                  {/* Project Description */}
                  <p className="text-gray-300 font-minecraft text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-900/50 border border-blue-600 rounded text-blue-300 font-minecraft text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-800 border border-gray-600 rounded hover:bg-gray-700 transition-colors"
                    >
                      <Github size={16} className="text-gray-300" />
                      <span className="font-minecraft text-xs text-gray-300">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-3 py-2 bg-green-800 border border-green-600 rounded hover:bg-green-700 transition-colors"
                    >
                      {project.hasVideo ? (
                        <Play size={16} className="text-green-300" />
                      ) : (
                        <ExternalLink size={16} className="text-green-300" />
                      )}
                      <span className="font-minecraft text-xs text-green-300">
                        {project.hasVideo ? "Demo" : project.isWebsite ? "Visit" : "Demo"}
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hackathons Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl font-minecraft text-purple-400 mb-6 text-center flex items-center justify-center gap-2">
              <Trophy size={24} />
              {PROJECTS_CONTENT.hackathonsTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {HACKATHONS_DATA.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="bg-black/50 border-2 border-purple-600 rounded-lg overflow-hidden backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                >
                  {/* Award Badge */}
                  <div className="bg-purple-600 text-white text-center py-1">
                    <span className="font-minecraft text-xs">🏆 {project.award}</span>
                  </div>

                  <div className="p-6">
                    {/* Project Image */}
                    <div className="mb-4">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-40 object-cover rounded border border-gray-600"
                      />
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-minecraft text-purple-400 mb-2">{project.name}</h3>

                    {/* Project Description */}
                    <p className="text-gray-300 font-minecraft text-sm mb-4 leading-relaxed">{project.description}</p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-purple-900/50 border border-purple-600 rounded text-purple-300 font-minecraft text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-3 py-2 bg-gray-800 border border-gray-600 rounded hover:bg-gray-700 transition-colors"
                      >
                        <Github size={16} className="text-gray-300" />
                        <span className="font-minecraft text-xs text-gray-300">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 px-3 py-2 bg-purple-800 border border-purple-600 rounded hover:bg-purple-700 transition-colors"
                      >
                        <ExternalLink size={16} className="text-purple-300" />
                        <span className="font-minecraft text-xs text-purple-300">Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* More Projects Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gray-900/80 border border-gray-600 p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-yellow-400 font-minecraft text-lg mb-4">{PROJECTS_CONTENT.moreProjectsTitle}</h3>
            <p className="text-gray-300 font-minecraft text-sm">{PROJECTS_CONTENT.moreProjectsDescription}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
