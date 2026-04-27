import { Mail, Globe, Github, Linkedin, Send, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="rounded-2xl border bg-card p-8 md:p-14">
          <div className="relative text-center">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
              06 — Contact
            </p>
            <h2 className="text-balance mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              Let's{" "}
              <span className="font-serif italic gradient-text">connect</span>
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-muted-foreground">
              I'm always open to learning, collaborating on small projects, or
              just having a friendly chat about tech. Feel free to reach out!
            </p>

            <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="lg">
                <a href="mailto:adityaverma747474@gmail.com">
                  <Send className="h-4 w-4" />
                  Send Me an Email
                </a>
              </Button>
              <Button asChild variant="outline_glow" size="lg">
                <a
                  href="https://www.linkedin.com/in/aditya-verma-0910272ba"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>

            <div className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "adityaverma747474@gmail.com",
                  href: "mailto:adityaverma747474@gmail.com",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "Aditya Verma",
                  href: "https://www.linkedin.com/in/aditya-verma-0910272ba",
                },
                {
                  icon: Globe,
                  label: "Website",
                  value: "doearno.in",
                  href: "https://official.doearno.in",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 rounded-xl border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:border-foreground/20"
                >
                  <c.icon className="h-5 w-5 text-primary" />
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="break-all text-center text-sm font-medium">
                    {c.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-center gap-6 text-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            {[
              { Icon: Github, label: "GitHub", href: "https://github.com/" },
              {
                Icon: Linkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/aditya-verma-0910272ba",
              },
              { Icon: Twitter, label: "Twitter", href: "https://twitter.com/" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-primary hover:border-primary/30 hover:shadow-sm"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} Aditya Verma</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
