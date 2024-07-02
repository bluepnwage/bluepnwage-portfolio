"use client";
import useSWR, { type Fetcher } from "swr";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExpandedWidget } from "./expanded-widget";
import { RegularWidget } from "./regular-widget";
import { WidgetBar } from "./widget-bar";
import { SpotifyData } from "interfaces";
import { CurrentMSProvider } from "./current-provider";

const fetcher: Fetcher<SpotifyData> = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => data);

const refreshInterval = 1000 * 30;

export function SpotifyWidget() {
  const { data } = useSWR("/api/spotify", fetcher, {
    refreshInterval,
  });

  const [isExpanded, setIsExpanded] = useState(false);

  if (!data) return null;
  if (!data.isPlaying) return null;

  return (
    <CurrentMSProvider
      key={`${data.durationMs}`}
      ms={data.progressMs}
      totalDuration={data.durationMs}
    >
      <RegularWidget
        isExpanded={isExpanded}
        {...data}
      >
        <WidgetBar onExpand={setIsExpanded.bind(null, true)} />
      </RegularWidget>
      <AnimatePresence>
        {isExpanded && (
          <ExpandedWidget
            {...data}
            key={"expanded-widget"}
          >
            <WidgetBar onExpand={setIsExpanded.bind(null, false)} />
          </ExpandedWidget>
        )}
      </AnimatePresence>
    </CurrentMSProvider>
  );
}
