import useSWR from "swr";
import type { SpotifyData } from "interfaces";
import type { Fetcher } from "swr";

const fetcher: Fetcher<SpotifyData> = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => data);

const refreshInterval = 1000 * 30;

export function useSpotify() {
  return useSWR("/api/spotify", fetcher, {
    refreshInterval
  });
}
