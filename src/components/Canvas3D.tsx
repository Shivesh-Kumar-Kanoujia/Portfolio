import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

const FloatingObject = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhysicalMaterial 
          color="#2563EB" 
          roughness={0.1} 
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
        {/* Subtle white edges using EdgesGeometry if needed, or just rely on environment reflections */}
      </mesh>
    </Float>
  );
};

export default function Canvas3D() {
  return (
    <div className="w-full h-[400px] md:h-[600px] absolute right-0 top-1/2 -translate-y-1/2 z-0 opacity-80 pointer-events-none md:pointer-events-auto">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <PresentationControls 
          global={false} 
          cursor={true} 
          snap={true} 
          speed={1} 
          zoom={1} 
          rotation={[0, 0, 0]} 
          polar={[-Math.PI / 4, Math.PI / 4]} 
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <FloatingObject />
        </PresentationControls>

        <Environment preset="city" />
        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4} color="#000000" />
      </Canvas>
    </div>
  );
}
