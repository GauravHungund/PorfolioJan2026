import { useEffect, useRef } from "react";

function Divider() {
  return (
    <div className="text-emerald-600 text-sm">
      ──────────────────────────────────────
    </div>
  );
}

export default function MicDrop() {
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
        <span>MicDrop.case</span>
        <span>project report</span>
      </div>

      {/* Title */}
      <h1 className="text-[20px] text-emerald-300 font-semibold">
        MicDrop
      </h1>
      <p className="text-[13.5px] text-emerald-400">
        Real-time conversational AI assistant for spoken collaboration
      </p>

      {/* Meta */}
      <div className="mt-4 grid grid-cols-2 gap-3 text-[12.5px] text-emerald-400">
        <div>
          <span className="text-emerald-500">Type:</span> AI Voice Application
        </div>
        <div>
          <span className="text-emerald-500">Alias:</span> EchoDuo (internal)
        </div>
        <div>
          <span className="text-emerald-500">Interface:</span> Voice-first
        </div>
        <div>
          <span className="text-emerald-500">Focus:</span> Real-time collaboration
        </div>
      </div>

      <Divider />

      {/* Overview */}
      <section className="space-y-4">
        <h3 className="text-[15px] text-emerald-400">[01] Overview</h3>

        <p className="text-[13.5px] text-emerald-300 leading-relaxed">
          MicDrop is a real-time conversational AI system designed to support
          spoken collaboration between two participants. The system listens,
          reasons, and responds contextually — enabling live discussion support,
          clarification, and synthesis without interrupting conversational flow.
        </p>

        <p className="text-[13.5px] text-emerald-300 leading-relaxed">
          The project was originally developed under the internal name
          <span className="text-emerald-400"> EchoDuo</span>, with MicDrop serving
          as the final product identity.
        </p>

        <Divider />
      </section>

      {/* Core Idea */}
      <section className="space-y-4">
        <h3 className="text-[15px] text-emerald-400">[02] Core Idea</h3>

        <ul className="list-disc pl-5 space-y-1 text-[13.5px] text-emerald-300">
          <li>Listen continuously to live conversation</li>
          <li>Maintain shared conversational context</li>
          <li>Reason over dialogue in real time</li>
          <li>Provide concise, timely AI interventions</li>
          <li>Avoid breaking human conversational rhythm</li>
        </ul>

        <Divider />
      </section>

      {/* System Flow (Table) */}
      <section className="space-y-3">
        <h3 className="text-[15px] text-emerald-400">[03] System Flow</h3>

        <div className="border border-emerald-700 bg-black/40 text-[12.5px]">
          <div className="grid grid-cols-3 border-b border-emerald-700 text-emerald-400">
            <div className="px-3 py-2 border-r border-emerald-700">Stage</div>
            <div className="px-3 py-2 border-r border-emerald-700">Component</div>
            <div className="px-3 py-2">Responsibility</div>
          </div>

          {[
            ["01", "Audio Input", "Capture live microphone streams"],
            ["02", "Speech-to-Text", "Convert spoken dialogue into text"],
            ["03", "Context Buffer", "Maintain rolling conversation state"],
            ["04", "Reasoning Engine", "Interpret intent and discussion flow"],
            ["05", "Response Generator", "Produce concise AI suggestions"],
            ["06", "Voice Output", "Deliver spoken AI responses"],
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

      {/* Design Philosophy */}
      <section className="space-y-4">
        <h3 className="text-[15px] text-emerald-400">[04] Design Philosophy</h3>

        <ul className="list-disc pl-5 space-y-1 text-[13.5px] text-emerald-300">
          <li>Voice-first interaction over visual UI</li>
          <li>Minimal latency for natural dialogue</li>
          <li>Short, interruptible AI responses</li>
          <li>Human conversation remains primary</li>
          <li>AI acts as collaborator, not controller</li>
        </ul>

        <Divider />
      </section>

      {/* Use Cases */}
      <section className="space-y-4">
        <h3 className="text-[15px] text-emerald-400">[05] Use Cases</h3>

        <ul className="list-disc pl-5 space-y-1 text-[13.5px] text-emerald-300">
          <li>Pair programming discussions</li>
          <li>Brainstorming and ideation sessions</li>
          <li>Interview preparation</li>
          <li>Language practice and feedback</li>
          <li>Meeting summarization and clarification</li>
        </ul>

        <Divider />
      </section>

      {/* CTA */}
      <div className="mt-6 flex items-center gap-4 text-[13px]">
        <a
          href="https://github.com/GauravHungund/MicdropAI.git"
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
