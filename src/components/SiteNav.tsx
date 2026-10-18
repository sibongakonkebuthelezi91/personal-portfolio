import { Link } from "@tanstack/react-router";
import { profile } from "@/data/profile";

export function SiteNav() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <Link to="/" className="font-display text-xl font-semibold">Sibongakonke Buthelezi</Link>
      <div className="flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>Home</Link>
        <Link to="/gallery" className="hover:text-primary" activeProps={{ className: "text-primary" }}>Photos &amp; Events</Link>
        <a href={`mailto:${profile.email}`} className="rounded-full bg-primary px-4 py-2 text-primary-foreground hover:opacity-90">Contact</a>
      </div>
    </nav>
  );
}

export function PhotoSlot({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`photo-slot flex items-center justify-center rounded-lg border border-dashed text-center text-sm text-muted-foreground ${className}`}>
      <span className="rounded-full bg-card px-3 py-1">{label}</span>
    </div>
  );
}
