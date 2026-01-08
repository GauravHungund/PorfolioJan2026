export default function Projects() {
  const projects = [
    {
      name: "Dungeon Forge",
      tag: "Hackathon • Winner",
      file: "dungeon_forge.md",
    },
    {
      name: "Odyssey",
      tag: "Hackathon • AWS × INRIX",
      file: "odyssey.md",
    },
    {
      name: "SilentSignal",
      tag: "Hackathon • NVIDIA",
      file: "silentsignal.md",
    },
    {
      name: "MicDrop AI",
      tag: "Hackathon • Winner",
      file: "micdrop_ai.md",
    },
    {
      name: "EmoTune",
      tag: "AI System",
      file: "emotune.md",
    },
    {
      name: "TaskChain",
      tag: "Mobile App",
      file: "taskchain.md",
    },
  ];

  return (
    <div className="font-mono text-emerald-300 space-y-4">
      <div className="flex justify-between text-sm text-emerald-400">
        <span>projects/</span>
        <span>{projects.length} items</span>
      </div>

      <ul className="space-y-2">
        {projects.map((p, i) => (
          <li
            key={p.file}
            className="cursor-pointer hover:text-emerald-200"
          >
            <span className="text-emerald-500">
              {String(i + 1).padStart(2, "0")}
            </span>{" "}
            {p.file}
            <span className="text-emerald-500"> — {p.tag}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
