import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, PhotoSlot } from "@/components/SiteNav";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photos & Events — Your Name" },
      { name: "description", content: "Photos from events, conferences and moments along the way." },
      { property: "og:title", content: "Photos & Events — Your Name" },
      { property: "og:description", content: "Photos from events, conferences and moments along the way." },
    ],
  }),
  component: Gallery,
});

const events = [
  { name: "Event name", date: "Month 2026", text: "What it was and what you took away from it." },
  { name: "Conference or workshop", date: "Month 2025", text: "Who you met or what you presented." },
  { name: "Volunteer day", date: "Month 2025", text: "A short note about your contribution." },
];

function Gallery() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-5xl">Photos & Events</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">Moments from events I've attended, spoken at, or helped organise.</p>

        <h2 className="mt-14 text-2xl">About me</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <PhotoSlot label="Photo of you" className="aspect-[4/5]" />
          <PhotoSlot label="Photo of you" className="aspect-[4/5]" />
          <PhotoSlot label="Photo of you" className="aspect-[4/5]" />
        </div>

        <h2 className="mt-16 text-2xl">Events</h2>
        <div className="mt-6 space-y-12">
          {events.map((e, i) => (
            <article key={i} className="grid gap-6 md:grid-cols-2">
              <PhotoSlot label="Event photo" className="aspect-video" />
              <div className="self-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">{e.date}</p>
                <h3 className="mt-2 text-2xl">{e.name}</h3>
                <p className="mt-2 text-muted-foreground">{e.text}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
