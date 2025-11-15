import { ContentBlock as ContentBlockComponent } from "./content-block"
import type { Section as SectionType } from "@/lib/portfolio-data"

interface SectionProps {
  section: SectionType
}

export function Section({ section }: SectionProps) {
  return (
    <section id={section.id} className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-lg md:text-2xl text-foreground glow-text mb-4">{section.title}</h2>
          <div className="w-32 h-1 bg-accent mx-auto" />
        </div>

        {/* Section Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {section.blocks.map((block) => (
            <ContentBlockComponent key={block.id} block={block} />
          ))}
        </div>
      </div>
    </section>
  )
}
