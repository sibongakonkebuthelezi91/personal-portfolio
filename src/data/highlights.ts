// One entry per highlight; `poster` is used for event and social previews.
export type Highlight = {
  title: string;
  tag: string;
  text: string;
  url: string;
  poster: string;
  posterAlt: string;
  linkLabel: string;
  videoSrc?: string;
};

export const hackathonHighlight: Highlight = {
  title: "2nd place — MoMo Mini App Hackathon",
  tag: "Fintech · Team of 5",
  text: "Our team built an app that helps people build a credit score by taking small loans from informal traders — a bridge between everyday borrowing and formal financial services. We placed 2nd out of the competing teams.",
  url: "https://www.linkedin.com/feed/update/urn:li:activity:7501947042567585792/",
  poster:
    "https://dms.licdn.com/playlist/vid/v2/D4D05AQGTZsVygnnwkg/thumbnail-with-play-button-overlay-high/B4DaBxFDQuJYC0-/0/1788603548136?e=2147483647&v=beta&t=AG0E6YEjKAEs5vcwJiRZ_kuva9iHXjnijJY7jZNRTUk",
  posterAlt: "Video still from the MoMo Mini App Hackathon",
  linkLabel: "Watch the moment on LinkedIn",
  videoSrc: "/momo-video.mp4",
};

export const geekulchaHighlight: Highlight & { date: string } = {
  title: "Geekulcha Hackathon",
  tag: "Hackathon · Build for Use",
  text: "Geekulcha was a blast. On to the next challenge.",
  date: "2026-09-29",
  url: "https://www.instagram.com/p/Dd5tIP1itZc/?img_index=1",
  poster: "/geekulcha-hackathon.jpg",
  posterAlt: "Speaking at the Geekulcha Hackathon",
  linkLabel: "See the post on Instagram",
};

export const highlights = [hackathonHighlight];
export const featuredHighlight = hackathonHighlight;
