"use client";

import useSWR from "swr";
import { SpotifyData } from "../SpotifySong";
import type { Fetcher } from "swr";

const fetcher: Fetcher<SpotifyData> = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => data);

export function MobileSpotify() {
  const { data, isValidating } = useSWR("/api/spotify", fetcher, { refreshInterval: 1000 * 30 });
  if (!data) return <p>Loading...</p>;
  if (!data.isPlaying) return <p>Not currently playing music on Spotify.</p>;
  return (
    <>
      <div>
        <p className="mb-2 text-center">Listening to:</p>
        {isValidating && <p className="mb-2 text-center">Revalidating data...</p>}
        <div className="flex flex-col items-center">
          <figure className="space-y-2 w-3/5">
            <img
              className=" w-full aspect-square"
              src={data.albumImageUrl}
              width={"100%"}
              height={"100%"}
              alt={""}
              loading={"lazy"}
            />
            <figcaption className="block text-center dark:text-gray-300 text-gray-900">
              {data.title} - {data.artist}
            </figcaption>
          </figure>
        </div>
        <div className="flex flex-col items-center">
          <p>
            <span>{data.album}</span>
          </p>
        </div>
      </div>
    </>
  );
}
