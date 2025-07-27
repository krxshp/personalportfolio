"use client"

import type { ReactNode } from "react"

interface MinecraftFontProps {
  children: ReactNode
  className?: string
}

export function MinecraftFont({ children, className = "" }: MinecraftFontProps) {
  return (
    <span
      className={`font-minecraft ${className}`}
      style={{
        fontFamily: '"Courier New", "Monaco", "Menlo", "Consolas", monospace',
        fontWeight: "bold",
        letterSpacing: "0.05em",
        textShadow: "1px 1px 0px rgba(0,0,0,0.8)",
      }}
    >
      {children}
    </span>
  )
}
