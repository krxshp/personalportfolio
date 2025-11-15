'use client';
export default function ResumePage() {
  return (
    <main className="min-h-screen pt-32 pb-16 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-lg md:text-2xl text-foreground glow-text mb-4">Resume</h1>
          <div className="w-32 h-1 bg-accent mx-auto" />
        </div>

        <div className="pixel-border bg-card p-4 md:p-8">
          <div className="w-full h-[calc(100vh-300px)] min-h-[600px]">
            <object data="/assets/resume.pdf" type="application/pdf" className="w-full h-full">
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <p className="text-xs md:text-sm text-muted-foreground text-center">
                  PDF viewer not available. Please upload your resume to:
                </p>
                <code className="text-[10px] md:text-xs text-accent bg-secondary px-4 py-2 pixel-border">
                  /assets/resume.pdf
                </code>
                <a
                  href="/assets/resume.pdf"
                  download
                  className="text-xs text-primary hover:text-accent transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </object>
          </div>
        </div>
      </div>
    </main>
  )
}
