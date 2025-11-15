"use client"

import Image from "next/image"
import type { ContentBlock as ContentBlockType } from "@/lib/portfolio-data"

interface ContentBlockProps {
  block: ContentBlockType
}

export function ContentBlock({ block }: ContentBlockProps) {
  const renderContent = () => {
    if (block.type === "upcoming") {
      return (
        <div className="flex items-center justify-center h-48 md:h-64 bg-secondary">
          <div className="text-4xl text-muted-foreground">?</div>
        </div>
      )
    }

    if (block.video) {
      return (
        <video
          src={block.video}
          controls
          className="w-full min-h-48 md:min-h-64 aspect-video object-contain bg-secondary"
          onError={(e) => {
            e.currentTarget.style.display = "none"
            e.currentTarget.nextElementSibling?.classList.remove("hidden")
          }}
        >
          Your browser does not support the video tag.
        </video>
      )
    }

    if (block.image) {
      return (
        <div className="relative w-full min-h-48 md:min-h-64 bg-secondary overflow-hidden flex items-center justify-center">
          <Image
            src={block.image || "/placeholder.svg"}
            alt={block.title}
            fill
            className="object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none"
              e.currentTarget.parentElement?.classList.add("flex", "items-center", "justify-center")
              if (e.currentTarget.parentElement) {
                e.currentTarget.parentElement.innerHTML =
                  '<div class="text-muted-foreground text-xs text-center p-4">Image not found</div>'
              }
            }}
          />
        </div>
      )
    }

    return null
  }

  return (
    <div
      className={`pixel-border pixel-border-hover bg-card overflow-hidden transition-all duration-300 flex flex-col ${
        block.type === "small" ? "col-span-1" : "col-span-1"
      }`}
    >
      {renderContent()}

      <div className="p-4 md:p-6 space-y-2 flex-1">
        {/* Dates */}
        {(block.startDate || block.endDate) && (
          <div className="text-[10px] md:text-xs text-accent">
            {block.startDate} {block.endDate && `→ ${block.endDate}`}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xs md:text-sm text-foreground font-semibold leading-relaxed">
          {block.title}
        </h3>

        {/* Company (white text) */}
        {block.company && (
          <p className="text-[10px] md:text-xs text-white italic leading-snug">
            {block.company}
          </p>
        )}

        {/* Description */}
        <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">
          {block.description}
        </p>

        {/* Skills */}
        {block.skills && block.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {block.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-[8px] md:text-[10px] bg-secondary text-accent border border-accent/30 hover:border-accent/60 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex flex-col gap-1 mt-2">
          {block.certificateLink && (
            <a
              href={block.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] md:text-xs text-accent hover:text-primary transition-colors"
            >
              View Certificate →
            </a>
          )}
          {block.driveLink && (
            <a
              href={block.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] md:text-xs text-accent hover:text-primary transition-colors"
            >
              View on Drive →
            </a>
          )}
          {block.link && (
            <a
              href={block.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] md:text-xs text-accent hover:text-primary transition-colors"
            >
              Visit Project →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
