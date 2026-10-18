import awsSummitPhoto from "@/assets/aws-summit.jpg.asset.json";
import awsSummitHallPhoto from "@/assets/aws-summit-hall.png.asset.json";
import ytePresentationPhoto from "@/assets/yte-hackathon-presentation.jpg.asset.json";
import yteAudiencePhoto from "@/assets/yte-hackathon-audience.jpg.asset.json";
import yteWinnerPhoto from "@/assets/yte-hackathon-winner.jpg.asset.json";

export type EventPhoto = {
  src: string;
  alt: string;
};

export type SiteEvent = {
  name: string;
  tag: string;
  text: string;
  photos: EventPhoto[];
};

export const events: SiteEvent[] = [
  {
    name: "YTE Hackathon",
    tag: "Winner",
    text: "Won the YTE Hackathon (G13) — photos from our GridWise presentation on stage and the moment with the trophy.",
    photos: [
      { src: yteWinnerPhoto.url, alt: "Holding the YTE Hackathon Winner (G13) trophy" },
      { src: ytePresentationPhoto.url, alt: "Presenting GridWise on stage at the YTE Hackathon" },
      { src: yteAudiencePhoto.url, alt: "The audience at the YTE Hackathon" },
    ],
  },
  {
    name: "AWS Summit",
    tag: "Conference",
    text: "Attended the AWS Summit — talks, the expo floor and time with fellow attendees.",
    photos: [
      { src: awsSummitPhoto.url, alt: "With friends outside the AWS Summit venue" },
      { src: awsSummitHallPhoto.url, alt: "Working at laptops in the main hall of the AWS Summit" },
    ],
  },
];

export const eventMoments = [
  events[0].photos[0],
  events[0].photos[1],
  events[1].photos[0],
];
