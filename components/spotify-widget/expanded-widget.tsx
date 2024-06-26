import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { SpotifyData } from "interfaces";
import { useEffect, useState } from "react";
import { useMeasure } from "util/use-measure";

export function ExpandedWidget({
  children,
  ...data
}: SpotifyData & { children: React.ReactNode }) {
  const [textRef, textRect] = useMeasure(data?.title);
  const [containerRef, containerRect] = useMeasure(data?.title);
  const [direction, setDirection] = useState(false);
  const [, animate] = useAnimate();

  useEffect(() => {
    if (!data?.isPlaying) return;
    if (!textRef.current) return;

    const transition = {
      duration: 5,
      delay: 3,
      ease: "linear",
      onComplete: () => setDirection((prev) => !prev),
    } as const;

    if (!direction) {
      animate(
        textRef.current,
        {
          x:
            textRect.width > containerRect.width
              ? containerRect.width - textRect.width - 10
              : 0,
        },
        transition
      );
    } else {
      animate(
        textRef.current,
        {
          x: 0,
        },
        transition
      );
    }
  }, [direction, data?.isPlaying, textRect.width, containerRect.width]);
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      layoutId="widget-container"
      className="fixed bottom-4 right-4 text-gray-100 z-50 w-1/6 bg-neutral-900 border  border-neutral-600  rounded overflow-hidden"
    >
      <div className="p-4">
        {children}
        <div className="">
          <motion.img
            src={data.albumImageUrl}
            height={150}
            width={150}
            transition={{ duration: 0.3 }}
            className="rounded w-full z-10"
            layoutId="widget-image"
          />
          <div className="space-y-1 w-full mt-4">
            <p
              ref={containerRef}
              className="font-medium relative h-6 overflow-hidden w-full"
            >
              <AnimatePresence>
                <motion.span
                  ref={textRef}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: { duration: 0.3, delay: 0.3 },
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: { duration: 0.1 },
                  }}
                  key={data.title}
                  className="text-nowrap absolute text-lg"
                >
                  {data.title}
                </motion.span>
              </AnimatePresence>
            </p>
            <div className="h-5">
              <AnimatePresence>
                <motion.p
                  key={"test2"}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: { duration: 0.3, delay: 0.3 },
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: { duration: 0.1 },
                  }}
                  className="text-gray-300 "
                >
                  {data.artist}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
