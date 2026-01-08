import {
  FaGithub,
  FaLinkedin,
  FaDev,
  FaEnvelope,
} from "react-icons/fa";
import { useEffect, useRef } from "react";

function Divider() {
  return (
    <div className="text-emerald-600 text-sm">
      ──────────────────────────────────────
    </div>
  );
}

function ContactCard({ icon: Icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex items-center gap-4
        border border-emerald-700
        bg-black/40
        px-5 py-4
        transition-all duration-300
        hover:border-emerald-400
        hover:bg-emerald-500/10
      "
    >
      <Icon
        size={22}
        className="
          text-emerald-400
          transition-transform duration-300
          group-hover:scale-110
          group-hover:text-emerald-300
        "
      />
      <span className="text-[13.5px] text-emerald-300 group-hover:text-emerald-200">
        {label}
      </span>
    </a>
  );
}

export default function Contact() {
  const containerRef = useRef(null);

  // Smooth scroll
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
        <span>contact.txt</span>
        <span>reach out</span>
      </div>

      <h1 className="text-[20px] text-emerald-300 font-semibold">
        Contact
      </h1>
      <p className="text-[13.5px] text-emerald-400 max-w-[520px]">
        I’m always open to collaborations, hackathons, internships, or
        conversations about systems, AI, and building meaningful software.
      </p>

      <Divider />

      {/* Links */}
      <section className="mt-4 space-y-3">
        <ContactCard
          icon={FaGithub}
          label="github.com/GauravHungund"
          href="https://github.com/GauravHungund"
        />

        <ContactCard
          icon={FaLinkedin}
          label="linkedin.com/in/gaurav-hungund"
          href="https://www.linkedin.com/in/gaurav-hungund/"
        />

        <ContactCard
          icon={FaDev}
          label="devpost.com/ghungund"
          href="https://devpost.com/ghungund?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
        />

        <ContactCard
          icon={FaEnvelope}
          label="ghungund@scu.edu"
          href="mailto:ghungund@scu.edu"
        />
      </section>

      <Divider />

      {/* Footer note */}
      <div className="mt-6 text-[12.5px] text-emerald-500">
        Currently Looking For Full-Time Opportunities !! 
      </div>
    </div>
  );
}
