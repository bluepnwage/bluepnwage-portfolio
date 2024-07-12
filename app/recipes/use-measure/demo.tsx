"use client";
import { useMeasure } from "util/use-measure";

export function Demo() {
  const [ref, rect] = useMeasure();

  return (
    <div className="pb-48 w-full">
      <h2 className="mt-6 mb-4 font-bold text-2xl text-gray-50">Demo</h2>
      <p className="mb-4">Resize textarea</p>
      <pre className="mb-4">{JSON.stringify(rect, null, 2)}</pre>

      <textarea
        ref={ref}
        className="resize max-w-screen-lg"
      ></textarea>
    </div>
  );
}
