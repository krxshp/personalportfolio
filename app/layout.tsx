import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "Krish Patel - Computer Engineer",
  description:
    "Personal portfolio of Krish Patel - Computer Engineering student passionate about hardware, software, and building innovative solutions.",
  generator: "v0.dev",
}

import ClientLayout from "./ClientLayout"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
