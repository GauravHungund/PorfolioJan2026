export default function ProjectPage({
  title,
  subtitle,
  description,
  images = [],
  awards = [],
  techStack = [],
  coreFeatures = [],
  links = {},
}) {

  return (
    <div
      className="
        h-full
        overflow-y-auto
        scroll-smooth
        pr-3
        font-mono
        text-emerald-200
        custom-scroll
      "
    >
      {/* Header */}
      <div className="mb-4">
        <div className="text-[18px] text-emerald-400 font-semibold tracking-wide">
          {title}
        </div>
        {subtitle && (
          <div className="text-[13px] text-emerald-500 mt-1">
            {subtitle}
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="text-emerald-700 mb-4">
        ───────────────────────────────────────────
      </div>

        {/* Images */}
        {images.length > 0 && (
          <section className="mb-6">
            <div className="text-emerald-400 mb-2">Screenshots</div>
        
            <div className="grid grid-cols-2 gap-3">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="
                    border border-emerald-700
                    bg-black/40
                    overflow-hidden
                    hover:border-emerald-400
                    transition-colors
                  "
                >
                  <img
                    src={img.src}
                    alt={img.alt || `Screenshot ${i + 1}`}
                    className="
                      w-full h-[340px]
                      object-cover
                      opacity-90
                      hover:opacity-100
                      transition-opacity
                    "
                  />
                </div>
              ))}
            </div>
          </section>
        )}


      {/* Awards */}
      {awards.length > 0 && (
        <section className="mb-6">
          <div className="text-emerald-400 mb-2">Awards</div>
          <ul className="space-y-1 text-[14px]">
            {awards.map((award, i) => (
              <li key={i}>🏆 {award}</li>
            ))}
          </ul>
        </section>
      )}

    {/* Description */}
      <section className="mb-6">
        <div className="text-emerald-400 mb-2">Description</div>
        <p className="leading-relaxed text-[14px]">
          {description}
        </p>
      </section>

    {/* Core Features */}
    {coreFeatures.length > 0 && (
      <section className="mb-6">
        <div className="text-emerald-400 mb-2">Core Features</div>

        <ul className="space-y-2 text-[14px]">
          {coreFeatures.map((feature, i) => (
            <li
              key={i}
              className="flex gap-2 items-start"
            >
              <span className="text-emerald-500 min-w-[20px]">
                {feature.icon}
              </span>
              <div>
                <span className="text-emerald-200">
                  {feature.title}
                </span>{" "}
                <span className="text-emerald-400">
                  — {feature.desc}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    )}


      {/* Tech Stack */}
      <section className="mb-6">
        <div className="text-emerald-400 mb-2">Tech Stack</div>
        <div className="flex flex-wrap gap-2 text-[12px]">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="
                px-2 py-[2px]
                border border-emerald-600
                text-emerald-300
                bg-black/30
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Links */}
      <section className="mb-4">
        <div className="text-emerald-400 mb-2">Links</div>
        <div className="space-y-1 text-[14px]">
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-300 hover:text-emerald-200 underline"
            >
              Live Demo
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="block text-emerald-300 hover:text-emerald-200 underline"
            >
              GitHub Repository
            </a>
          )}
        </div>
      </section>

      {/* Footer */}
      <div className="text-emerald-600 text-[12px] mt-6">
        End of file.
      </div>
    </div>
  );
}
