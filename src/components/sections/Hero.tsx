import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroScene from "@/components/HeroScene";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-20">
      {/* Subtle dot grid */}
      <div className="pointer-events-none absolute inset-0 grid-pattern" />

      <div className="container relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-8 px-4 py-10 lg:grid-cols-2 lg:gap-4 lg:py-20">
        {/* LEFT — Text */}
        <div className="relative z-20 flex flex-col items-start text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium tracking-wide text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          <h1 className="mb-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="font-serif italic gradient-text">Aditya</span>
            <br />
            Verma
          </h1>

          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            Aspiring AI & Data Science Developer
          </p>

          <p className="mb-8 max-w-lg text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            A curious developer building on the web and exploring{" "}
            <span className="text-foreground font-medium">artificial intelligence</span>.
            Every day is a new chance to learn something meaningful.
          </p>

          <div className="mb-10 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="#projects">
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <a
              href="/resume"
              className="ghost-border inline-flex h-11 items-center justify-center gap-2 rounded-lg px-6 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <Button asChild variant="outline_glow" size="lg">
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid w-full max-w-sm grid-cols-3 gap-3">
            {[
              { value: "2", label: "Live Projects" },
              { value: "3+", label: "Languages" },
              { value: "∞", label: "Curiosity" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl border p-4 text-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <p className="font-serif text-2xl font-semibold gradient-text-warm">{s.value}</p>
                <p className="mt-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — 3D Scene */}
        <div className="relative h-[400px] w-full lg:h-[600px]">
          <HeroScene />

          {/* Floating badges — clean style */}

          <div className="pointer-events-none absolute bottom-12 right-4 hidden animate-float md:block" style={{ animationDelay: "1s" }}>
            <div className="flex items-center gap-2 rounded-xl border bg-background px-4 py-2 shadow-sm">
              <span className="text-sm">📍</span>
              <span className="text-sm font-medium">India</span>
            </div>
          </div>
          <div className="pointer-events-none absolute right-8 top-24 hidden animate-float md:block" style={{ animationDelay: "2.2s" }}>
            <div className="flex items-center gap-2 rounded-xl border bg-background px-3.5 py-1.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-medium">Learning Daily</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
