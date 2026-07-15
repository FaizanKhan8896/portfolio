'use client';

import { Canvas } from '@react-three/fiber';
import { FluidBackground } from './FluidBackground';
import { Suspense } from 'react';
import { Preload } from '@react-three/drei';

export function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-background">
      <Canvas
        camera={{ position: [0, 0, 1] }} // For screen space shader, distance doesn't matter much but keep it simple
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        dpr={[1, 1]} // strictly limit pixel ratio for background performance
        performance={{ min: 0.5 }} // drop resolution on frame drops
      >
        <color attach="background" args={['#050505']} />
        <Suspense fallback={null}>
          <FluidBackground />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
