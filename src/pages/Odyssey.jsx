import { useEffect, useRef } from "react";
import ProjectCaseSection from "../components/ProjectCaseSection";
import odysseyHome from "../assets/Odyssey/OdysseyHome.png";
import odysseyTrip from "../assets/Odyssey/OdysseyTrip.png";
import odysseyMemories from "../assets/Odyssey/OdysseyMemories.png";
import useSwipeNavigation from "../hooks/useSwipeNavigation";


function Divider() {
  return (
    <div className="text-emerald-600 text-sm">
      ──────────────────────────────────────
    </div>
  );
}

export default function Odyssey() {
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
        <span>Odyssey.case</span>
        <span>project report</span>
      </div>

      {/* Title */}
      <h1 className="text-[20px] text-emerald-300 font-semibold">
        Odyssey
      </h1>
      <p className="text-[13.5px] text-emerald-400">
        Smart trip planning and memory journaling platform
      </p>

      {/* Meta */}
      <div className="mt-4 grid grid-cols-2 gap-3 text-[12.5px] text-emerald-400">
        <div>
          <span className="text-emerald-500">Type:</span> Web Application
        </div>
        <div>
          <span className="text-emerald-500">Focus:</span> Travel + UX
        </div>
        <div>
          <span className="text-emerald-500">Auth:</span> Session-based
        </div>
        <div>
          <span className="text-emerald-500">Backend:</span> AWS APIs
        </div>
      </div>

      <Divider />

      {/* Overview */}
<ProjectCaseSection title="[01] Overview" image={odysseyHome}>
  Odyssey is a smart trip planning and memory journaling platform designed to
  help users build itineraries, discover nearby places, and preserve travel
  memories using a clean UI backed by cloud APIs.
</ProjectCaseSection>

      {/* Trip Planning */}
<ProjectCaseSection
  title="[02] Trip Planner"
  image={odysseyTrip}
  reverse
>
  Users can construct itineraries with intelligent auto-suggestions for places
  near their route. Suggested locations can be added directly and saved both
  locally and to the backend.
</ProjectCaseSection>

      {/* Memories */}
<ProjectCaseSection title="[03] Memories System" image={odysseyMemories}>
  The memories system allows users to upload photos and notes associated with a
  trip. Images are stored securely and retrieved using signed S3 URLs for
  efficient delivery.
</ProjectCaseSection>

      {/* Features */}
      <section className="space-y-3">
        <h3 className="text-[15px] text-emerald-400">[04] Core Features</h3>

        <div className="grid grid-cols-2 gap-3 text-[13px] text-emerald-300">
          <div>Starry animated background</div>
          <div>Session-based authentication</div>
          <div>Smart place auto-suggestions</div>
          <div>Editable trip itineraries</div>
          <div>Photo-based memory journaling</div>
          <div>Signed S3 image delivery</div>
        </div>

        <Divider />
      </section>
{/* System Flow */}
<section className="space-y-3">
  <h3 className="text-[15px] text-emerald-400">[05] System Flow</h3>

  <div className="border border-emerald-700 bg-black/40 text-[12.5px]">
    <div className="grid grid-cols-3 border-b border-emerald-700 text-emerald-400">
      <div className="px-3 py-2 border-r border-emerald-700">Stage</div>
      <div className="px-3 py-2 border-r border-emerald-700">Component</div>
      <div className="px-3 py-2">Responsibility</div>
    </div>

    {[
      ["01", "User Input", "Trip details, memories, photos, notes"],
      ["02", "React + Vite UI", "UI rendering, state management, animations"],
      ["03", "Vite Proxy Layer", "API routing and CORS avoidance"],
      ["04", "AWS API Gateway", "Request validation and routing"],
      ["05", "Lambda Functions", "Business logic and data handling"],
      ["06", "AWS S3", "Image storage and signed URL delivery"],
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

      {/* Tech Stack */}
      <section className="space-y-2">
        <h3 className="text-[15px] text-emerald-400">[06] Tech Stack</h3>

        <p className="text-[13.5px]">Frontend: React 18, Vite, Tailwind CSS</p>
        <p className="text-[13.5px]">Routing: React Router</p>
        <p className="text-[13.5px]">Animations: Motion</p>
        <p className="text-[13.5px]">Backend: AWS API Gateway, Lambda</p>
        <p className="text-[13.5px]">Storage: AWS S3</p>

        <Divider />
      </section>

      {/* Auth & Storage */}
      <section className="space-y-2">
        <h3 className="text-[15px] text-emerald-400">[07] Auth & Storage</h3>

        <p className="text-[13.5px]">
          Authentication is handled using sessionStorage, storing access tokens
          and user email for API requests. Images are intentionally not persisted
          in localStorage to avoid quota limits, relying instead on backend
          storage and signed URLs.
        </p>

        <Divider />
      </section>

      {/* CTA */}
      <div className="mt-6 flex items-center gap-4 text-[13px]">
        <a
          href="https://odysseytripplanner.netlify.app"
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
