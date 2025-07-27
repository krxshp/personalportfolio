"use client"

import type React from "react"
import { motion } from "framer-motion"
import { BackButton } from "./back-button"
import { useState } from "react"
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle, AlertCircle } from "lucide-react"

// CUSTOMIZABLE CONTENT - Edit these contact details as needed
const CONTACT_CONTENT = {
  title: "Contact",
  formTitle: "Send a Message",
  contactInfoTitle: "Get In Touch",
  email: "krishpatel08@gmail.com",
  github: "https://github.com/krishpatel08",
  githubUsername: "@krishpatel08",
  linkedin: "https://linkedin.com/in/krishpatel2006",
  linkedinUsername: "@krishpatel2006",
  location: "Hamilton, ON, Canada",
  buildSomethingTitle: "Let's Build Something!",
  buildSomethingDescription:
    "Whether you have a project idea, want to collaborate, or just want to chat about technology, I'd love to hear from you. I'm always open to new opportunities and interesting conversations!",
  responseTimeTitle: "Response Time",
  responseTimeDescription:
    "I typically respond within 24 hours. For urgent matters, feel free to reach out via LinkedIn for faster response.",
}

interface ContactSectionProps {
  setCurrentSection: (section: string) => void
}

export function ContactSection({ setCurrentSection }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Handle form submission - sends email to krishpatel08@gmail.com
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Create email body
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
      `.trim()

      // Create mailto link
      const mailtoLink = `mailto:${CONTACT_CONTENT.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(emailBody)}`

      // Open email client
      window.location.href = mailtoLink

      // Reset form and show success
      setFormData({ name: "", email: "", message: "" })
      setSubmitStatus("success")
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
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
        <h1 className="text-4xl font-minecraft text-green-400 mb-8 text-center">{CONTACT_CONTENT.title}</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form - Styled like Minecraft Sign */}
          <div className="bg-amber-900/20 border-4 border-amber-700 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-minecraft text-yellow-400 mb-6 text-center">{CONTACT_CONTENT.formTitle}</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 font-minecraft text-sm mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-600 rounded font-minecraft text-gray-300 focus:border-green-500 focus:outline-none"
                  placeholder="Your name..."
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 font-minecraft text-sm mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-600 rounded font-minecraft text-gray-300 focus:border-green-500 focus:outline-none"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 font-minecraft text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-600 rounded font-minecraft text-gray-300 focus:border-green-500 focus:outline-none resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-800 border-2 border-green-600 rounded font-minecraft text-green-300 hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                <Send size={20} />
                {isSubmitting ? "Opening Email..." : "Send Message"}
              </motion.button>
            </form>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 text-green-400 font-minecraft text-sm"
              >
                <CheckCircle size={16} />
                Email client opened! Please send the message.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 text-red-400 font-minecraft text-sm"
              >
                <AlertCircle size={16} />
                Error opening email client. Please try again.
              </motion.div>
            )}
          </div>

          {/* Contact Info & Links */}
          <div className="space-y-6">
            <div className="bg-black/50 border-2 border-gray-600 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-minecraft text-yellow-400 mb-6">{CONTACT_CONTENT.contactInfoTitle}</h2>

              <div className="space-y-4">
                {/* Email */}
                <motion.a
                  href={`mailto:${CONTACT_CONTENT.email}`}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-gray-800 border border-gray-600 rounded hover:bg-gray-700 transition-colors"
                >
                  <Mail size={24} className="text-red-400" />
                  <div>
                    <div className="font-minecraft text-gray-300">Email</div>
                    <div className="font-minecraft text-sm text-gray-400">{CONTACT_CONTENT.email}</div>
                  </div>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href={CONTACT_CONTENT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-gray-800 border border-gray-600 rounded hover:bg-gray-700 transition-colors"
                >
                  <Github size={24} className="text-gray-300" />
                  <div>
                    <div className="font-minecraft text-gray-300">GitHub</div>
                    <div className="font-minecraft text-sm text-gray-400">{CONTACT_CONTENT.githubUsername}</div>
                  </div>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href={CONTACT_CONTENT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-gray-800 border border-gray-600 rounded hover:bg-gray-700 transition-colors"
                >
                  <Linkedin size={24} className="text-blue-400" />
                  <div>
                    <div className="font-minecraft text-gray-300">LinkedIn</div>
                    <div className="font-minecraft text-sm text-gray-400">{CONTACT_CONTENT.linkedinUsername}</div>
                  </div>
                </motion.a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-gray-800 border border-gray-600 rounded">
                  <MapPin size={24} className="text-green-400" />
                  <div>
                    <div className="font-minecraft text-gray-300">Location</div>
                    <div className="font-minecraft text-sm text-gray-400">{CONTACT_CONTENT.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Let's Build Something Section */}
            <div className="bg-green-900/30 border border-green-600 p-6 rounded-lg">
              <h3 className="text-green-300 font-minecraft text-lg mb-3">{CONTACT_CONTENT.buildSomethingTitle}</h3>
              <p className="text-gray-300 font-minecraft text-sm leading-relaxed">
                {CONTACT_CONTENT.buildSomethingDescription}
              </p>
            </div>

            {/* Response Time Section */}
            <div className="bg-blue-900/30 border border-blue-600 p-6 rounded-lg">
              <h3 className="text-blue-300 font-minecraft text-lg mb-3">{CONTACT_CONTENT.responseTimeTitle}</h3>
              <p className="text-gray-300 font-minecraft text-sm">{CONTACT_CONTENT.responseTimeDescription}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
