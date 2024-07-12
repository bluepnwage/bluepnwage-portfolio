import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { SpotifyData } from "interfaces";
import { useEffect, useState } from "react";
import { useMeasure } from "util/use-measure";
import { PlayProgress } from "./play-progress";

export function ExpandedWidget({ children, ...data }: SpotifyData & { children: React.ReactNode }) {
  const [textRef, textRect] = useMeasure();
  const [containerRef, containerRect] = useMeasure();
  const [direction, setDirection] = useState(false);
  const [, animate] = useAnimate();
  useEffect(() => {
    if (!textRef.current) return;

    const transition = {
      duration: 5,
      delay: 3,
      ease: "linear",
      onComplete: () => setDirection((prev) => !prev)
    } as const;

    if (!direction) {
      animate(
        textRef.current,
        {
          x: textRect.width > containerRect.width ? containerRect.width - textRect.width - 10 : 0
        },
        transition
      );
    } else {
      animate(
        textRef.current,
        {
          x: 0
        },
        transition
      );
    }
  }, [direction, textRect.width, containerRect.width]);
  return (
    <motion.div
      transition={{ duration: 0.9, type: "spring", bounce: 0 }}
      layoutId="widget-container"
      className="fixed bottom-4 right-4 text-gray-100 z-50 w-1/6 bg-neutral-900 border  border-neutral-600  rounded overflow-hidden"
    >
      <div className="p-4">
        {children}
        <div className="">
          <a
            href={data.albumUrl}
            target="_blank"
          >
            <motion.img
              src={data.albumImageUrl}
              height={150}
              width={150}
              transition={{ duration: 0.3 }}
              className="rounded w-full z-50"
              layoutId="widget-image"
            />
          </a>

          <div className="space-y-6 w-full mt-4">
            <div className="space-y-1">
              <p
                ref={containerRef}
                className="font-medium relative h-7 overflow-hidden w-full"
              >
                <AnimatePresence>
                  <motion.a
                    ref={textRef}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: { duration: 0.3, delay: 0.3 }
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      transition: { duration: 0.05 }
                    }}
                    key={"title"}
                    className="text-nowrap absolute  items-center text-lg hover:underline"
                    href={data.songUrl}
                    target="_blank"
                  >
                    {data.title}{" "}
                    {data.explicit && (
                      <span className="bg-neutral-50 rounded-sm h-4 w-4 ml-2 inline-flex items-center justify-center  text-[10px] text-neutral-900">
                        E
                      </span>
                    )}
                  </motion.a>
                </AnimatePresence>
              </p>
              <div className="h-5">
                <AnimatePresence>
                  <motion.a
                    key={"artist"}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: { duration: 0.3, delay: 0.3 }
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      transition: { duration: 0.05 }
                    }}
                    href={data.artistUrl}
                    target="_blank"
                    className="text-gray-300 hover:underline block"
                  >
                    {data.artist}
                  </motion.a>
                </AnimatePresence>
              </div>
            </div>
            <PlayProgress />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
