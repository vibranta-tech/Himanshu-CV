import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Particles() {
  const ref = useRef();
  const [sphere] = React.useState(() => random.inSphere(new Float32Array(1200), { radius: 3 }));
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 18;
      ref.current.rotation.y -= delta / 22;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#3b82f6" size={0.012} sizeAttenuation depthWrite={false} opacity={0.5} />
      </Points>
    </group>
  );
}

function Shape({ position, color, type, speed = 1.2 }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.25 * speed;
      ref.current.rotation.y += delta * 0.35 * speed;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={1.5} position={position}>
      <mesh ref={ref}>
        {type === 'dodeca' && <dodecahedronGeometry args={[0.4, 0]} />}
        {type === 'torus' && <torusGeometry args={[0.35, 0.12, 16, 32]} />}
        {type === 'octa' && <octahedronGeometry args={[0.45, 0]} />}
        <meshStandardMaterial color={color} wireframe transparent opacity={0.25} emissive={color} emissiveIntensity={0.3} />
      </mesh>
    </Float>
  );
}

export default function BackgroundCanvas3D() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} color="#3b82f6" />
        <pointLight position={[-10, -10, -5]} intensity={0.6} color="#4f46e5" />
        <Particles />
        <Shape position={[-2, 1, -1]} color="#3b82f6" type="dodeca" speed={1} />
        <Shape position={[2.2, -0.8, -1]} color="#4f46e5" type="torus" speed={1.4} />
        <Shape position={[1.8, 1.3, -1.5]} color="#10b981" type="octa" speed={0.8} />
      </Canvas>
    </div>
  );
}
