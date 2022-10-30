"use client";
import useSWR, { Fetcher } from "swr";
import { BrandSpotify } from "tabler-icons-react";

export interface SpotifyData {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
  album: string;
}

const fetcher: Fetcher<SpotifyData> = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => data);

export function SpotifySong() {
  const { data } = useSWR("/api/spotify", fetcher, { refreshInterval: 30000 });
  if (!data) return <p className="hidden md:block">Loading...</p>;
  return (
    <>
      {data.isPlaying && (
        <a
          className="hidden md:block text-indigo-400 hover:underline"
          rel="noreferrer"
          target={"_blank"}
          href={data.songUrl}
        >
          {data.title} - {data.artist}
        </a>
      )}
      {!data.isPlaying && <p className="hidden md:block">Not playing music</p>}
      <div aria-hidden className="bg-green-700 hidden md:block text-gray-300 rounded-md p-1">
        <BrandSpotify className="text-gray-300" />
      </div>
    </>
  );
}
