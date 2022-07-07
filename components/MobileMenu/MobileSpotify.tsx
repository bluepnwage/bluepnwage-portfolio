import { Image, Text, Center } from "@mantine/core";
import { SpotifyData } from "../SpotifySong";

export function MobileSpotify({ albumImageUrl, title, album, artist }: SpotifyData) {
  return (
    <>
      <div>
        <Text align="center" mb={"md"}>
          Listening to:
        </Text>
        <Center>
          <figure style={{ aspectRatio: "1 / 1", width: "60%" }}>
            <Image mb={"sm"} src={albumImageUrl} width={"100%"} height={"100%"} alt={""} />
            <figcaption>
              <Text size="sm" component={"span"}>
                {album}
              </Text>
            </figcaption>
          </figure>
        </Center>
        <Center>
          <Text mt={"md"} component="p">
            {title} - {artist}
          </Text>
        </Center>
      </div>
    </>
  );
}
