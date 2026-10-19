import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { HighlightCard } from "@/components/Highlight";
import { Timeline } from "@/components/Timeline";
import { highlights, featuredHighlight } from "@/data/highlights";
import { timeline } from "@/data/events";
import { profile } from "@/data/profile";

const poster = featuredHighlight.poster;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photos & Events — Sibongakonke Buthelezi" },
      { name: "description", content: "Photos and videos from events, conferences and moments along the way." },
      { property: "og:title", content: "Photos & Events — Sibongakonke Buthelezi" },
      { property: "og:description", content: "Photos and videos from events, conferences and moments along the way." },
      { property: "og:image", content: poster },
      { name: "twitter:image", content: poster },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-5xl">Photos &amp; Events</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">Photos and videos from events I've attended, spoken at, or helped organise.</p>

        <h2 className="mt-14 text-2xl">Highlights &amp; videos</h2>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          These open on LinkedIn in a new tab — LinkedIn doesn't allow its videos to be played inside another website.
        </p>
        <div className="mt-6 space-y-6">
          {highlights.map((h) => (
            <HighlightCard key={h.url} item={h} />
          ))}
        </div>

        <h2 className="mt-16 text-2xl">About me</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-[minmax(0,13rem)_1fr] sm:items-center">
          <img
            src={profile.photo}
            alt="Sibongakonke Buthelezi"
            className="aspect-[4/5] w-full rounded-lg border bg-card object-cover object-top"
          />
          <p className="text-muted-foreground">{profile.intro}</p>
        </div>

        <p className="mt-10 max-w-xl text-sm text-muted-foreground">
          One picture per event, oldest first. Each date is when that event's own LinkedIn post went out.
        </p>
        <Timeline items={timeline} />

        <p className="mt-16 text-sm text-muted-foreground">
          Want more behind-the-scenes? <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">See all my posts on LinkedIn →</a>
        </p>
      </main>
    </div>
  );
}
