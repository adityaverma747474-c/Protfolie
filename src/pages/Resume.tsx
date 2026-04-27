import { useEffect } from "react";
import {
  ArrowLeft,
  Download,
  Mail,
  Globe,
  Linkedin,
  MapPin,
  Phone,
} from "lucide-react";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="print:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b px-4 py-3 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </a>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-5 py-2 text-sm font-medium hover:bg-foreground/90 transition-colors"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </button>
      </div>

      <div className="print:pt-0 pt-20 pb-12 flex justify-center bg-gray-50 print:bg-white min-h-screen">
        <div
          className="w-full max-w-[210mm] bg-white shadow-lg print:shadow-none px-12 py-10 print:px-8 print:py-6"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          <header className="mb-8 border-b pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-1">
              Aditya Verma
            </h1>
            <p className="text-base font-medium text-gray-500 mb-4">
              Aspiring AI & Data Science Developer
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-500">
              <a
                href="mailto:adityaverma747474@gmail.com"
                className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                adityaverma747474@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-verma-0910272ba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5" />
                linkedin.com/in/aditya-verma
              </a>
              <a
                href="https://official.doearno.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
              >
                <Globe className="h-3.5 w-3.5" />
                doearno.in
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                India
              </span>
            </div>
          </header>

          <section className="mb-7">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
              Summary
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              A motivated and curious young developer who recently completed
              Class 12 and is now pursuing a career in technology. Passionate
              about Artificial Intelligence, Data Science, and web development.
              Built and deployed 2 live projects on the internet. Currently
              learning Python, JavaScript, and Machine Learning fundamentals
              while building a strong foundation in programming.
            </p>
          </section>

          <section className="mb-7">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
              Education
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <p className="text-xs text-gray-500">
                    AI & Data Science Specialization
                  </p>
                </div>
                <span className="text-xs font-medium text-gray-400 shrink-0 ml-4">
                  Upcoming
                </span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Class 12 — Higher Secondary
                  </h3>
                  <p className="text-xs text-gray-500">
                    Successfully completed
                  </p>
                </div>
                <span className="text-xs font-medium text-gray-400 shrink-0 ml-4">
                  Completed
                </span>
              </div>
            </div>
          </section>

          <section className="mb-7">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
              Projects
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Doearno — Official Website
                  </h3>
                  <span className="text-[10px] font-medium text-gray-400 border rounded px-1.5 py-0.5">
                    LIVE
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-1">
                  official.doearno.in · HTML, CSS, Web
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The official website of Doearno, built with HTML and basic web
                  development to present the brand online with a clean, simple
                  layout. Deployed and accessible publicly on the internet.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Doearno — About Website
                  </h3>
                  <span className="text-[10px] font-medium text-gray-400 border rounded px-1.5 py-0.5">
                    LIVE
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-1">
                  about.doearno.in · HTML, CSS, Content
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  An informational website that shares the story, vision, and
                  details about Doearno. Second live project deployed on the
                  web, showcasing content writing and web design skills.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-7">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <div>
                <h3 className="text-xs font-semibold text-gray-700 mb-1">
                  Languages
                </h3>
                <p className="text-sm text-gray-500">
                  C, Java, Python (learning), HTML
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-700 mb-1">
                  Web Development
                </h3>
                <p className="text-sm text-gray-500">
                  HTML, CSS, responsive layouts
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-700 mb-1">
                  Tools & Platforms
                </h3>
                <p className="text-sm text-gray-500">
                  Git, GitHub, VS Code, web deployment
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-700 mb-1">
                  Interests
                </h3>
                <p className="text-sm text-gray-500">
                  AI, Data Science, Machine Learning
                </p>
              </div>
            </div>
          </section>

          <section className="mb-7">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
              Currently Learning
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Python for AI",
                "CSS & Modern Layouts",
                "JavaScript Basics",
                "Data Structures",
                "Git & GitHub",
                "Machine Learning Intro",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
              Strengths
            </h2>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gray-400" />
                Quick learner with strong curiosity
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gray-400" />
                Self-motivated & disciplined
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gray-400" />
                Problem-solving mindset
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gray-400" />
                Consistent daily learning habit
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Resume;
