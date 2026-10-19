import awsSummitPhoto from "@/assets/aws-summit.jpg.asset.json";
import awsSummitHallPhoto from "@/assets/aws-summit-hall.png.asset.json";
import awsSandtonPhoto from "@/assets/aws-sandton.jpg.asset.json";
import buildWithAiPhoto from "@/assets/build-with-ai.jpg.asset.json";
import ytePresentationPhoto from "@/assets/yte-hackathon-presentation.jpg.asset.json";
import yteAudiencePhoto from "@/assets/yte-hackathon-audience.jpg.asset.json";
import yteWinnerPhoto from "@/assets/yte-hackathon-winner.jpg.asset.json";
import { hackathonHighlight } from "@/data/highlights";

export type EventPhoto = {
  src: string;
  alt: string;
};

export type SiteEvent = {
  name: string;
  tag: string;
  text: string;
  /** ISO date the event's own LinkedIn post went out — used to order the timeline. */
  date: string;
  postUrl: string;
  /** The one picture that stands for this event on the timeline. */
  cover: EventPhoto | null;
  photos: EventPhoto[];
};

const yteWinner: EventPhoto = {
  src: yteWinnerPhoto.url,
  alt: "Holding the YTE Hackathon Winner (G13) trophy",
};
const ytePresentation: EventPhoto = {
  src: ytePresentationPhoto.url,
  alt: "Presenting GridWise on stage at the YTE Hackathon",
};
const yteAudience: EventPhoto = {
  src: yteAudiencePhoto.url,
  alt: "The audience at the YTE Hackathon",
};
const awsSummitGroup: EventPhoto = {
  src: awsSummitPhoto.url,
  alt: "With friends outside the AWS Summit venue",
};
const awsSummitHall: EventPhoto = {
  src: awsSummitHallPhoto.url,
  alt: "Working at laptops in the main hall of the AWS Summit",
};
const awsSandton: EventPhoto = {
  src: awsSandtonPhoto.url,
  alt: "At the AWS Cloud Event in Sandton",
};
const buildWithAi: EventPhoto = {
  src: buildWithAiPhoto.url,
  alt: "At the Build With AI event in Soweto",
};

// Oldest first — the timeline and the photo list both read in this order.
export const events: SiteEvent[] = [
  {
    name: "Build With AI Soweto",
    tag: "Hack & Workshop",
    text: "Hacking AI with GDG Soweto — hands-on session exploring developer tooling, practical AI applications, and connecting with local developers.",
    date: "2026-04-11",
    postUrl: "https://www.linkedin.com/posts/sibongakonke-buthelezi-274b76344_activity-7448800481642151936-IpVk",
    cover: buildWithAi,
    photos: [buildWithAi],
  },
  {
    name: "AWS Cloud Event · Sandton",
    tag: "Tech Session",
    text: "Attended an AWS Cloud gathering in Sandton exploring enterprise cloud architecture, AWS services, and developer best practices.",
    date: "2026-05-30",
    postUrl: "https://www.linkedin.com/posts/sibongakonke-buthelezi-274b76344_activity-7466531114040320002-G95M",
    cover: awsSandton,
    photos: [awsSandton],
  },
  {
    name: "YTE Hackathon",
    tag: "Winner",
    text: "Won the YTE Hackathon (G13) — photos from our GridWise presentation on stage and the moment with the trophy.",
    date: "2026-07-10",
    postUrl: "https://www.linkedin.com/posts/sibongakonke-buthelezi-274b76344_wethinkcode-hackathonwinner-softwaredevelopment-activity-7481424278475849728-xCLs",
    cover: yteWinner,
    photos: [yteWinner, ytePresentation, yteAudience],
  },
  {
    name: "AWS Summit",
    tag: "Conference",
    text: "Attended the AWS Summit — talks, the expo floor and time with fellow attendees.",
    date: "2026-08-19",
    postUrl: "https://www.linkedin.com/posts/sibongakonke-buthelezi-274b76344_aws-softwareengineer-ai-activity-7495915858137980928-Q88R",
    cover: awsSummitGroup,
    photos: [awsSummitGroup, awsSummitHall],
  },
];

export type TimelineEntry = {
  date: string;
  title: string;
  tag: string;
  text: string;
  cover: EventPhoto | null;
  /** Tailwind object-position class for the cover; defaults to object-top. */
  coverClass?: string;
  url: string;
  linkLabel: string;
};

/**
 * One entry per event, oldest first — the MoMo hackathon comes from the
 * highlights file so its wording and picture stay in one place.
 */
export const timeline: TimelineEntry[] = [
  ...events.map((e) => ({
    date: e.date,
    title: e.name,
    tag: e.tag,
    text: e.text,
    cover: e.cover,
    url: e.postUrl,
    linkLabel: `Read the ${e.name} post on LinkedIn`,
  })),
  {
    date: "2026-09-05",
    title: hackathonHighlight.title,
    tag: hackathonHighlight.tag,
    text: hackathonHighlight.text,
    cover: { src: hackathonHighlight.poster, alt: hackathonHighlight.posterAlt },
    // The video still is a candid audience shot: zoom onto the stage banner
    // so the blurred shoulder in the right foreground falls out of frame.
    coverClass: "origin-[28%_52%] scale-[1.55]",
    url: hackathonHighlight.url,
    linkLabel: hackathonHighlight.linkLabel,
  },
].sort((a, b) => a.date.localeCompare(b.date));

export const eventMoments = [yteWinner, ytePresentation, awsSummitGroup];
