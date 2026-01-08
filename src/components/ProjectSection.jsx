import { useEffect, useRef, useState } from "react";

export default function ProjectSection({ image, title, children, reverse }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { rootMargin: "120px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`
        flex gap-6 items-start mb-12
        ${reverse ? "flex-row-reverse" : ""}
      `}
    >
      {/* Image */}
    <div className="w-[40%] min-w-[260px]">
      <div
        className="
          border border-emerald-700
          bg-black/40
          p-4
          flex
          justify-center
          items-center
        "
      >
        {visible ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="
              max-w-full
              max-h-[220px]
              object-contain
              grayscale
              opacity-70
              transition-all
              duration-500
              hover:grayscale-0
              hover:opacity-100
              hover:scale-[1.04]
            "
          />
        ) : (
          <div className="h-[220px] w-full bg-black animate-pulse" />
        )}
      </div>
    </div>

      {/* Text */}
      <div className="flex-1 text-[14px] leading-relaxed">
        <div className="text-emerald-400 mb-2">{title}</div>
        <div className="text-emerald-200 space-y-3">{children}</div>
      </div>
    </section>
  );
}
