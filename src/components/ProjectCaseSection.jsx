import { useEffect, useRef, useState } from "react";

export default function ProjectCaseSection({
  title,
  image,
  children,
  reverse = false,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Lazy load image
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
      {image && (
        <div
          className="
            w-[45%]
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
                max-h-[240px]
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
            <div className="h-[200px] w-full bg-black animate-pulse" />
          )}
        </div>
      )}

      {/* Text */}
      <div className="flex-1 text-[13.5px] text-emerald-300 leading-relaxed">
        <h3 className="text-[15px] text-emerald-400 mb-2">{title}</h3>
        <div className="space-y-3">{children}</div>
      </div>
    </section>
  );
}
