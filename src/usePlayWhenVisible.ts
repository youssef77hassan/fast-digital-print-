import { useEffect, RefObject } from "react";

/**
 * Plays a muted background video only while it is on screen and pauses it
 * otherwise, which keeps scrolling smooth on phones and saves data.
 */
export function usePlayWhenVisible(ref: RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}
