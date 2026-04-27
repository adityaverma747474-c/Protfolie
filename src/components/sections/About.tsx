import { GraduationCap, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-14">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            01 — About Me
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
            A little bit{" "}
            <span className="font-serif italic gradient-text">about me</span>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-5 md:gap-14">
          <div className="md:col-span-3 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Hello! I'm{" "}
              <span className="text-foreground font-medium">Aditya Verma</span>,
              a young developer who recently completed Class 12 and is now
              starting an exciting journey into the world of programming and
              technology.
            </p>
            <p>
              I'm planning to pursue a{" "}
              <span className="text-foreground font-medium">
                BCA in Artificial Intelligence & Data Science
              </span>
              . My goal is to learn how computers can think, learn from data,
              and help solve real-world problems.
            </p>
            <p>
              I'm a beginner, but I'm curious, hard-working, and I love building
              small projects that I can share with the world. Every day I learn
              something new, and I enjoy turning ideas into working websites.
            </p>
          </div>

          <div className="md:col-span-2 space-y-3">
            {[
              {
                icon: GraduationCap,
                title: "Student",
                desc: "Just completed 12th",
              },
              {
                icon: Rocket,
                title: "2 Live Projects",
                desc: "Built & deployed online",
              },
              {
                icon: Lightbulb,
                title: "Always Learning",
                desc: "AI & Data Science",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-center gap-4 rounded-xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{title}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
