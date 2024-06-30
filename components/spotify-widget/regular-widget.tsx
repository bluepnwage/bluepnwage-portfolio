import { useAnimate, motion } from "framer-motion";
import { SpotifyData } from "interfaces";
import { useEffect, useState } from "react";
import { useMeasure } from "util/use-measure";

type PropTypes = {
  isExpanded: boolean;
  children: React.ReactNode;
} & SpotifyData;

export function RegularWidget({ isExpanded, children, ...data }: PropTypes) {
  const [textRef, textRect] = useMeasure(data?.title);
  const [containerRef, containerRect] = useMeasure(data?.title);
  const [direction, setDirection] = useState(false);
  const [, animate] = useAnimate();

  useEffect(() => {
    if (isExpanded) return;
    if (!data?.isPlaying) return;
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
  }, [direction, data?.isPlaying, textRect.width, containerRect.width, isExpanded]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      layoutId="widget-container"
      transition={{ duration: 0.5, type: "spring", bounce: 0 }}
      className="fixed hidden md:block bottom-4 right-4 text-gray-100 z-50 w-1/6 bg-neutral-900 border  border-neutral-600 p-4 rounded"
    >
      <div>
        {children}
        <div className="flex gap-4 items-center">
          <motion.img
            src={data.albumImageUrl}
            height={75}
            width={75}
            className="rounded "
            layoutId="widget-image"
            transition={{ duration: 0.3 }}
          />
          <div
            ref={containerRef}
            className="space-y-1 w-full"
          >
            <p className="font-medium relative h-6 overflow-hidden w-full">
              <motion.span
                key={data.title}
                ref={textRef}
                animate={{
                  opacity: isExpanded ? 0 : 1
                }}
                transition={{ duration: 0.15, delay: isExpanded ? 0 : 0.3 }}
                className="text-nowrap absolute flex items-center gap-2"
              >
                {data.title}{" "}
                {data.explicit && (
                  <span className="bg-neutral-50 rounded-sm h-3 w-3 flex items-center justify-center  text-[10px] text-neutral-900">
                    E
                  </span>
                )}
              </motion.span>
            </p>
            <motion.p
              animate={{ opacity: isExpanded ? 0 : 1 }}
              transition={{ duration: 0.15, delay: isExpanded ? 0 : 0.3 }}
              className="text-gray-300 text-sm"
            >
              {data.artist}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
