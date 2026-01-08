import { useEffect, useRef } from "react";
import ProjectCaseSection from "../components/ProjectCaseSection";
import dungeonHero from "../assets/dungeonforge/DungeonForge1.png";
import dungeonStory from "../assets/dungeonforge/DungeonForge2.png";
import useSwipeNavigation from "../hooks/useSwipeNavigation";



function Divider() {
  return (
    <div className="text-emerald-600 text-sm">
      ──────────────────────────────────────
    </div>
  );
}

export default function DungeonForge() {
  const containerRef = useRef(null);
  const { onTouchStart, onTouchEnd } = useSwipeNavigation();

  // smooth scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.scrollBehavior = "smooth";
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
        <span>DungeonForge.case</span>
        <span>project report</span>
      </div>

      <h1 className="text-[20px] text-emerald-300 font-semibold">
        Dungeon Forge
      </h1>
      <p className="text-[13.5px] text-emerald-400">
        AI-powered collaborative storytelling platform
      </p>

      {/* Meta */}
      <div className="mt-4 grid grid-cols-2 gap-3 text-[12.5px] text-emerald-400">
        <div>
          <span className="text-emerald-500">Status:</span> Live
        </div>
        <div>
          <span className="text-emerald-500">Award:</span> 3rd Place
        </div>
        <div>
          <span className="text-emerald-500">Built At:</span> Content Hack 2025
        </div>
        <div>
          <span className="text-emerald-500">Mode:</span> Multiplayer / AI
        </div>
      </div>

      <Divider />

      {/* Overview */}
<ProjectCaseSection title="[01] Overview" image={dungeonHero}>
  Dungeon Forge is an AI-powered storytelling forge where players co-create
  legendary adventures in real time. An AI Dungeon Master dynamically generates
  worlds, quests, and dialogue while players shape the narrative through choices
  and actions.
</ProjectCaseSection>

      {/* Features */}
      <section className="space-y-3">
        <h3 className="text-[15px] text-emerald-400">[02] Core Features</h3>
            <div className="flex flex-wrap gap-2 text-[12.5px] text-emerald-300">
              {[
                "AI Dungeon Master",
                "World State",
                "Player Input",
                "Story Text",
                "Scene Art",
                "Multiplayer Sync",
                "Voice Output",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-emerald-700/60 px-2 py-1 bg-black/40"
                >
                  {item}
                </span>
              ))}
            </div>
        <Divider />
      </section>

      {/* Storybook */}
<ProjectCaseSection
  title="[03] Dual-Page Storytelling"
  image={dungeonStory}
  reverse
>
  The interface mimics an enchanted book. The left page narrates the story through
  AI-generated prose while the right page allows players to write actions,
  dialogue, and decisions that influence the unfolding world.
</ProjectCaseSection>

    {/* System Flow */}
    <section className="space-y-3">
      <h3 className="text-[15px] text-emerald-400">[04] System Flow</h3>
            
      <div className="border border-emerald-700 bg-black/40">
        <table className="w-full text-[13px] text-emerald-300 border-collapse">
          <thead>
            <tr className="border-b border-emerald-700 text-emerald-400">
              <th className="px-3 py-2 text-left">Step</th>
              <th className="px-3 py-2 text-left">Component</th>
              <th className="px-3 py-2 text-left">Responsibility</th>
            </tr>
          </thead>
            
          <tbody className="divide-y divide-emerald-800/60">
            <tr>
              <td className="px-3 py-2">01</td>
              <td className="px-3 py-2">AI Dungeon Master</td>
              <td className="px-3 py-2">
                Interprets player intent and controls narrative logic
              </td>
            </tr>
            
            <tr>
              <td className="px-3 py-2">02</td>
              <td className="px-3 py-2">World State</td>
              <td className="px-3 py-2">
                Maintains evolving story context, characters, and environment
              </td>
            </tr>
            
            <tr>
              <td className="px-3 py-2">03</td>
              <td className="px-3 py-2">Player Input</td>
              <td className="px-3 py-2">
                Captures decisions, dialogue, and actions from players
              </td>
            </tr>
            
            <tr>
              <td className="px-3 py-2">04</td>
              <td className="px-3 py-2">Story Text + Scene Art</td>
              <td className="px-3 py-2">
                Generates narrative prose and optional cinematic imagery
              </td>
            </tr>
            
            <tr>
              <td className="px-3 py-2">05</td>
              <td className="px-3 py-2">Multiplayer Sync</td>
              <td className="px-3 py-2">
                Synchronizes state across all connected players
              </td>
            </tr>
            
            <tr>
              <td className="px-3 py-2">06</td>
              <td className="px-3 py-2">Voice Output</td>
              <td className="px-3 py-2">
                Narrates scenes using AI-generated voice for immersion
              </td>
            </tr>
          </tbody>
        </table>
      </div>
            
      <Divider />
    </section>


      {/* Tech Stack */}
      <section className="space-y-2">
        <h3 className="text-[15px] text-emerald-400">[05] Tech Stack</h3>

        <p className="text-[13.5px]">
          Frontend: React, Tailwind CSS, Vite
        </p>
        <p className="text-[13.5px]">
          Backend: Flask, FastAPI
        </p>
        <p className="text-[13.5px]">
          AI: Airia, Stack AI, OpenAI
        </p>
        <p className="text-[13.5px]">
          Audio: ElevenLabs
        </p>

        <Divider />
      </section>

      {/* CTA */}
      <div className="mt-6 flex items-center gap-4 text-[13px]">
        <a
          href="https://dungeonforge-contenthack2025-1.onrender.com"
          target="_blank"
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
