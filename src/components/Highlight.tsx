import { featuredHighlight, type Highlight } from "@/data/highlights";

/** A linked highlight with a looping local video preview. */
export function HighlightCard({ item, className = "" }: { item: Highlight; className?: string }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group grid items-center gap-6 rounded-lg border bg-card p-4 transition hover:border-primary md:grid-cols-2 ${className}`}
    >
      <div className="relative overflow-hidden rounded-lg border">
        <video
          src={item.videoSrc ?? "/momo-video.mp4"}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div>
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          {item.tag}
        </p>
        <h3 className="mt-2 text-2xl">{item.title}</h3>
        <p className="mt-3 text-muted-foreground">{item.text}</p>
        <p className="mt-5 font-medium text-primary underline-offset-4 group-hover:underline">
          {item.linkLabel} →
        </p>
      </div>
    </a>
  );
}
