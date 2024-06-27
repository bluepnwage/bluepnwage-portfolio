import type { Colors } from "components/Badge";

export interface TechStack {
  label: TechType;
  color: Colors;
}

export type TechType =
  | "Next.js"
  | "JavaScript"
  | "HTML"
  | "CSS"
  | "Postgres"
  | "MongoDB"
  | "React"
  | "TypeScript"
  | "Svelte"
  | "TailwindCSS";

export interface EmailForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SpotifyData {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
  album: string;
  progressMs: number;
  durationMs: number;
  albumUrl: string;
  artistUrl: string;
}
