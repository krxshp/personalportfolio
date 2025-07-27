"use client"

import type React from "react"
import { Inter } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const pixelFont = {
  fontFamily: '"Courier New", "Monaco", "Menlo", "Consolas", monospace',
  fontWeight: "bold",
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
            --font-sans: ${inter.variable};
            --font-mono: ${GeistMono.variable};
          }
          .font-minecraft {
            font-family: ${pixelFont.fontFamily};
            font-weight: ${pixelFont.fontWeight};
            letter-spacing: 0.05em;
            line-height: 1.6;
          }
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
