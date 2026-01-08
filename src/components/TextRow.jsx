import React, { useEffect, useRef, useState } from "react";
import { motion as Motion } from "motion/react";
import FlipBox from "./flipbox";

const TextRow = () => {
  const boxHeight = 20;
  const screenHeight = window.innerHeight;

  // ✅ Generate randomness ONCE
  const streamLengthRef = useRef(Math.floor(5 + Math.random() * 15)); // 5–20
  const speedRef = useRef(1 + Math.random() * 5);
  const startOffsetRef = useRef(-Math.random() * screenHeight);

  const streamLength = streamLengthRef.current;
  const speed = speedRef.current;

  const [offset, setOffset] = useState(startOffsetRef.current);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const next = prev + speed;
        return next > screenHeight + streamLength * boxHeight
          ? -Math.random() * screenHeight // OK here (not render)
          : next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [speed, screenHeight, streamLength]);

  return (
    <div className="relative w-[20px] h-screen overflow-hidden flex justify-center">
      <Motion.div
        style={{ transform: `translateY(${offset}px)` }}
        className="flex flex-col justify-start items-center"
      >
        {Array.from({ length: streamLength }).map((_, i) => (
          <Motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            <FlipBox />
          </Motion.div>
        ))}
      </Motion.div>
    </div>
  );
};

export default TextRow;
