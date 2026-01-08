import { useEffect, useRef } from "react";
import emotuneHome from "../assets/emotune/EmotuneHome.png";
import useSwipeNavigation from "../hooks/useSwipeNavigation";

function Divider() {
  return (
    <div className="text-emerald-600 text-sm">
      ──────────────────────────────────────
    </div>
  );
}

export default function EmoTune() {
  const containerRef = useRef(null);
  const { onTouchStart, onTouchEnd } = useSwipeNavigation();
  
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="h-full overflow-y-auto"
    >
    <div
      ref={containerRef}
      className="
        h-full
        overflow-y-auto
        pr-3
        font-mono
        text-emerald-300
        scrollbar-thin
        scrollbar-track-black
        scrollbar-thumb-emerald-700
      "
    >
      {/* Header */}
      <div className="flex justify-between text-[13px] text-emerald-400 mb-2">
        <span>EmoTune.case</span>
        <span>project report</span>
      </div>

      {/* Title */}
      <h1 className="text-[20px] text-emerald-300 font-semibold">
        EmoTune
      </h1>
      <p className="text-[13.5px] text-emerald-400">
        Emotion-aware music and content recommendation system
      </p>

      {/* Meta */}
      <div className="mt-4 grid grid-cols-2 gap-3 text-[12.5px] text-emerald-400">
        <div>
          <span className="text-emerald-500">Type:</span> Web Application
        </div>
        <div>
          <span className="text-emerald-500">Focus:</span> AI + UX
        </div>
        <div>
          <span className="text-emerald-500">Input:</span> Emotion / Mood
        </div>
        <div>
          <span className="text-emerald-500">Output:</span> Music + Quotes
        </div>
      </div>

      <Divider />

      {/* Overview */}
      <section className="space-y-4">
        <h3 className="text-[15px] text-emerald-400">[01] Overview</h3>

        <p className="text-[13.5px] text-emerald-300 leading-relaxed">
          EmoTune is an emotion-aware recommendation platform that translates a
          user’s emotional state into personalized music and content suggestions.
          The system focuses on reducing friction between how a user feels and
          what they want to listen to — without requiring complex input.
        </p>

        <p className="text-[13.5px] text-emerald-300 leading-relaxed">
          Instead of browsing endlessly through playlists, users express how
          they feel, and EmoTune responds with curated audio and textual content
          designed to match or gently shift their mood.
        </p>

        <Divider />
      </section>

      {/* Visual Snapshot */}
      <section className="space-y-4">
        <h3 className="text-[15px] text-emerald-400">[02] Interface Snapshot</h3>

        <div className="border border-emerald-700 bg-black/40">
          <img
            src={emotuneHome}
            alt="EmoTune Home"
            loading="lazy"
            className="
              w-full
              grayscale
              opacity-70
              transition-all
              duration-500
              hover:grayscale-0
              hover:opacity-100
            "
          />
        </div>

        <Divider />
      </section>

      {/* Core Features */}
      <section className="space-y-3">
        <h3 className="text-[15px] text-emerald-400">[03] Core Features</h3>

        <div className="grid grid-cols-2 gap-3 text-[13px] text-emerald-300">
          <div>Emotion-driven recommendations</div>
          <div>Music and quote pairing</div>
          <div>Minimal-input user flow</div>
          <div>Fast response and feedback loop</div>
          <div>Clean, distraction-free interface</div>
          <div>Designed for repeated daily use</div>
        </div>

        <Divider />
      </section>

      {/* System Flow (Table) */}
      <section className="space-y-3">
        <h3 className="text-[15px] text-emerald-400">[04] System Flow</h3>

        <div className="border border-emerald-700 bg-black/40 text-[12.5px]">
          <div className="grid grid-cols-3 border-b border-emerald-700 text-emerald-400">
            <div className="px-3 py-2 border-r border-emerald-700">Stage</div>
            <div className="px-3 py-2 border-r border-emerald-700">Component</div>
            <div className="px-3 py-2">Purpose</div>
          </div>

          {[
            ["01", "User Input", "Capture mood or emotional context"],
            ["02", "Emotion Mapping", "Normalize input into emotion categories"],
            ["03", "AI Reasoning", "Select matching content strategies"],
            ["04", "Music Retrieval", "Fetch relevant tracks"],
            ["05", "Content Pairing", "Attach quotes or affirmations"],
            ["06", "UI Delivery", "Present results with minimal friction"],
          ].map(([id, comp, desc]) => (
            <div
              key={id}
              className="grid grid-cols-3 border-b border-emerald-800/60"
            >
              <div className="px-3 py-2 border-r border-emerald-800/60 text-emerald-400">
                {id}
              </div>
              <div className="px-3 py-2 border-r border-emerald-800/60">
                {comp}
              </div>
              <div className="px-3 py-2 text-emerald-300">{desc}</div>
            </div>
          ))}
        </div>

        <Divider />
      </section>

      {/* Design Intent */}
      <section className="space-y-4">
        <h3 className="text-[15px] text-emerald-400">[05] Design Intent</h3>

        <ul className="list-disc pl-5 space-y-1 text-[13.5px] text-emerald-300">
          <li>Reduce decision fatigue during emotional moments</li>
          <li>Encourage expressive but lightweight interaction</li>
          <li>Balance emotional validation with subtle uplift</li>
          <li>Keep the interface calm and uncluttered</li>
          <li>Support quick, repeatable usage patterns</li>
        </ul>

        <Divider />
      </section>

      {/* CTA */}
      <div className="mt-6 flex items-center gap-4 text-[13px]">
        <a
          href="https://emotune-dev.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="
            border
            border-emerald-500
            px-4
            py-2
            hover:bg-emerald-500/10
            transition
          "
        >
          ▶ Launch Live Demo
        </a>

        <span className="text-emerald-500">
          Case study complete
        </span>
      </div>
    </div>
  </div>
  );
}
