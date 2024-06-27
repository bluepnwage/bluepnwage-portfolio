export type TechType = "next" | "javascript" | "css" | "supabase" | "tailwindcss" | "Remix" | "TypeScript";

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
