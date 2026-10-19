import { useState } from "react";
import { PhotoSlot } from "@/components/SiteNav";
import { featuredHighlight } from "@/data/highlights";

type Highlight = typeof featuredHighlight;

/**
 * A card for a video or write-up that lives somewhere else (LinkedIn, YouTube).
 * The whole card is a link that opens in a new tab. If the picture can't be
 * loaded from the other site, the dashed "add photo" frame is shown instead.
 */
export function HighlightCard({ item, className = "" }: { item: Highlight; className?: string }) {
  const [posterFailed, setPosterFailed] = useState(false);

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group grid items-center gap-6 rounded-lg border bg-card p-4 transition hover:border-primary md:grid-cols-2 ${className}`}
    >
      <div className="relative overflow-hidden rounded-lg border">
        {posterFailed ? (
          <PhotoSlot label="Add a picture of this" className="aspect-video" />
        ) : (
          <>
            <img
              src={item.poster}
              alt={item.posterAlt}
              loading="lazy"
              onError={() => setPosterFailed(true)}
              className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition group-hover:scale-110">
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </>
        )}
      </div>
      <div>
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">{item.tag}</p>
        <h3 className="mt-2 text-2xl">{item.title}</h3>
        <p className="mt-3 text-muted-foreground">{item.text}</p>
        <p className="mt-5 font-medium text-primary underline-offset-4 group-hover:underline">{item.linkLabel} →</p>
      </div>
    </a>
  );
}
