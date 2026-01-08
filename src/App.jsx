import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import SystemMenu from "./components/SystemMenu";
import MatrixRain from "./components/MatrixRain";
import BootLoader from "./components/Bootloader";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import DungeonForge from "./pages/DungeonForge";
import Odyssey from "./pages/Odyssey";
import SilentSignal from "./pages/silentSignal";
import MicDrop from "./components/MicDrop";
import EmoTune from "./pages/Emotune";
import TaskChain from "./pages/TaskChain";
import EducationExperience from "./pages/ExperienceEducation";

export default function App() {
  const location = useLocation();
  const pageKey = location.pathname;

  const alreadyBooted = sessionStorage.getItem("booted") === "true";
  const [booted, setBooted] = useState(alreadyBooted);

  const [menuOpen, setMenuOpen] = useState(false);

  if (!booted) {
    return <BootLoader onComplete={() => setBooted(true)} />;
  }

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Matrix background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <MatrixRain />
      </div>

      {/* App shell */}
      <div className="relative z-10 w-screen h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-[92vw] md:w-[85vw] h-[90vh] md:h-[85vh] border p-2">

          {/* ===== MOBILE SYSTEM HEADER ===== */}
          <div className="md:hidden border border-emerald-400 bg-black/70 backdrop-blur">
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="
                w-full
                px-4 py-3
                flex items-center justify-between
                font-mono
                text-emerald-300
                tracking-widest
                hover:bg-emerald-400/10
                transition
              "
            >
              <span>SYSTEM</span>
              <span className="text-sm">{menuOpen ? "▴" : "▾"}</span>
            </button>
          </div>

          {/* ===== MOBILE SYSTEM DRAWER (push-down) ===== */}
          <div
            className={`
              md:hidden
              overflow-hidden
              transition-[max-height] duration-300 ease-in-out
              border-x border-b border-emerald-400
              bg-black/90 backdrop-blur
              ${menuOpen ? "max-h-[400px]" : "max-h-0"}
            `}
          >
            <div className="p-4">
              <SystemMenu />
            </div>
          </div>

          {/* ===== DESKTOP SIDEBAR ===== */}
          <div className="hidden md:block w-[240px]">
            <SystemMenu />
          </div>

          {/* ===== MAIN CONTENT ===== */}
          <div className="flex-1 border border-emerald-400 p-2 bg-black/40 backdrop-blur-md overflow-hidden">
            <Routes>
              <Route path="/" element={<About pageKey={pageKey} />} />
              <Route path="/about" element={<About pageKey={pageKey} />} />
              <Route path="/projects" element={<Projects pageKey={pageKey} />} />
              <Route path="/skills" element={<Skills pageKey={pageKey} />} />
              <Route
                path="/Education-Experience"
                element={<EducationExperience pageKey={pageKey} />}
              />
              <Route path="/contact" element={<Contact pageKey={pageKey} />} />

              {/* Project routes */}
              <Route path="/projects/dungeon_forge.md" element={<DungeonForge />} />
              <Route path="/projects/odyssey.md" element={<Odyssey />} />
              <Route path="/projects/silentsignal.md" element={<SilentSignal />} />
              <Route path="/projects/micdrop_ai.md" element={<MicDrop />} />
              <Route path="/projects/emotune.md" element={<EmoTune />} />
              <Route path="/projects/taskchain.md" element={<TaskChain />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
