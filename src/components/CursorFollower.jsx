import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const ref = useRef(null);
  const lastX = useRef(0);

  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      const goingLeft = x < lastX.current;
      lastX.current = x;

      if (ref.current) {
        // diagonal offset: right + down
        const ox = 10;
        const oy = 12;

        ref.current.style.transform = `translate(${x + ox}px, ${y + oy}px) scaleX(${
          goingLeft ? -1 : 1
        })`;
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <img
      ref={ref}
      src="/cursor.gif"
      alt=""
      className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[999] will-change-transform"
    />
  );
}
