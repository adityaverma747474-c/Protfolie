import { GraduationCap, School, BookOpen } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    period: "Upcoming",
    title: "Bachelor of Computer Applications (BCA)",
    place: "AI & Data Science Specialization",
    desc: "Planning to start my BCA journey with a focus on Artificial Intelligence and Data Science to build a strong foundation for my career.",
  },
  {
    icon: School,
    period: "Recently Completed",
    title: "Class 12 — Higher Secondary",
    place: "Successfully completed",
    desc: "Finished my 12th standard and now stepping into the world of computer science and software development.",
  },
  {
    icon: BookOpen,
    period: "Self Taught",
    title: "Programming Fundamentals",
    place: "Online resources & practice",
    desc: "Learned C, Java, and HTML through online tutorials, documentation, and by building small practice projects.",
  },
];

const Education = () => {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-14">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            04 — Education
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
            My learning{" "}
            <span className="font-serif italic gradient-text">journey</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-7" />

          <div className="space-y-6">
            {items.map((item, i) => (
              <div key={i} className="relative pl-14 md:pl-18">
                <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground md:h-14 md:w-14 md:left-0">
                  <item.icon className="h-4 w-4 md:h-5 md:w-5" />
                </div>

                <div className="rounded-xl border p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">
                  <p className="mb-1 font-mono text-xs uppercase tracking-widest text-primary">
                    {item.period}
                  </p>
                  <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    {item.place}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
