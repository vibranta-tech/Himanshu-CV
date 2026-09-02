import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function FloatingParticles(props) {
  const ref = useRef();
  // Generate 1200 random points inside a sphere of radius 3
  const [sphere] = React.useState(() => random.inSphere(new Float32Array(1500), { radius: 3.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f2fe"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </group>
  );
}

function FloatingShape({ position, color, geometry, speed = 1.5 }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3 * speed;
      meshRef.current.rotation.y += delta * 0.4 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2} position={position}>
      <mesh ref={meshRef}>
        {geometry === 'dodecahedron' && <dodecahedronGeometry args={[0.5, 0]} />}
        {geometry === 'torus' && <torusGeometry args={[0.4, 0.15, 16, 32]} />}
        {geometry === 'octahedron' && <octahedronGeometry args={[0.6, 0]} />}
        <meshStandardMaterial
          color={color}
          wireframe={true}
          transparent={true}
          opacity={0.4}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

export default function BackgroundCanvas3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#00f2fe" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#7000ff" />
        
        <FloatingParticles />
        
        {/* Floating 3D geometric shapes representing CS concepts */}
        <FloatingShape position={[-2.2, 1.2, -1]} color="#00f2fe" geometry="dodecahedron" speed={1.2} />
        <FloatingShape position={[2.4, -1.0, -1]} color="#7000ff" geometry="torus" speed={1.8} />
        <FloatingShape position={[2.0, 1.5, -1.5]} color="#00ffb9" geometry="octahedron" speed={1.0} />
        <FloatingShape position={[-2.0, -1.4, -1.2]} color="#ffb703" geometry="torus" speed={1.4} />
      </Canvas>
    </div>
  );
}
