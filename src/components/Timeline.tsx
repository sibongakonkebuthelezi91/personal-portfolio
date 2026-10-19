import { PhotoSlot } from "@/components/SiteNav";
import type { TimelineEntry } from "@/data/events";

function monthYear(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Events in date order, one picture each, hung off a vertical rail. */
export function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <ol className="mt-8 space-y-12 border-l pl-8">
      {items.map((item) => (
        <li key={item.url} className="relative">
          <span
            aria-hidden
            className="absolute -left-[38px] top-2 h-3 w-3 rounded-full border-2 border-background bg-primary"
          />
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            {monthYear(item.date)} · {item.tag}
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-[minmax(0,15rem)_1fr] sm:items-start">
            {item.cover ? (
              <div className="h-72 w-full overflow-hidden rounded-lg border bg-card">
                {item.videoSrc ? (
                  <video
                    src={item.videoSrc}
                    poster={item.cover.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={item.cover.alt}
                    className={`h-full w-full object-cover ${item.coverClass ?? "object-top"}`}
                  />
                ) : (
                  <img
                    src={item.cover.src}
                    alt={item.cover.alt}
                    loading="lazy"
                    className={`h-full w-full object-cover ${item.coverClass ?? "object-top"}`}
                  />
                )}
              </div>
            ) : (
              <PhotoSlot label={`${item.title} — photo to come`} className="h-72" />
            )}
            <div>
              <h3 className="text-2xl">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.text}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                {item.linkLabel} →
              </a>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
