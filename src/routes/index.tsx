import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { HighlightCard } from "@/components/Highlight";
import { featuredHighlight } from "@/data/highlights";
import { profile, skillGroups, experience, projects, education } from "@/data/profile";
import { eventMoments } from "@/data/events";

const poster = featuredHighlight.poster;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sibongakonke Buthelezi — Software Engineer" },
      { name: "description", content: "Sibongakonke Buthelezi is a software engineer in Johannesburg building web applications, backend services and database-driven systems with Python, Django and Flask." },
      { property: "og:title", content: "Sibongakonke Buthelezi — Software Engineer" },
      { property: "og:description", content: "Web applications, backend services and database-driven systems with Python, Django and Flask." },
      { property: "og:image", content: poster },
      { name: "twitter:image", content: poster },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <header className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">Software Engineer · Johannesburg · Open to opportunities</p>
          <h1 className="mt-4 text-5xl leading-tight md:text-6xl">Hi, I'm Sibongakonke.</h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90">Get in touch</a>
            <a href={profile.cvUrl} download className="rounded-full border px-6 py-3 font-medium hover:bg-secondary">Download CV</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="rounded-full border px-6 py-3 font-medium hover:bg-secondary">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border px-6 py-3 font-medium hover:bg-secondary">LinkedIn</a>

          </div>
        </div>
        <img
          src={profile.photo}
          alt="Sibongakonke Buthelezi"
          className="aspect-[4/5] w-full rounded-lg border bg-card object-cover object-top"
        />

      </header>

      <section className="border-y bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl">Latest highlight</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Took 2nd place at the MoMo Mini App Hackathon — the short video of the moment is on LinkedIn.
          </p>
          <HighlightCard item={featuredHighlight} className="mt-8" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl">Skills</h2>
        <div className="mt-8 space-y-6">
          {skillGroups.map((g) => (
            <div key={g.label}>
              <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">{g.label}</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {g.items.map((s) => (
                  <span key={s} className="rounded-full bg-secondary px-4 py-2 text-sm font-medium">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
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

          <h2 className="mt-16 text-3xl">Projects</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="rounded-lg border bg-background p-6 hover:border-primary">
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">{p.stack}</p>
                <h3 className="mt-2 text-xl">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                <p className="mt-4 text-sm font-medium text-primary">View on GitHub →</p>
              </a>
            ))}
          </div>

          <h2 className="mt-16 text-3xl">Education</h2>
          <div className="mt-8 space-y-8">
            {education.map((e) => (
              <div key={e.title} className="grid gap-2 border-l-2 border-primary pl-6 md:grid-cols-[1fr_3fr]">
                <p className="text-sm text-muted-foreground">{e.years}</p>
                <div>
                  <h3 className="text-xl">{e.title}</h3>
                  <p className="mt-1 text-muted-foreground">{e.text}</p>
                  {"url" in e && (
                    <a
                      href={e.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
                    >
                      Verify credential →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl">Events &amp; moments</h2>
          <div className="flex flex-wrap items-center gap-6">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">More posts on LinkedIn →</a>
            <Link to="/gallery" className="font-medium text-primary hover:underline">See all photos →</Link>
          </div>

        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {eventMoments.map((p) => (
            <Link to="/gallery" key={p.src} className="group block overflow-hidden rounded-lg">
              <img src={p.src} alt={p.alt} loading="lazy" className="aspect-square w-full object-cover transition group-hover:scale-105" />
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {profile.name} · {profile.email} · {profile.phone} ·{" "}
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>

      </footer>
    </div>
  );
}
