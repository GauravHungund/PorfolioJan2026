import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let w = 0;
    let h = 0;
    let dpr = window.devicePixelRatio || 1;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
    const fontSize = 20;

    let columns = 0;
    let rows = 0;

    let drops = [];        // row index per column
    let glyphs = [];       // current glyph per column
    let frameCounters = [];
    let frameDelays = [];

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${fontSize}px ui-monospace, Menlo, Consolas, monospace`;

      columns = Math.floor(w / fontSize);
      rows = Math.floor(h / fontSize);

      drops = Array.from({ length: columns }, () =>
        Math.floor(Math.random() * rows)
      );

      glyphs = Array.from(
        { length: columns },
        () => chars[Math.floor(Math.random() * chars.length)]
      );

      frameCounters = Array.from({ length: columns }, () => 0);

      // 🔑 BIGGER NUMBERS = SLOWER (this is the key)
      frameDelays = Array.from(
        { length: columns },
        () => 8 + Math.floor(Math.random() * 20) // try 14–34
      );
    };

    const draw = () => {
      /* TRAIL FADE */
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < columns; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        /* HEAD */
        ctx.fillStyle = "rgba(180, 255, 220, 1)";
        ctx.shadowColor = "rgba(0, 255, 153, 0.7)";
        ctx.shadowBlur = 8;
        ctx.fillText(glyphs[i], x, y);

        /* TRAIL */
        ctx.shadowBlur = 0;
        ctx.fillStyle = "rgba(0, 255, 153, 0.6)";
        ctx.fillText(glyphs[i], x, y - fontSize);

        /* STEP PER ROW (NOT PER FRAME) */
        frameCounters[i]++;
        if (frameCounters[i] >= frameDelays[i]) {
          drops[i]++;
          glyphs[i] = chars[Math.floor(Math.random() * chars.length)];
          frameCounters[i] = 0;
        }

        /* RESET */
        if (drops[i] > rows && Math.random() > 0.985) {
          drops[i] = 0;
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    rafRef.current = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
