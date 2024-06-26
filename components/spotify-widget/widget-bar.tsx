import { Maximize } from "lucide-react";
import { SpotifyLogo } from "./spotify-logo";
import { motion } from "framer-motion";

type WidgetBarProps = {
  onExpand: () => void;
};
export function WidgetBar({ onExpand }: WidgetBarProps) {
  return (
    <div className="mb-4 flex justify-between items-center">
      <motion.span layoutId="widget-logo">
        <SpotifyLogo />
      </motion.span>
      <motion.button
        layoutId="widget-maximize"
        onClick={onExpand}
      >
        <Maximize />
      </motion.button>
    </div>
  );
}
