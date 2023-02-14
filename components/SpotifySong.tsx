"use client";
import useSWR, { Fetcher } from "swr";
import { BrandSpotify } from "tabler-icons-react";
import Image from "next/image";

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
    .then(res => res.json())
    .then(data => data);

export function SpotifySong() {
  const { data } = useSWR("/api/spotify", fetcher, { refreshInterval: 30000 });
  if (!data) return <p className="hidden md:block">Loading...</p>;
  return (
    <>
      {data.isPlaying && (
        <>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-green-700  text-gray-300 rounded-full p-1">
              <BrandSpotify />
            </div>
            <p className="mb-2 text-center">Listening to:</p>
          </div>
          <div className="flex flex-col  items-center">
            <figure className="space-y-2 w-full lg:4/5  rounded-sm overflow-hidden">
              <Image
                className="w-full aspect-square"
                src={data.albumImageUrl}
                width={150}
                height={150}
                alt={"Up 2 Me album cover by Yeat"}
                loading={"lazy"}
              />
              <figcaption className="block text-center space-y-2 dark:text-gray-300 text-gray-900">
                <span className="block font-semibold">{data.title}</span>
                <span className="text-sm">{data.artist}</span>
              </figcaption>
            </figure>
          </div>
        </>
      )}
      {!data.isPlaying && (
        <div className="flex flex-col items-center gap-2">
          <div className="bg-green-700  text-gray-300 rounded-full p-1">
            <BrandSpotify />
          </div>
          <p>Not listening to Spotify</p>
        </div>
      )}
    </>
  );
}
