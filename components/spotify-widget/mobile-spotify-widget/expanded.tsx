import { SpotifyData } from "interfaces";
import { PlayProgress } from "../play-progress";
import { PanInfo, motion } from "framer-motion";
import { SpotifyLogo } from "../spotify-logo";
import { ChevronUp } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

type PropTypes = {
  data: SpotifyData;
  open: boolean;
  onClose: () => void;
};

export function Expanded({ data, onClose, open }: PropTypes) {
  const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.point.y > 100) onClose();
  };
  return (
    <>
      <Dialog.Root open={open}>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content
            aria-describedby="Currently playing music on Spotify"
            asChild
          >
            <motion.div
              key={"drawer"}
              initial={{ height: 0 }}
              animate={{ height: "100vh" }}
              exit={{ height: 0 }}
              drag="y"
              dragSnapToOrigin
              onDragEnd={onDragEnd}
              dragConstraints={{ top: 0 }}
              className="flex flex-col w-full fixed bottom-0 left-0  bg-neutral-900 z-[9999]"
            >
              <div className="p-4">
                <Dialog.DialogDescription className="absolute opacity-0">
                  Currently playing spotify
                </Dialog.DialogDescription>
                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-1 items-center ">
                    <SpotifyLogo />
                    <Dialog.Title className="text-gray-300 font-medium text-sm">Currently playing</Dialog.Title>
                  </div>
                  <Dialog.Close onClick={onClose}>
                    <ChevronUp size={20} />
                  </Dialog.Close>
                </div>

                <img
                  src={data.albumImageUrl}
                  className="w-full mx-auto aspect-square bg-purple-400 rounded"
                />
                <div className="space-y-1 mt-8">
                  <p className="text-xl font-medium">{data.title}</p>

                  <p className="text-gray-300">{data.artist}</p>
                  <span>
                    <PlayProgress />
                  </span>
                </div>
              </div>
            </motion.div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
