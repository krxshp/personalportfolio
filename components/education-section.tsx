"use client"

import { motion } from "framer-motion"
import { BackButton } from "./back-button"
import { GraduationCap, BookOpen, Users, FileCheck, ExternalLink } from "lucide-react"

// CUSTOMIZABLE CONTENT - Updated education details
const EDUCATION_DATA = [
  {
    degree: "Bachelor of Engineering - Computer Engineering",
    school: "McMaster University",
    period: "2024 – Present",
    location: "Hamilton, ON, Canada",
    description:
      "Pursuing comprehensive education in computer engineering with focus on embedded systems, digital logic, and software-hardware integration.",
    icon: GraduationCap,
    color: "blue",
    highlights: [
      "Embedded Systems Design",
      "Digital Signal Processing",
      "Computer Architecture",
      "Software Engineering",
      "Circuit Analysis",
    ],
    gpa: "3.7/4.0",
    status: "In Progress",
  },
  {
    degree: "High School Diploma",
    school: "Central Peel Secondary School",
    period: "2020 – 2023",
    location: "Brampton, ON, Canada",
    description:
      "AP Program student with 97.8% average and Gold medallion. Focused on advanced mathematics, sciences, and computer programming.",
    icon: GraduationCap,
    color: "green",
    highlights: ["AP Calculus AB", "Advanced Functions", "Physics", "Chemistry", "Computer Science"],
    gpa: "97.8%",
    status: "Completed",
  },
]

// EXAMS SECTION - Updated certifications with proper descriptions and links
const EXAMS_DATA = [
  {
    name: "Microsoft Azure Fundamentals",
    code: "AZ-900",
    status: "Certified",
    date: "2024",
    score: "850/1000",
    description:
      "Foundational knowledge of cloud services, Azure architecture, security, privacy, compliance, and trust. Covers core Azure services, pricing, and support models.",
    color: "blue",
    logo: "☁️",
    link: "https://learn.microsoft.com/en-us/users/krishpatel13/credentials/f0e3c8d8f579fa4c?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    name: "Microsoft Azure Data Scientist Associate",
    code: "DP-100",
    status: "Certified",
    date: "2024",
    score: "780/1000",
    description:
      "Advanced skills in implementing and running machine learning workloads on Azure, including data preparation, model training, deployment, and monitoring using Azure Machine Learning.",
    color: "blue",
    logo: "🤖",
    link: "https://learn.microsoft.com/en-us/users/krishpatel-5635/credentials/6563383c91d05976?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    name: "Quantitative Techniques",
    code: "Columbia University",
    status: "Certified",
    date: "2024",
    description:
      "Comprehensive course covering statistical analysis, data visualization, regression analysis, and quantitative research methods. Focus on applying mathematical and statistical techniques to real-world data analysis problems.",
    color: "purple",
    logo: "📊",
    link: "https://badges.plus.columbia.edu/ab1a1f34-cc62-47bb-b550-d137e7f08839#acc.eS9HCc7Z",
  },
  {
    name: "AP Calculus AB",
    code: "CALC AB",
    status: "Completed",
    date: "2023",
    score: "5/5",
    description: "Advanced Placement Calculus covering limits, derivatives, and integrals.",
    color: "green",
    logo: "📐",
  },
]

const EDUCATION_CONTENT = {
  title: "Education",
  subtitle: "Academic Journey",
  examsTitle: "Certifications & Exams",
  examsSubtitle: "Professional Certifications and Academic Achievements",
  relevantCoursework: {
    title: "Relevant Coursework",
    courses: [
      "Data Structures & Algorithms",
      "Computer Systems & Architecture",
      "Digital Logic Design",
      "Embedded Systems Programming",
      "Signal Processing",
      "Software Design & Development",
      "Circuit Analysis & Design",
      "Database Systems",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  academicProjects: {
    title: "Academic Projects (ENG 1P13)",
    projects: [
      {
        name: "P1 Project - Airport Systems",
        description:
          "Comprehensive analysis and design of airport management systems, focusing on passenger flow optimization and resource allocation using engineering principles.",
        tech: ["Systems Analysis", "Engineering Design", "Data Analysis", "Project Management"],
      },
      {
        name: "P2 Project",
        description:
          "Advanced engineering project involving problem-solving methodologies and technical implementation as part of the ENG 1P13 curriculum.",
        tech: ["Engineering Methods", "Technical Analysis", "Problem Solving", "Documentation"],
      },
    ],
  },
}

interface EducationSectionProps {
  setCurrentSection: (section: string) => void
}

export function EducationSection({ setCurrentSection }: EducationSectionProps) {
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

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "certified":
      case "completed":
        return "text-green-400"
      case "in progress":
        return "text-yellow-400"
      case "planned":
        return "text-blue-400"
      default:
        return "text-gray-400"
    }
  }

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
        <h1 className="text-4xl minecraft-font text-green-400 mb-8 text-center">{EDUCATION_CONTENT.title}</h1>
        <p className="text-center text-gray-400 minecraft-font mb-12">{EDUCATION_CONTENT.subtitle}</p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Education Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600"></div>

              {/* Education Items */}
              {EDUCATION_DATA.map((edu, index) => {
                const Icon = edu.icon
                const colorClasses = getColorClasses(edu.color)

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

                    {/* Education Content */}
                    <div className="ml-8 flex-1">
                      <div className="bg-black/50 border-2 border-gray-600 rounded-lg p-6 backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                          <div>
                            <h3 className="text-xl minecraft-font text-green-400 mb-1">{edu.degree}</h3>
                            <h4 className="text-lg minecraft-font text-gray-300">{edu.school}</h4>
                            <p className="text-sm minecraft-font text-gray-400">{edu.location}</p>
                          </div>
                          <div className="text-right mt-2 md:mt-0">
                            <span className="text-yellow-400 minecraft-font text-sm block">{edu.period}</span>
                            <span className={`minecraft-font text-xs ${getStatusColor(edu.status)}`}>{edu.status}</span>
                            {edu.gpa && (
                              <span className="text-blue-400 minecraft-font text-xs block">
                                {edu.gpa.includes("%") ? `Average: ${edu.gpa}` : `GPA: ${edu.gpa}`}
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="text-gray-400 minecraft-font text-sm mb-4 leading-relaxed">{edu.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, i) => (
                            <span key={i} className={`px-3 py-1 rounded border text-xs minecraft-font ${colorClasses}`}>
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-6">
            {/* Relevant Coursework */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-black/50 border-2 border-gray-600 rounded-lg p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl minecraft-font text-yellow-400 mb-4 flex items-center gap-2">
                <BookOpen size={20} />
                {EDUCATION_CONTENT.relevantCoursework.title}
              </h3>
              <div className="space-y-2">
                {EDUCATION_CONTENT.relevantCoursework.courses.map((course, index) => (
                  <div key={index} className="text-gray-300 minecraft-font text-sm">
                    • {course}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Exams & Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl minecraft-font text-green-400 mb-4 text-center flex items-center justify-center gap-2">
            <FileCheck size={28} />
            {EDUCATION_CONTENT.examsTitle}
          </h2>
          <p className="text-center text-gray-400 minecraft-font mb-8">{EDUCATION_CONTENT.examsSubtitle}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXAMS_DATA.map((exam, index) => {
              const colorClasses = getColorClasses(exam.color)

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className="bg-black/50 border-2 border-gray-600 rounded-lg p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                >
                  {/* Exam Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{exam.logo}</span>
                      <div>
                        <h4 className="text-lg minecraft-font text-green-400">{exam.name}</h4>
                        <p className="text-sm minecraft-font text-gray-400">{exam.code}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`minecraft-font text-sm ${getStatusColor(exam.status)}`}>{exam.status}</span>
                      <p className="text-xs minecraft-font text-gray-400">{exam.date}</p>
                    </div>
                  </div>

                  {/* Exam Description */}
                  <p className="text-gray-300 minecraft-font text-sm mb-4 leading-relaxed">{exam.description}</p>

                  {/* Score Display */}
                  {exam.score && (
                    <div className={`px-3 py-2 rounded border ${colorClasses} text-center mb-4`}>
                      <span className="minecraft-font text-sm">Score: {exam.score}</span>
                    </div>
                  )}

                  {/* Certification Link */}
                  {exam.link && (
                    <a
                      href={exam.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-green-800 border border-green-600 rounded hover:bg-green-700 transition-colors w-full justify-center"
                    >
                      <ExternalLink size={16} className="text-green-300" />
                      <span className="minecraft-font text-xs text-green-300">View Certificate</span>
                    </a>
                  )}

                  {/* Status Badge */}
                  <div className="mt-4">
                    <span className={`px-3 py-1 rounded border text-xs minecraft-font ${colorClasses}`}>
                      {exam.status === "Certified" || exam.status === "Completed" ? "✅ " : "🔄 "}
                      {exam.status}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Academic Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl minecraft-font text-green-400 mb-6 text-center flex items-center justify-center gap-2">
            <Users size={24} />
            {EDUCATION_CONTENT.academicProjects.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {EDUCATION_CONTENT.academicProjects.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="bg-black/50 border-2 border-gray-600 rounded-lg p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-lg minecraft-font text-green-400 mb-2">{project.name}</h4>
                <p className="text-gray-300 minecraft-font text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-900/50 border border-purple-600 rounded text-purple-300 minecraft-font text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
