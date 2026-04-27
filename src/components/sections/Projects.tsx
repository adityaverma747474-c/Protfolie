import { ExternalLink, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import mockupOfficial from "@/assets/mockup-doearno-official.jpg";
import mockupAbout from "@/assets/mockup-doearno-about.jpg";

const projects = [
  {
    title: "Doearno — Official",
    description:
      "The official website of Doearno. Built with HTML and basic web development to present the brand online with a clean, simple layout.",
    url: "https://official.doearno.in",
    tag: "Official Website",
    image: mockupOfficial,
    stack: ["HTML", "CSS", "Web"],
  },
  {
    title: "Doearno — About",
    description:
      "An informational website that shares the story, vision, and details about Doearno. My second live project on the web.",
    url: "https://about.doearno.in",
    tag: "Info Website",
    image: mockupAbout,
    stack: ["HTML", "CSS", "Content"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-14">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            02 — Projects
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Things I've <span className="font-serif italic gradient-text-warm">built</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Two live websites I created as a beginner, both deployed and
            available on the internet.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Live Preview area */}
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">

                {/* Live Iframe */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <iframe
                    src={p.url}
                    title={p.title}
                    className="absolute h-[200%] w-[200%] origin-top-left scale-[0.5] border-none opacity-0 transition-opacity duration-1000"
                    onLoad={(e) => {
                      (e.target as HTMLIFrameElement).classList.remove('opacity-0');
                      (e.target as HTMLIFrameElement).classList.add('opacity-100');
                    }}
                  />
                </div>

                <span className="absolute right-4 top-4 z-20 rounded-full bg-background px-3 py-1 text-[10px] font-mono font-medium uppercase tracking-wider text-muted-foreground border">
                  {p.tag}
                </span>
              </div>

              {/* Content */}
              <div className="relative flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight md:text-xl">
                    {p.title}
                  </h3>
                </div>

                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                {/* Tech stack tags */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                  <span className="break-all font-mono text-xs text-muted-foreground">
                    {p.url.replace("https://", "")}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-200 group-hover:gap-2.5">
                    Visit
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-sm text-muted-foreground">
            More projects coming soon as I keep learning ✨
          </p>
          <Button asChild variant="outline_glow">
            <a href="#contact">Have an idea? Let's talk</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
