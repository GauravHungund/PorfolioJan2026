import { useEffect, useRef, useState } from "react";
import GhostTrophy from "../components/GhostTrophy";

export default function About() {
  const nameText = "Gaurav Hungund";
  const roleText = "Full-Stack Developer";
  const HAS_SEEN_KEY = "about_seen";


  const aboutText = `
About Me

I’m a full-stack developer who enjoys building things carefully and learning along the way.

I like taking rough ideas and turning them into working systems — whether that’s a web app, a small backend service, or an AI-powered feature. I try to understand how different parts of a system fit together, and I care about writing code that’s simple, readable, and practical.

Most of what I’ve learned has come from building outside the classroom: side projects, hackathons, late-night debugging sessions, and going back to improve things that didn’t feel quite right the first time. I enjoy problems with some ambiguity, especially when there are real users involved and real trade-offs to think through.

Outside of coding, I enjoy:

experimenting in the kitchen (baking included — precision helps there too)

watching or playing football

noticing small details that make products and experiences better

I’m still learning, still building, and always trying to get a little better — whether that’s through a new tool, a cleaner design, or a better approach to a problem.

If you’re here, you’ll see what I’m working on — and how I’m learning as I build.
`.trim();

  const [nameIndex, setNameIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [aboutIndex, setAboutIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [startAbout, setStartAbout] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);


  const timers = useRef([]);


  /* 🔁 RESET ON ROUTE CHANGE */
    useEffect(() => {
      const hasSeen = sessionStorage.getItem(HAS_SEEN_KEY);

      if (hasSeen) {
        // Skip animation completely
        setShouldAnimate(false);
        setNameIndex(nameText.length);
        setRoleIndex(roleText.length);
        setAboutIndex(aboutText.length);
        setStartAbout(true);
      } else {
        // First visit
        sessionStorage.setItem(HAS_SEEN_KEY, "true");
        setShouldAnimate(true);
        setNameIndex(0);
        setRoleIndex(0);
        setAboutIndex(0);
        setStartAbout(false);
      }
    }, []); // ⬅️ RUNS ONLY ONCE



  /* Cursor blink */
  useEffect(() => {
    const t = setInterval(() => setCursorVisible(v => !v), 500);
    return () => clearInterval(t);
  }, []);



  /* Name typing */
  useEffect(() => {

    if (!shouldAnimate) return;

    if (nameIndex < nameText.length) {
      const t = setTimeout(() => setNameIndex(v => v + 1), 70);
      timers.current.push(t);
    }
  }, [shouldAnimate,nameIndex]);

  /* Role typing */
  useEffect(() => {

    if (!shouldAnimate) return;
    
    if (nameIndex === nameText.length && roleIndex < roleText.length) {
      const t = setTimeout(() => setRoleIndex(v => v + 1), 45);
      timers.current.push(t);
    }

    if (roleIndex === roleText.length) {
      const t = setTimeout(() => setStartAbout(true), 300);
      timers.current.push(t);
    }
  }, [shouldAnimate,nameIndex, roleIndex]);

  /* Fast About typing */
  useEffect(() => {

    if (!shouldAnimate) return;

    if (startAbout && aboutIndex < aboutText.length) {
      const t = setTimeout(() => setAboutIndex(v => v + 5), 12); // FAST
      timers.current.push(t);
    }
  }, [shouldAnimate,startAbout, aboutIndex]);

  return (
    <div className="relative font-mono text-emerald-300 h-full flex flex-col">
      <div className="hidden lg:block">
          <GhostTrophy />
      </div>
      {/* Header */}
      <div className="flex justify-between text-[13px] mb-3 text-emerald-400">
        <span>about.txt</span>
        <span>size: 1.2KB | modified: now</span>
      </div>

      <div className="space-y-4 text-[14px] leading-relaxed overflow-y-auto pr-2">
        {/* Name */}
        <div className="text-[15px]">
          <span className="text-emerald-500">Name:</span>{" "}
          <span className="text-amber-400">
            {nameText.slice(0, nameIndex)}
            {nameIndex < nameText.length && cursorVisible && "▮"}
          </span>
        </div>

        {/* Role */}
        <div className="text-[14px]">
          <span className="text-emerald-500">Role:</span>{" "}
          <span>
            {roleText.slice(0, roleIndex)}
            {nameIndex === nameText.length &&
              roleIndex < roleText.length &&
              cursorVisible &&
              "▮"}
          </span>
        </div>

        {/* Divider */}
        {startAbout && (
          <div className="text-emerald-600">
            ──────────────────────────────────────
          </div>
        )}

        {/* About (typed fast) */}
        {startAbout && (
          <pre className="whitespace-pre-wrap text-emerald-200 text-[13.5px] leading-relaxed">
            {aboutText.slice(0, aboutIndex)}
            {aboutIndex < aboutText.length && cursorVisible && "▮"}
          </pre>
        )}

        {/* Status */}
        {aboutIndex === aboutText.length && (
          <div className="pt-2 text-emerald-400 text-[13px]">
            Status: <span className="text-emerald-300">ONLINE</span>{" "}
            {cursorVisible && "▮"}
          </div>
        )}
      </div>
    </div>
  );
}
