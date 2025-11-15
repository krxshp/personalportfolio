import type React from "react"
import type { Metadata } from "next"
import { Press_Start_2P } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { ParticlesBackground } from "@/components/particles-background"

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
})

export const metadata: Metadata = {
  title: "Krish Patel's Portfolio",
  description: "A portfolio showcasing my work and projects",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${pressStart.className} antialiased`}>
        <ParticlesBackground />
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
