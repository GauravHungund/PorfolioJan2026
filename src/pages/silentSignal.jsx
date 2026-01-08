import { useEffect, useRef } from "react";
import useSwipeNavigation from "../hooks/useSwipeNavigation";
function Divider() {
  return (
    <div className="text-emerald-600 text-sm">
      ──────────────────────────────────────
    </div>
  );
}

export default function SilentSignal() {
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
        <span>SilentSignal.case</span>
        <span>project report</span>
      </div>

      {/* Title */}
      <h1 className="text-[20px] text-emerald-300 font-semibold">
        SilentSignal
      </h1>
      <p className="text-[13.5px] text-emerald-400">
        Hybrid AI system for emotional abuse detection and crisis intervention
      </p>

      {/* Meta */}
      <div className="mt-4 grid grid-cols-2 gap-3 text-[12.5px] text-emerald-400">
        <div>
          <span className="text-emerald-500">Category:</span> AI Safety / NLP
        </div>
        <div>
          <span className="text-emerald-500">Eligibility:</span> Nemotron Prize
        </div>
        <div>
          <span className="text-emerald-500">Model:</span> Nemotron-3 (NVIDIA NIM)
        </div>
        <div>
          <span className="text-emerald-500">Interface:</span> Streamlit + WhatsApp
        </div>
      </div>

      <Divider />

      {/* Overview */}
      <section className="space-y-4">
        <h3 className="text-[15px] text-emerald-400">[01] Overview</h3>

        <p className="text-[13.5px] text-emerald-300 leading-relaxed">
          SilentSignal is a privacy-first AI system designed to detect emotional
          abuse patterns and provide explainable risk assessments with integrated
          crisis resources. It combines rule-based detection with advanced
          reasoning models to deliver safe, interpretable, and measurable
          outcomes.
        </p>

        <Divider />
      </section>

      {/* Core Innovation */}
      <section className="space-y-4">
        <h3 className="text-[15px] text-emerald-400">[02] Core Innovation</h3>

        <div className="space-y-2 text-[13.5px] text-emerald-300">
          <p>
            SilentSignal uses a hybrid Retrieval-Augmented Generation workflow
            that fuses deterministic pattern detection with contextual AI
            reasoning.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Local retrieval of abuse pattern definitions</li>
            <li>Context enrichment using psychological frameworks</li>
            <li>Rule-based signal extraction</li>
            <li>AI-driven reasoning and scoring</li>
            <li>Explainable, structured outputs</li>
          </ul>
        </div>

        <Divider />
      </section>

      {/* Nemotron Integration */}
      <section className="space-y-4">
        <h3 className="text-[15px] text-emerald-400">[03] Nemotron Integration</h3>

        <div className="text-[13.5px] text-emerald-300 space-y-2">
          <p>Nemotron-3 is used for:</p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Contextual reasoning about emotional dynamics</li>
            <li>Intent and manipulation pattern inference</li>
            <li>Structured JSON output generation</li>
            <li>Explainable reasoning chains</li>
          </ul>
        </div>

        <Divider />
      </section>

      {/* System Flow Table */}
      <section className="space-y-3">
        <h3 className="text-[15px] text-emerald-400">[04] System Flow</h3>

        <div className="border border-emerald-700 bg-black/40 text-[12.5px]">
          <div className="grid grid-cols-3 border-b border-emerald-700 text-emerald-400">
            <div className="px-3 py-2 border-r border-emerald-700">Stage</div>
            <div className="px-3 py-2 border-r border-emerald-700">Component</div>
            <div className="px-3 py-2">Responsibility</div>
          </div>

          {[
            ["01", "User Input", "Text messages from UI or WhatsApp"],
            ["02", "Preprocessing", "Segmentation and normalization"],
            ["03", "RAG Retrieval", "Fetch abuse patterns and definitions"],
            ["04", "Nemotron-3", "Contextual reasoning and intent analysis"],
            ["05", "Rule Engine", "Deterministic pattern detection"],
            ["06", "Fusion Layer", "Hybrid scoring and risk assessment"],
            ["07", "Report Builder", "Structured explainable output"],
            ["08", "Safety Layer", "Crisis resources and escalation"],
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

      {/* Privacy & Safety */}
      <section className="space-y-4">
        <h3 className="text-[15px] text-emerald-400">[05] Privacy & Safety</h3>

        <ul className="list-disc pl-5 space-y-1 text-[13.5px] text-emerald-300">
          <li>Zero data storage — all processing in memory</li>
          <li>No external data transmission</li>
          <li>Panic button with disguise interface</li>
          <li>Integrated crisis hotlines and support resources</li>
          <li>Rate-limited alerts and safeguards</li>
        </ul>

        <Divider />
      </section>

      {/* Output Example */}
      <section className="space-y-3">
        <h3 className="text-[15px] text-emerald-400">[06] Example Output</h3>

        <pre className="text-[12.5px] text-emerald-400 bg-black/40 p-3 border border-emerald-700">
{`{
  "risk_level": "concerning",
  "patterns": ["gaslighting", "guilt_tripping"],
  "summary": "Detected manipulation tactics including reality denial",
  "red_flags": ["You're imagining things", "If you loved me"],
  "suggestions": ["Trust your instincts", "Seek professional support"],
  "reasoning": "Hybrid analysis combining rules and AI reasoning"
}`}
        </pre>

        <Divider />
      </section>

      {/* CTA */}
      <div className="mt-6 flex items-center gap-4 text-[13px]">
        <a
          href="https://github.com/dddishant/SilentSignal.git"
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
          ▶ Open GitHub Repo
        </a>
      </div>
    </div>
  </div>
  );
}
