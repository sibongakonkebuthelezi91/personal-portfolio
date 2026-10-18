import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, PhotoSlot } from "@/components/SiteNav";
import { HighlightCard } from "@/components/Highlight";
import { highlights, featuredHighlight } from "@/data/highlights";
import { events } from "@/data/events";

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
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <PhotoSlot label="Photo of you" className="aspect-[4/5]" />
          <PhotoSlot label="Photo of you" className="aspect-[4/5]" />
          <PhotoSlot label="Photo of you" className="aspect-[4/5]" />
        </div>

        <h2 className="mt-16 text-2xl">Events</h2>
        <div className="mt-6 space-y-12">
          {events.map((e) => (
            <article key={e.name} className="grid gap-6 md:grid-cols-[2fr_1fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                {e.photos.map((p) => (
                  <img
                    key={p.src}
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="aspect-video w-full rounded-lg object-cover"
                  />
                ))}
              </div>
              <div className="self-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">{e.tag}</p>
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
