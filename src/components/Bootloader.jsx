import { useEffect, useState } from "react";

export default function BootLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const DURATION = 1000; // 1 second
    const start = performance.now();

    function animate(now) {
      const elapsed = now - start;
      const t = Math.min(elapsed / DURATION, 1);

      // ease-out cubic (smooth + no jump)
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased * 100);

      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        sessionStorage.setItem("booted", "true");
        onComplete();
      }
    }

    requestAnimationFrame(animate);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black font-mono">
      <div className="text-emerald-400 text-[13px] mb-3 tracking-widest">
        loading
      </div>

      <div className="w-[240px] h-[16px] border border-emerald-500">
        <div
          className="h-full bg-emerald-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
