"use client";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { useState } from "react";
import { useSpotify } from "util/use-spotify";
import { Expanded } from "./expanded";
import { CurrentMSProvider } from "../current-provider";
import { MobileMinimized } from "./minimized";

export function MobileSpotifyWidget() {
  const { data } = useSpotify();
  const [isOpen, setIsOpen] = useState(false);
  if (!data) return null;

  return (
    <CurrentMSProvider
      key={`${data.durationMs}`}
      ms={data.progressMs}
      totalDuration={data.durationMs}
    >
      <MotionConfig transition={{ duration: 0.6, type: "spring", bounce: 0 }}>
        <AnimatePresence>
          {isOpen && (
            <Expanded
              open={isOpen}
              onClose={setIsOpen.bind(null, false)}
              data={data}
            />
          )}
        </AnimatePresence>

        <button
          onClick={setIsOpen.bind(null, !isOpen)}
          className="fixed md:hidden bottom-16 left-0 px-4 bg-neutral-900 w-full border-t border-t-neutral-600"
        >
          <div className="py-2">
            <MobileMinimized data={data} />
          </div>
        </button>
      </MotionConfig>
    </CurrentMSProvider>
  );
}
