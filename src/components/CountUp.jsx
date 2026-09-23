import { useEffect, useRef, useState } from "react";
import useInView from "@/lib/useInView";

// Counts up to `to` once the number scrolls into view.
export default function CountUp({ to, decimals = 0, prefix = "", suffix = "", duration = 1600, className = "" }) {
  const [ref, inView] = useInView(0.4);
  const [value, setValue] = useState(0);
  const frame = useRef(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out
      setValue(to * eased);
      if (p < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
