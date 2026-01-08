import { useEffect, useRef } from "react";

function Divider() {
  return (
    <div className="text-emerald-600 text-sm">
      ──────────────────────────────────────
    </div>
  );
}

export default function TaskChain() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
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
        <span>TaskChain.case</span>
        <span>course project</span>
      </div>

      {/* Title */}
      <h1 className="text-[20px] text-emerald-300 font-semibold">
        TaskChain
      </h1>
      <p className="text-[13.5px] text-emerald-400">
        Social accountability and habit-building mobile application
      </p>

      {/* Meta */}
      <div className="mt-4 grid grid-cols-2 gap-3 text-[12.5px] text-emerald-400">
        <div>
          <span className="text-emerald-500">Course:</span> CSEN 268
        </div>
        <div>
          <span className="text-emerald-500">Institution:</span> Santa Clara University
        </div>
        <div>
          <span className="text-emerald-500">Platform:</span> Mobile + Web
        </div>
        <div>
          <span className="text-emerald-500">Team:</span> Group Project
        </div>
      </div>

      <Divider />

      {/* Overview */}
      <section className="space-y-4">
        <h3 className="text-[15px] text-emerald-400">[01] Overview</h3>

        <p className="text-[13.5px] text-emerald-300 leading-relaxed">
          TaskChain is a cross-platform mobile application designed to help users
          build and maintain habits through social accountability. The core idea
          is simple: consistency improves when goals are shared, visible, and
          reinforced by peers.
        </p>

        <p className="text-[13.5px] text-emerald-300 leading-relaxed">
          Users create task chains, invite friends, track daily progress, and
          earn achievements as they maintain streaks over time. The application
          emphasizes clarity, motivation, and habit reinforcement rather than
          complexity.
        </p>

        <Divider />
      </section>

      {/* Core Features */}
      <section className="space-y-3">
        <h3 className="text-[15px] text-emerald-400">[02] Core Features</h3>

        <div className="grid grid-cols-2 gap-3 text-[13px] text-emerald-300">
          <div>Home dashboard with active chains</div>
          <div>Multi-step chain creation flow</div>
          <div>Progress tracking with visual indicators</div>
          <div>Profile and account management</div>
          <div>Achievements and streak rewards</div>
          <div>Configurable settings and preferences</div>
        </div>

        <Divider />
      </section>

      {/* Application Flow (Table) */}
      <section className="space-y-3">
        <h3 className="text-[15px] text-emerald-400">[03] Application Flow</h3>

        <div className="border border-emerald-700 bg-black/40 text-[12.5px]">
          <div className="grid grid-cols-3 border-b border-emerald-700 text-emerald-400">
            <div className="px-3 py-2 border-r border-emerald-700">Stage</div>
            <div className="px-3 py-2 border-r border-emerald-700">Screen</div>
            <div className="px-3 py-2">Purpose</div>
          </div>

          {[
            ["01", "Authentication", "Secure sign-in and user initialization"],
            ["02", "Home Dashboard", "View chains, progress, and achievements"],
            ["03", "Create Chain", "Define tasks, frequency, and participants"],
            ["04", "Progress Tracking", "Daily updates and streak management"],
            ["05", "Profile", "View and edit personal information"],
            ["06", "Settings", "Configure notifications and preferences"],
          ].map(([id, screen, desc]) => (
            <div
              key={id}
              className="grid grid-cols-3 border-b border-emerald-800/60"
            >
              <div className="px-3 py-2 border-r border-emerald-800/60 text-emerald-400">
                {id}
              </div>
              <div className="px-3 py-2 border-r border-emerald-800/60">
                {screen}
              </div>
              <div className="px-3 py-2 text-emerald-300">{desc}</div>
            </div>
          ))}
        </div>

        <Divider />
      </section>

      {/* Technology Stack */}
      <section className="space-y-2">
        <h3 className="text-[15px] text-emerald-400">[04] Technology Stack</h3>

        <p className="text-[13.5px]">Framework: Flutter</p>
        <p className="text-[13.5px]">Language: Dart</p>
        <p className="text-[13.5px]">Design System: Material Design 3</p>
        <p className="text-[13.5px]">Typography: Google Fonts</p>

        <Divider />
      </section>

      {/* Platform Support */}
      <section className="space-y-2">
        <h3 className="text-[15px] text-emerald-400">[05] Platform Support</h3>

        <div className="grid grid-cols-3 gap-2 text-[13px] text-emerald-300">
          <div>Android</div>
          <div>iOS</div>
          <div>Web</div>
          <div>macOS</div>
          <div>Windows</div>
          <div>Linux</div>
        </div>

        <Divider />
      </section>

      {/* Learning Outcomes */}
      <section className="space-y-3">
        <h3 className="text-[15px] text-emerald-400">[06] Learning Outcomes</h3>

        <ul className="list-disc pl-5 space-y-1 text-[13.5px] text-emerald-300">
          <li>Building cross-platform applications with Flutter</li>
          <li>Designing multi-step user flows</li>
          <li>Managing application state across screens</li>
          <li>Applying Material Design principles</li>
          <li>Collaborating in a team-based development environment</li>
        </ul>

        <Divider />
      </section>

      {/* CTA */}
      <div className="mt-6 flex items-center gap-4 text-[13px]">
        <a
          href="https://github.com/nitrogen404/csen268.git"
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
          ▶ View GitHub Repository
        </a>

        <span className="text-emerald-500">
          Case study complete
        </span>
      </div>
    </div>
  );
}
