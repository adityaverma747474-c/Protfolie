import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#learning", label: "Learning" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section observer
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.replace("#", "")))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#home" className="group flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground transition-transform duration-200 group-hover:scale-105">
            AV
          </div>
          <span className="font-semibold tracking-tight">Aditya Verma</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = active === l.href.replace("#", "");
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative rounded-lg px-3 py-1.5 text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 -z-10 rounded-lg bg-secondary" />
                  )}
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="hero" size="sm">
            <a href="#contact">Hire Me</a>
          </Button>
        </div>

        <button
          className="rounded-lg p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t bg-background md:hidden">
          <ul className="container mx-auto flex flex-col gap-1 p-4">
            {links.map((l) => {
              const isActive = active === l.href.replace("#", "");
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
                      isActive
                        ? "bg-secondary text-foreground font-medium"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
