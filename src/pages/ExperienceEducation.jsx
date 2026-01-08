function Divider() {
  return (
    <div className="text-emerald-600 text-sm">
      ──────────────────────────────────────
    </div>
  );
}

function Entry({ title, meta, children }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[14px] text-emerald-400">
        <span>{title}</span>
        <span className="text-[12.5px] text-emerald-500">{meta}</span>
      </div>
      <div className="text-[13.5px] text-emerald-300 leading-relaxed space-y-1">
        {children}
      </div>
    </div>
  );
}

export default function EducationExperience() {
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
        <span>profile.log</span>
        <span>education + experience</span>
      </div>

      <h1 className="text-[20px] font-semibold text-emerald-300">
        Education & Experience
      </h1>
      <p className="text-[13.5px] text-emerald-400 mb-4">
        Academic background and professional experience
      </p>

      <Divider />

      {/* Education */}
      <section className="space-y-4">
        <h3 className="text-[15px] text-emerald-400">[01] Education</h3>

        <Entry
          title="Santa Clara University"
          meta="Sep 2024 – Present"
        >
          <div>M.S. in Computer Science</div>
          <div>GPA : 3.8</div>
          <div className="text-emerald-500">California, USA</div>
        </Entry>

        <Entry
          title="D.Y. Patil College of Engineering"
          meta="Aug 2018 – May 2022"
        >
          <div>B.S. in Computer Science</div>
          <div>CGPA : 8.54</div>
          <div className="text-emerald-500">Pune, India</div>
        </Entry>

        <Divider />
      </section>

      {/* Experience */}
      <section className="space-y-4">
        <h3 className="text-[15px] text-emerald-400">[02] Experience</h3>

        <Entry
          title="Cognizant — Software Engineer (SDE I)"
          meta="Jun 2022 – Apr 2023"
        >
          <div>
            Owned development of production features, contributing across
            design, implementation, testing, and peer review.
          </div>
          <div>
            Reduced backend latency by ~30% through debugging, performance
            tuning, and iterative refactoring.
          </div>
          <div>
            Optimized SQL queries and data pipelines to improve system
            reliability across analytics modules.
          </div>
        </Entry>

        <Entry
          title="Cognizant — Software Engineering Intern"
          meta="Feb 2022 – Jun 2022"
        >
          <div>
            Contributed to Java-based backend services and REST APIs in a
            production environment.
          </div>
          <div>
            Wrote, debugged, and validated code using test cases while working
            in Agile workflows under senior engineer mentorship.
          </div>
        </Entry>

        <Divider />
      </section>

      {/* Achievements */}
      <section className="space-y-3">
        <h3 className="text-[15px] text-emerald-400">[03] Highlights</h3>

        <div className="text-[13.5px] text-emerald-300">
          • 3× Hackathon Winner — consumer-facing, mobile, and scalable systems
        </div>

        <Divider />
      </section>

      {/* Resume CTA */}
      <div className="mt-6 flex items-center gap-4 text-[13px]">
<a
  href="/resume/GauravHungund.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    border
    border-emerald-500
    px-4
    py-2
    hover:bg-emerald-500/10
    transition
  "
>
  ⬇ Download Resume
</a>


        <span className="text-emerald-500">
          Updated & verified
        </span>
      </div>
    </div>
  );
}
