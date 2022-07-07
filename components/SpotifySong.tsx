import useSWR, { Fetcher } from "swr";
import { Loader, Text, ThemeIcon, Anchor } from "@mantine/core";
import { BrandSpotify } from "tabler-icons-react";
import { MobileSpotify } from "./MobileMenu/MobileSpotify";

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

interface PropTypes {
  mobile?: boolean;
}

export default function SpotifySong({ mobile }: PropTypes) {
  const { data } = useSWR("/api/spotify", fetcher, { refreshInterval: 30000 });

  if (!data) return <Loader size={"sm"} />;
  if (mobile && data.isPlaying) return <MobileSpotify {...data} />;
  return (
    <>
      {data.isPlaying && (
        <>
          <Anchor size="sm" lineClamp={1} target={"_blank"} href={data.songUrl}>
            {data.title} - {data.artist}
          </Anchor>
          <ThemeIcon color={"green"}>
            <BrandSpotify />
          </ThemeIcon>
        </>
      )}
      {!data.isPlaying && (
        <>
          <Text>Not playing</Text>
          <ThemeIcon color={"green"}>
            <BrandSpotify />
          </ThemeIcon>
        </>
      )}
    </>
  );
}
