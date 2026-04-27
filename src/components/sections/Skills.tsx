import { useEffect, useRef, useState } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const CIcon = () => (
  <svg viewBox="0 0 128 128" className="h-7 w-7" aria-hidden="true">
    <path
      fill="#283593"
      d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.7-1.3-1.6-2.4-2.4-2.7z"
    />
    <path
      fill="#5C6BC0"
      d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
    />
    <path
      fill="#FFF"
      d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"
    />
  </svg>
);

const JavaIcon = () => (
  <svg viewBox="0 0 128 128" className="h-7 w-7" aria-hidden="true">
    <path
      fill="#0074BD"
      d="M47.6 98.6s-4.9 2.9 3.5 3.8c10.1 1.2 15.4 1 26.6-1.1 0 0 3 1.9 7.1 3.5-25.1 10.7-56.8-.6-37.2-6.2zM44.5 84.4s-5.5 4.1 2.9 4.9c10.8 1.1 19.4 1.2 34.2-1.7 0 0 2 2.1 5.3 3.2-30.4 8.9-64.2.7-42.4-6.4z"
    />
    <path
      fill="#EA2D2E"
      d="M70.7 60.2c6.2 7.1-1.6 13.5-1.6 13.5s15.7-8.1 8.5-18.3c-6.7-9.5-11.8-14.2 16-30.3 0 .1-43.9 11-22.9 35.1z"
    />
    <path
      fill="#0074BD"
      d="M97.1 109s3.6 3-4 5.3c-14.4 4.4-60 5.7-72.7.2-4.6-2 4-4.8 6.7-5.4 2.8-.6 4.4-.5 4.4-.5-5.1-3.6-32.7 7-14.1 10 50.9 8.3 92.8-3.7 79.7-9.6zM50 69.7s-23.2 5.5-8.2 7.5c6.3.8 19 .7 30.8-.3 9.6-.8 19.3-2.5 19.3-2.5s-3.4 1.5-5.9 3.1c-23.6 6.2-69.1 3.3-56-3.1 11-5.4 19.9-4.7 19.9-4.7zM91.6 92.9c24-12.5 12.9-24.4 5.1-22.8-1.9.4-2.8.7-2.8.7s.7-1.2 2.2-1.7c16.5-5.8 29.1 17.1-4.9 24.3.1.1.3-.2.4-.5z"
    />
    <path
      fill="#EA2D2E"
      d="M77.6 0s13.3 13.3-12.6 33.7c-20.8 16.4-4.8 25.8 0 36.5-12.1-10.9-21-20.5-15-29.4C58.6 27.6 83 21.3 77.6 0z"
    />
    <path
      fill="#0074BD"
      d="M52.5 128.1c23 1.5 58.4-.8 59.2-11.7 0 0-1.6 4.1-19.1 7.4-19.7 3.7-44.1 3.3-58.5.9 0 0 3 2.4 18.4 3.4z"
    />
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 128 128" className="h-7 w-7" aria-hidden="true">
    <linearGradient
      id="py-a"
      gradientUnits="userSpaceOnUse"
      x1="70.252"
      y1="1237.476"
      x2="170.659"
      y2="1151.089"
      gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
    >
      <stop offset="0" stopColor="#5A9FD4" />
      <stop offset="1" stopColor="#306998" />
    </linearGradient>
    <linearGradient
      id="py-b"
      gradientUnits="userSpaceOnUse"
      x1="209.474"
      y1="1098.811"
      x2="173.62"
      y2="1149.537"
      gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
    >
      <stop offset="0" stopColor="#FFD43B" />
      <stop offset="1" stopColor="#FFE873" />
    </linearGradient>
    <path
      fill="url(#py-a)"
      d="M63.4 1.5c-5.2 0-10.1.4-14.5 1.2-12.9 2.3-15.2 7-15.2 15.9v11.7h30.5v3.9H22.4c-8.9 0-16.7 5.4-19.2 15.6C.4 60.5.3 67.7 3.2 79.3c2.2 9.1 7.5 15.6 16.4 15.6h10.5V81c0-10.2 8.8-19.1 19.2-19.1h30.4c8.5 0 15.3-7 15.3-15.6V18.6c0-8.3-7-14.6-15.3-15.9-5.2-.9-10.7-1.2-15.8-1.2zM47 11c3.2 0 5.7 2.6 5.7 5.8 0 3.2-2.6 5.8-5.7 5.8-3.2 0-5.7-2.6-5.7-5.8 0-3.3 2.5-5.8 5.7-5.8z"
    />
    <path
      fill="url(#py-b)"
      d="M97.7 30.2v13.5c0 10.6-9 19.5-19.2 19.5H47.9c-8.4 0-15.3 7.2-15.3 15.6v29.2c0 8.3 7.2 13.2 15.3 15.6 9.7 2.9 19 3.4 30.4 0 7.7-2.2 15.3-6.7 15.3-15.6V96.1H63.4v-3.9h45.8c8.9 0 12.2-6.2 15.3-15.6 3.2-9.6 3.1-18.9 0-31.2-2.2-8.9-6.4-15.6-15.3-15.6H97.7zM80.5 103c3.2 0 5.7 2.6 5.7 5.8 0 3.2-2.6 5.8-5.7 5.8-3.2 0-5.7-2.6-5.7-5.8-.1-3.3 2.5-5.8 5.7-5.8z"
    />
  </svg>
);

const HtmlIcon = () => (
  <svg viewBox="0 0 128 128" className="h-7 w-7" aria-hidden="true">
    <path
      fill="#E44D26"
      d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
    />
    <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z" />
    <path
      fill="#EBEBEB"
      d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
    />
    <path
      fill="#FFF"
      d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
    />
  </svg>
);

const PuzzleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7"
    fill="none"
    stroke="hsl(var(--primary))"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
  </svg>
);

const BrainIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7"
    fill="none"
    stroke="hsl(var(--secondary))"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
  </svg>
);

const levelStyles: Record<string, string> = {
  Beginner: "bg-secondary text-muted-foreground",
  Learning: "bg-secondary text-muted-foreground",
  Practicing: "bg-secondary text-muted-foreground",
  Exploring: "bg-secondary text-muted-foreground",
  Interest: "bg-secondary text-muted-foreground",
};

const levelDot: Record<string, string> = {
  Beginner: "bg-foreground",
  Learning: "bg-foreground/60",
  Practicing: "bg-foreground/80",
  Exploring: "bg-foreground/40",
  Interest: "bg-foreground/30",
};

type Skill = {
  Icon: () => JSX.Element;
  name: string;
  level: string;
  progress: number;
  desc: string;
  details: string[];
  span?: string;
};

const skills: Skill[] = [
  {
    Icon: CIcon,
    name: "C Programming",
    level: "Beginner",
    progress: 45,
    desc: "Variables, loops, functions, and pointers.",
    details: [
      "Data types & control flow",
      "Functions, arrays & strings",
      "Intro to pointers",
      "Console programs",
    ],
    span: "md:col-span-2",
  },
  {
    Icon: JavaIcon,
    name: "Java Basics",
    level: "Beginner",
    progress: 35,
    desc: "OOP basics, classes, methods, and console programs.",
    details: [
      "Classes & objects",
      "Inheritance & encapsulation",
      "Loops & arrays",
      "Console apps",
    ],
  },
  {
    Icon: PythonIcon,
    name: "Python",
    level: "Exploring",
    progress: 20,
    desc: "Exploring Python for AI & data work.",
    details: [
      "Syntax basics",
      "Lists, dicts & functions",
      "Planning ML basics next",
    ],
  },
  {
    Icon: HtmlIcon,
    name: "HTML & Web",
    level: "Learning",
    progress: 60,
    desc: "Semantic structure & responsive layouts.",
    details: [
      "Semantic tags",
      "Forms & links",
      "Responsive basics",
      "Live deployment",
    ],
    span: "md:col-span-2",
  },
  {
    Icon: PuzzleIcon,
    name: "Problem Solving",
    level: "Practicing",
    progress: 50,
    desc: "Breaking problems into small logical steps.",
    details: ["Logical thinking", "Basic algorithms", "Debugging programs"],
  },
  {
    Icon: BrainIcon,
    name: "AI & Data Science",
    level: "Interest",
    progress: 15,
    desc: "Curious about how machines learn from data.",
    details: ["Reading AI basics", "ML curiosity", "Planning BCA in AI & DS"],
  },
];

const quickList = [
  "C Programming",
  "Java Basics",
  "Python",
  "HTML & Web",
  "Problem Solving",
  "AI & Data Science",
];

const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="mb-14">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
              03 — Skills
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
              What I{" "}
              <span className="font-serif italic gradient-text-cool">know</span>
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              A snapshot of the tools, languages, and topics I'm working with
              right now — plus where I'm heading next.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto mb-12 max-w-3xl rounded-xl border p-6 md:p-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              At a glance
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {quickList.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="grid auto-rows-fr gap-5 md:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 90} className={s.span ?? ""}>
              <HoverCard openDelay={120} closeDelay={80}>
                <HoverCardTrigger asChild>
                  <div
                    tabIndex={0}
                    className="group relative h-full cursor-default overflow-hidden rounded-xl border p-6 outline-none transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:border-foreground/20 focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <s.Icon />
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${
                          levelStyles[s.level] ?? levelStyles.Interest
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${levelDot[s.level] ?? levelDot.Interest}`}
                        />
                        {s.level}
                      </span>
                    </div>
                    <h4 className="mb-2 text-lg font-semibold">{s.name}</h4>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {s.desc}
                    </p>

                    <div className="mt-auto">
                      <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        <span>Progress</span>
                        <span>{s.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                          style={{ width: `${s.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent
                  align="start"
                  side="top"
                  className="w-72 rounded-xl border p-5 shadow-lg"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                      <s.Icon />
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-none">
                        {s.name}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        {s.level} · {s.progress}%
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {s.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </HoverCardContent>
              </HoverCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="relative mt-12 overflow-hidden rounded-xl border p-7 md:p-10">
            <div className="relative grid gap-6 md:grid-cols-[auto,1fr] md:items-start md:gap-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
                  A quick note
                </p>
                <h3 className="mb-3 font-serif text-2xl italic md:text-3xl">
                  On AI, Data Science & the Web
                </h3>
                <p className="text-balance leading-relaxed text-muted-foreground md:text-lg">
                  I'm just getting started, but I'm genuinely excited about{" "}
                  <span className="font-medium text-foreground">
                    Artificial Intelligence and Data Science
                  </span>{" "}
                  — understanding how machines can learn from data and help
                  solve real problems. Alongside that, I'm building a strong
                  foundation in{" "}
                  <span className="font-medium text-foreground">
                    basic web development
                  </span>{" "}
                  so I can turn my ideas into real, live websites that anyone
                  can visit.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
