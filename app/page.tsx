'use client';
import Image from "next/image"
import { TypingAnimation } from "@/components/typing-animation"
import { Section } from "@/components/section"
import { portfolioData } from "@/lib/portfolio-data"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10 px-4">
        <div className="text-center space-y-8 max-w-4xl">
          <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-8 float-animation">
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl" />
            <Image
              src="/assets/profile.jpg"
              alt="Krish Patel"
              fill
              className="rounded-full object-cover pixel-border"
              priority
              onError={(e) => {
                e.currentTarget.style.display = "none"
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.innerHTML =
                    '<div class="w-full h-full rounded-full bg-secondary flex items-center justify-center text-4xl">KP</div>'
                }
              }}
            />
          </div>

          <h1 className="text-sm md:text-xl lg:text-2xl text-foreground glow-text leading-relaxed">
            <TypingAnimation text="Krish Patel's Portfolio" speed={80} />
          </h1>

          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
            {"Computer Engineering @ McMaster University"}
          </p>

          <div className="mt-12 space-y-3">
            <h2 className="text-[10px] md:text-xs text-accent uppercase tracking-wider">Quick Navigation</h2>
            <nav className="flex flex-wrap justify-center gap-3">
              {portfolioData.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-[10px] md:text-xs px-3 py-2 pixel-border bg-background/50 hover:bg-accent/10 hover:border-accent transition-all duration-300"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Portfolio Sections */}
      {portfolioData.map((section) => (
        <Section key={section.id} section={section} />
      ))}

      {/* Footer */}
      <footer className="py-12 relative z-10 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[10px] md:text-xs text-muted-foreground">

          </p>
        </div>
      </footer>
    </main>
  )
}
