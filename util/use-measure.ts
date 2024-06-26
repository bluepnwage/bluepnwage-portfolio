import { useEffect, useRef, useState } from "react";

export function useMeasure(title?: string) {
  const ref = useRef(null);
  const [rect, setRect] = useState<Omit<DOMRect, "toJSON">>({
    height: 0,
    width: 0,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    x: 0,
    y: 0,
  });
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setRect(entry.target.getBoundingClientRect());
    });
    observer.observe(ref.current);
    return () => {
      if (!ref.current) return;
      observer.unobserve(ref.current);
    };
  }, [title]);
  return [ref, rect] as const;
}
