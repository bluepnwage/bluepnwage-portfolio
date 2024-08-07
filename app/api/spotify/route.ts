import { getNowPlaying } from "util/spotify";
export const runtime = "edge";
export const dynamic = "force-dynamic";

export const GET = async () => {
  const response = await getNowPlaying();
  if (response.status === 204 || response.status > 400) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        "content-type": "application/json"
      }
    });
  }

  const song = await response.json();
  if (song.item === null) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        "content-type": "application/json"
      }
    });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists[0].name;
  const artistUrl = song.item.artists[0].external_urls.spotify;
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const albumUrl = song.item.album.external_urls.spotify;
  const songUrl = song.item.external_urls.spotify;
  const progressMs = song.progress_ms;
  const durationMs = song.item.duration_ms;
  const explicit = song.item.explicit;

  const obj = {
    isPlaying,
    title,
    artist,
    artistUrl,
    albumImageUrl,
    album,
    albumUrl,
    songUrl,
    progressMs,
    durationMs,
    explicit
  };

  return new Response(JSON.stringify(obj), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "public, s-maxage=45, stale-while-revalidate=30"
    }
  });
};
