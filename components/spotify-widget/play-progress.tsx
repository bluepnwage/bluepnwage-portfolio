import * as Progress from "@radix-ui/react-progress";
import { useCurrentMs } from "./current-provider";

type PropTypes = {
  totalDuration: number;
};

function convertMilliseconds(ms: number): string {
  // Calculate the total seconds from milliseconds
  const totalSeconds = Math.floor(ms / 1000);

  // Calculate the minutes part
  const minutes = Math.floor(totalSeconds / 60);

  // Calculate the remaining seconds part
  const seconds = totalSeconds % 60;

  // Format the minutes and seconds with leading zeros if necessary
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  // Return the formatted string in MM:SS format
  return `${formattedMinutes}:${formattedSeconds}`;
}

export function PlayProgress({ totalDuration }: PropTypes) {
  const progress = useCurrentMs();

  const currentProgress = (progress / totalDuration) * 100;

  return (
    <div className="mt-4">
      <Progress.Root
        className="relative overflow-hidden bg-neutral-800 rounded-full w-full h-2"
        style={{
          transform: "translateZ(0)",
        }}
        value={currentProgress}
      >
        <Progress.Indicator
          className="bg-white w-full h-full transition-transform duration-[1s] ease-linear"
          style={{ transform: `translateX(-${100 - currentProgress}%)` }}
        />
      </Progress.Root>
      <div className="flex justify-between text-gray-300 text-sm font-medium mt-2">
        <span>{convertMilliseconds(progress)}</span>
        <span>{convertMilliseconds(totalDuration)}</span>
      </div>
    </div>
  );
}
