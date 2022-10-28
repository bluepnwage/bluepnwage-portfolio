"use client";
import useSWR, { Fetcher } from "swr";
import { BrandSpotify } from "tabler-icons-react";
import { Anchor } from "./Anchor";
// import { MobileSpotify } from "./MobileMenu/MobileSpotify";

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
  if (!data) return <p>Loading...</p>;
  // if (mobile && data.isPlaying) return <MobileSpotify {...data} />;
  return (
    <>
      {data.isPlaying && (
        <>
          {data.isPlaying && (
            <Anchor target={"_blank"} href={data.songUrl}>
              {data.title} - {data.artist}
            </Anchor>
          )}
          {!data.isPlaying && <p>Not playing music</p>}
          <div aria-hidden className="bg-green-700 rounded-md p-1">
            <BrandSpotify />
          </div>
        </>
      )}
    </>
  );
}
