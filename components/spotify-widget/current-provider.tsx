import { useState, useContext, createContext, useEffect } from "react";

const CurrentMSContext = createContext(0);

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

export function CurrentMSProvider({
  children,
  ms,
  totalDuration,
}: {
  children: React.ReactNode;
  ms: number;
  totalDuration: number;
}) {
  const [progress, setProgress] = useState(ms);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (convertMilliseconds(prev) === convertMilliseconds(totalDuration)) {
          clearInterval(interval);
          return prev;
        }

        return prev + 1000;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [ms]);
  return (
    <CurrentMSContext.Provider value={progress}>
      {children}
    </CurrentMSContext.Provider>
  );
}

export function useCurrentMs() {
  return useContext(CurrentMSContext);
}
