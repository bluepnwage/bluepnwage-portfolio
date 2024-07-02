import { motion } from "framer-motion";
import { SpotifyData } from "interfaces";
import { ChevronDown } from "lucide-react";

type PropTypes = {
  data: SpotifyData;
};

export function MobileMinimized({ data }: PropTypes) {
  return (
    <motion.div className="flex justify-between  h-full w-full">
      <div className="flex gap-2 items-center h-fit justify-between">
        <motion.img
          src={data.albumImageUrl}
          className="h-8 w-8 aspect-square bg-purple-400 rounded"
        />
        <div>
          <p
            key={"text"}
            className="text-sm text-gray-100 relative font-medium"
          >
            {" "}
            {data.title} - <span className="text-gray-300 font-normal">{data.artist}</span>
          </p>
        </div>
      </div>

      <span className="text-gray-300">
        <ChevronDown />
      </span>
    </motion.div>
  );
}
