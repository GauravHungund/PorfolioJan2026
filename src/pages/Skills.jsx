import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaDatabase,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiFirebase,
  SiFlutter,
  SiDart,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

function Divider() {
  return (
    <div className="text-emerald-600 text-sm">
      ──────────────────────────────────────
    </div>
  );
}

function SkillRow({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="text-emerald-400 text-[16px]" />
      <span>{label}</span>
    </div>
  );
}

function SkillSection({ title, children }) {
  return (
    <section className="space-y-3">
      <h3 className="text-[15px] text-emerald-400">{title}</h3>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[13.5px] text-emerald-300">
        {children}
      </div>
      <Divider />
    </section>
  );
}

export default function Skills() {
  return (
    <div
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
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Header */}
      <div className="flex justify-between text-[13px] text-emerald-400 mb-2">
        <span>skills.sys</span>
        <span>capability matrix</span>
      </div>

      <h1 className="text-[20px] font-semibold text-emerald-300">
        Technical Skills
      </h1>
      <p className="text-[13.5px] text-emerald-400 mb-4">
        Tools, languages, and systems I’ve worked with in production and projects
      </p>

      <Divider />

      {/* Programming Languages */}
      <SkillSection title="[01] Programming Languages">
        <SkillRow icon={SiJavascript} label="JavaScript" />
        <SkillRow icon={SiTypescript} label="TypeScript" />
        <SkillRow icon={FaPython} label="Python" />
        <SkillRow icon={FaDatabase} label="SQL" />
      </SkillSection>

      {/* Frontend */}
      <SkillSection title="[02] Frontend Development">
        <SkillRow icon={FaReact} label="React" />
        <SkillRow icon={SiHtml5} label="HTML5" />
        <SkillRow icon={SiCss3} label="CSS3" />
        <SkillRow icon={SiFlutter} label="Flutter" />
        <SkillRow icon={SiDart} label="Dart" />
        <SkillRow icon={FaReact} label="Responsive UI Design" />
      </SkillSection>

      {/* Backend & APIs */}
      <SkillSection title="[03] Backend & APIs">
        <SkillRow icon={FaNodeJs} label="RESTful APIs" />
        <SkillRow icon={FaDatabase} label="Relational Databases" />
        <SkillRow icon={FaNodeJs} label="Production Systems" />
        <SkillRow icon={SiFirebase} label="Firebase" />
      </SkillSection>

      {/* Cloud & Infrastructure */}
      <SkillSection title="[04] Cloud & Infrastructure">
        <SkillRow icon={FaAws} label="AWS" />
      </SkillSection>

      {/* Engineering Foundations */}
      <SkillSection title="[05] Engineering Foundations">
        <SkillRow icon={FaGitAlt} label="Git & Version Control" />
        <SkillRow icon={FaDatabase} label="Data Structures & Algorithms" />
        <SkillRow icon={FaJava} label="Object-Oriented Design" />
        <SkillRow icon={FaNodeJs} label="System Design Fundamentals" />
        <SkillRow icon={FaGitAlt} label="Debugging & Performance Tuning" />
        <SkillRow icon={FaReact} label="Modern Build Tools" />
      </SkillSection>
    </div>
  );
}
