import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function GlowingParticles() {
  const ref = useRef();
  const [sphere] = React.useState(() => random.inSphere(new Float32Array(1500), { radius: 3.2 }));
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 25;
      ref.current.rotation.y -= delta / 30;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#ccff00" size={0.012} sizeAttenuation depthWrite={false} opacity={0.4} />
      </Points>
    </group>
  );
}

function FloatingGeometry({ position, color, type, speed = 1 }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2 * speed;
      ref.current.rotation.y += delta * 0.3 * speed;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={1.4} floatIntensity={2} position={position}>
      <mesh ref={ref}>
        {type === 'dodeca' && <dodecahedronGeometry args={[0.5, 0]} />}
        {type === 'torus' && <torusGeometry args={[0.45, 0.15, 16, 32]} />}
        {type === 'octa' && <octahedronGeometry args={[0.55, 0]} />}
        <meshStandardMaterial color={color} wireframe transparent opacity={0.25} emissive={color} emissiveIntensity={0.5} />
      </mesh>
    </Float>
  );
}

export default function BackgroundCanvas3D() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 3.5], fov: 60 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ccff00" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#6366f1" />
        <GlowingParticles />
        <FloatingGeometry position={[-2.4, 1.3, -1]} color="#ccff00" type="dodeca" speed={0.9} />
        <FloatingGeometry position={[2.5, -1.2, -1.2]} color="#00f0ff" type="torus" speed={1.3} />
        <FloatingGeometry position={[2.2, 1.5, -1.5]} color="#6366f1" type="octa" speed={0.7} />
      </Canvas>
    </div>
  );
}
