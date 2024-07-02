import { Maximize } from "lucide-react";
import { SpotifyLogo } from "./spotify-logo";
import { motion } from "framer-motion";

type WidgetBarProps = {
  onExpand: () => void;
};
export function WidgetBar({ onExpand }: WidgetBarProps) {
  return (
    <div className="mb-4 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <motion.span layoutId="widget-logo">
          <SpotifyLogo />
        </motion.span>
        <motion.p
          className="text-gray-300 font-medium text text-sm"
          layoutId="widget-currently-playing"
        >
          Current playing
        </motion.p>
      </div>

      <motion.button
        layoutId="widget-maximize"
        onClick={onExpand}
      >
        <Maximize />
      </motion.button>
    </div>
  );
}
