const learning = [
  { name: "Python", note: "For AI & Data Science" },
  { name: "CSS & Modern Layouts", note: "Flexbox, Grid, responsive" },
  { name: "JavaScript Basics", note: "Making websites interactive" },
  { name: "Data Structures", note: "Arrays, lists, problem solving" },
  { name: "Git & GitHub", note: "Version control & collaboration" },
  { name: "Intro to Machine Learning", note: "How AI actually works" },
];

const Learning = () => {
  return (
    <section id="learning" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-14">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            05 — Currently Learning
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
            What I'm{" "}
            <span className="font-serif italic gradient-text-warm">
              learning now
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Learning never stops. Here's what I'm currently exploring to grow as
            a developer.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {learning.map((item) => (
            <div
              key={item.name}
              className="group rounded-xl border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:border-primary/30"
            >
              <h3 className="mb-1 font-semibold text-sm">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border bg-secondary/50 p-5 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            "Every expert was once a beginner. I'm just enjoying the process."
            🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Learning;
