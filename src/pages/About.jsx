import { useEffect, useRef, useState } from "react";
import GhostTrophy from "../components/GhostTrophy";

export default function About() {
  const nameText = "Gaurav Hungund";
  const roleText = "Full-Stack Developer";
  const HAS_SEEN_KEY = "about_seen";


  const aboutText = `
About Me

I’m a full-stack developer who likes building things that actually work — and make sense.

I enjoy turning vague ideas into real systems, whether that’s a web app, an AI-powered tool, or a backend that doesn’t fall apart under pressure. I care about clean architecture, practical AI, and understanding how every piece of a system fits together — not just shipping code, but shipping thoughtfully.

Most of my learning has come from doing: hackathons, side projects, late-night debugging, and rewriting things until they feel right. I like problems with constraints, ambiguity, and real users on the other side.

When I’m not coding, you’ll probably find me:
• experimenting in the kitchen (baking included — precision matters there too)
• watching or playing football
• obsessing over how small details improve the overall experience

I build, I iterate, and I keep learning — whether it’s a new framework, a better system design, or a better recipe.

If you’re here, you’ll see what I’m building — and how I think while building it.
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
