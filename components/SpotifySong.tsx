"use client";
import useSWR, { Fetcher } from "swr";
import { BrandSpotify } from "tabler-icons-react";
import Image from "next/image";
import { Anchor } from "./Anchor";

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

const refreshInterval = 1000 * 30;

export function SpotifySong() {
  const { data, isLoading } = useSWR("/api/spotify", fetcher, { refreshInterval });
  if (isLoading) return <p className="text-center">Loading...</p>;
  return (
    <>
      {data?.isPlaying && (
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
              <figcaption className="block text-center space-y-2  overflow-hidden dark:text-gray-300 text-gray-900">
                <Anchor href={data.songUrl} className="block font-semibold truncate ">
                  {data.title}
                </Anchor>
                <span className="text-sm">{data.artist}</span>
              </figcaption>
            </figure>
          </div>
        </>
      )}
      {!data?.isPlaying && (
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
