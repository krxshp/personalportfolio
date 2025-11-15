'use client';
import Image from "next/image"
import { aboutData } from "@/lib/portfolio-data"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-lg md:text-2xl text-foreground glow-text mb-4">About Me</h1>
          <div className="w-32 h-1 bg-accent mx-auto" />
        </div>

        <div className="space-y-12">
          {/* Bio */}
          <div className="pixel-border bg-card p-6 md:p-8">
            <p className="text-xs md:text-sm text-foreground leading-relaxed">{aboutData.bio}</p>
          </div>

          {/* PC Setup */}
          <div className="pixel-border pixel-border-hover bg-card overflow-hidden">
            <div className="relative w-full h-64 md:h-96 bg-secondary">
              <Image
                src={aboutData.pcSetup.image || "/placeholder.svg"}
                alt={aboutData.pcSetup.title}
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerHTML =
                      '<div class="flex items-center justify-center h-full text-muted-foreground text-xs">Image not found</div>'
                  }
                }}
              />
            </div>
            <div className="p-6 md:p-8 space-y-3">
              <h2 className="text-sm md:text-base text-foreground">{aboutData.pcSetup.title}</h2>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {aboutData.pcSetup.description}
              </p>
            </div>
          </div>

          {/* Dream Car */}
          <div className="pixel-border pixel-border-hover bg-card overflow-hidden">
            <div className="relative w-full h-64 md:h-96 bg-secondary">
              <Image
                src={aboutData.dreamCar.image || "/placeholder.svg"}
                alt={aboutData.dreamCar.title}
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerHTML =
                      '<div class="flex items-center justify-center h-full text-muted-foreground text-xs">Image not found</div>'
                  }
                }}
              />
            </div>
            <div className="p-6 md:p-8 space-y-3">
              <h2 className="text-sm md:text-base text-foreground">{aboutData.dreamCar.title}</h2>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {aboutData.dreamCar.description}
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="pixel-border bg-card p-6 md:p-8">
            <h2 className="text-sm md:text-base text-foreground mb-6">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aboutData.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 bg-secondary p-3 pixel-border">
                  <div className="w-2 h-2 bg-accent" />
                  <span className="text-xs text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
