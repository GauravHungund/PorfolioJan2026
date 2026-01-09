import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Click_Sound from '/click_sound.mp3'

const PROJECT_FILES = [
  "dungeon_forge.md",
  "odyssey.md",
  "silentsignal.md",
  "micdrop_ai.md",
  "emotune.md",
  "taskchain.md",
];

export default function SystemMenu({onNavigate}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [projectsOpen, setProjectsOpen] = useState(false);

   const clickSoundRef = useRef(null);

  if (!clickSoundRef.current) {
    clickSoundRef.current = new Audio(Click_Sound);
    clickSoundRef.current.volume = 0.4;
  }

  const playClick = () => {
    const sound = clickSoundRef.current;
    sound.currentTime = 0;
    sound.play().catch(() => {});
  };

  const isActive = (path) =>
    location.pathname === path ||
    location.pathname.startsWith(path + "/");

  const itemBase =
    "cursor-pointer select-none px-1 rounded transition-colors duration-150";

  const activeClass =
    "text-emerald-300 bg-emerald-400/10";

  const inactiveClass =
    "text-emerald-400 hover:text-emerald-200 hover:bg-emerald-400/5";
    

  return (
    <div className="w-full md:w-[240px] h-auto md:h-full bg-black/40 border border-emerald-400 font-mono p-6 backdrop-blur-md">
      <div className="mb-6 tracking-widest text-emerald-500">
        SYSTEM
      </div>

      <ul className="space-y-2 text-sm leading-relaxed">
        {/* ABOUT */}
        <li
          onClick={() => {playClick(),
            navigate("/about"),
            onNavigate?.()
          }}
          className={`${itemBase} ${
            isActive("/about") ? activeClass : inactiveClass
          }`}
        >
          ▸ ~/about.txt
        </li>

        {/* PROJECTS FOLDER */}
        <li
          onClick={() => {
            playClick();
            setProjectsOpen((v) => !v);
          }}
          className={`${itemBase} ${inactiveClass} flex items-center gap-1`}
        >
          <span
            className={`inline-block transition-transform duration-200 ${
              projectsOpen ? "rotate-90" : ""
            }`}
          >
            ▸
          </span>
          <span>~/projects/</span>
        </li>

        {/* PROJECT FILES */}
        {projectsOpen && (
          <ul className="ml-4 space-y-1 text-emerald-500">
            {PROJECT_FILES.map((file, i) => {
              const isLast = i === PROJECT_FILES.length - 1;
              const path = `/projects/${file}`;

              return (
                <li
                  key={file}
                  onClick={() => {playClick(),
                    navigate(path);
                    onNavigate?.()
                  }}
                  className={`
                    ${itemBase}
                    ${
                      location.pathname === path
                        ? activeClass
                        : "hover:text-emerald-300 hover:bg-emerald-400/5"
                    }
                    flex items-center gap-1
                  `}
                >
                  <span>{isLast ? "└" : "├"}</span>
                  <span>{file}</span>
                </li>
              );
            })}
          </ul>
        )}

        {/* SKILLS */}
        <li
          onClick={() => {playClick(),
            navigate("/skills"),
            onNavigate?.()
          }}
          className={`${itemBase} ${
            isActive("/skills") ? activeClass : inactiveClass
          }`}
        >
          ▸ ~/skills.txt
        </li>

        {/* RESUME */}
        <li
          onClick={() => {playClick(),
            navigate("/Education-Experience");
            onNavigate?.()
          }}
          className={`${itemBase} ${
            isActive("/Education-Experience") ? activeClass : inactiveClass
          }`}
        >
          ▸ ~/Experience.pdf
        </li>

        {/* CONTACT */}
        <li
          onClick={() => {playClick(),
            navigate("/contact");
            onNavigate?.()}}
          className={`${itemBase} ${
            isActive("/contact") ? activeClass : inactiveClass
          }`}
        >
          ▸ ~/contact.txt
        </li>
      </ul>
    </div>
  );
}
