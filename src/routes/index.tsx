import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, PhotoSlot } from "@/components/SiteNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Name — Portfolio & Résumé" },
      { name: "description", content: "Meet Your Name: skills, experience and how to get in touch." },
      { property: "og:title", content: "Your Name — Portfolio & Résumé" },
      { property: "og:description", content: "Skills, experience and how to get in touch." },
    ],
  }),
  component: Index,
});

const skills = ["Communication", "Project coordination", "Data analysis", "Teamwork", "Problem solving", "Microsoft Office"];
const experience = [
  { role: "Your Role", org: "Company Name", years: "2024 — Present", text: "Describe a key achievement with a measurable result." },
  { role: "Previous Role", org: "Organisation", years: "2022 — 2024", text: "Describe what you were responsible for and what you improved." },
];

function Index() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <header className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Open to opportunities</p>
          <h1 className="mt-4 text-5xl leading-tight md:text-6xl">Hi, I'm Your Name.</h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            A short line about who you are, what you do best, and the kind of role you're looking for.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:you@example.com" className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90">Get in touch</a>
            <a href="#" className="rounded-full border px-6 py-3 font-medium hover:bg-secondary">Download CV</a>
            <a href="#" className="rounded-full border px-6 py-3 font-medium hover:bg-secondary">LinkedIn</a>
          </div>
        </div>
        <PhotoSlot label="Your portrait photo" className="aspect-[4/5] w-full" />
      </header>

      <section className="border-y bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl">Skills</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span key={s} className="rounded-full bg-secondary px-4 py-2 text-sm font-medium">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl">Experience</h2>
        <div className="mt-8 space-y-8">
          {experience.map((e) => (
            <div key={e.role} className="grid gap-2 border-l-2 border-primary pl-6 md:grid-cols-[1fr_3fr]">
              <p className="text-sm text-muted-foreground">{e.years}</p>
              <div>
                <h3 className="text-xl">{e.role} · {e.org}</h3>
                <p className="mt-1 text-muted-foreground">{e.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl">Events & moments</h2>
          <Link to="/gallery" className="font-medium text-primary hover:underline">See all photos →</Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <PhotoSlot label="Event photo" className="aspect-square" />
          <PhotoSlot label="Event photo" className="aspect-square" />
          <PhotoSlot label="Event photo" className="aspect-square" />
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Your Name · you@example.com
      </footer>
    </div>
  );
}
