import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

function TrophyModel() {
  const ref = useRef();
  const { scene } = useGLTF("/ghost_w_tophat.glb");

  // 🔄 ROTATION LOOP (THIS WAS MISSING / BROKEN BEFORE)
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.004; // slow spin
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.28}
      rotation={[
        -Math.PI / 6,   // forward tilt
        Math.PI / 4,    // 45° turn
        Math.PI / 8,    // diagonal skew
      ]}
      position={[0, -0.4, 0]}
    />
  );
}

export default function GhostTrophy() {
  return (
    <div className="absolute top-4 right-6 w-[180px] h-[180px] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0.6, 3.2], fov: 30 }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 4, 5]} intensity={1.4} />
        <TrophyModel />
      </Canvas>

      <div className="mt-1 text-xs text-emerald-400 text-center">
        Nice to meet you !!
      </div>
    </div>
  );
}
