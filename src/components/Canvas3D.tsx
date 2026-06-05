import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

function generateSpherePositions(count: number, radius: number): Float32Array {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = radius * Math.cbrt(Math.random());
    pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = r * Math.cos(phi);
  }
  return pos;
}

function generateClusterPositions(count: number): Float32Array {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const radius = 2.0 + Math.random() * 2.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = radius * Math.cos(phi);
  }
  return pos;
}

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
const PARTICLE_COUNT = isMobile ? 100 : 300;
const CLUSTER_COUNT = isMobile ? 30 : 80;

const sphereGeo = new THREE.SphereGeometry(1, 16, 16);
const clusterGeo = new THREE.SphereGeometry(1, 12, 12);

const ParticleCube = () => {
  const meshRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.InstancedMesh>(null);
  const clustersRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useRef(new THREE.Object3D());

  const positions = useMemo(() => generateSpherePositions(PARTICLE_COUNT, 0.85), []);
  const initialPositions = useMemo(() => new Float32Array(positions), [positions]);
  const currentPositions = useRef<Float32Array>(new Float32Array(positions));
  const clusterPositions = useMemo(() => generateClusterPositions(CLUSTER_COUNT), []);

  useEffect(() => {
    if (particlesRef.current) {
      const d = new THREE.Object3D();
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        d.position.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
        d.scale.set(0.022, 0.022, 0.022);
        d.updateMatrix();
        particlesRef.current.setMatrixAt(i, d.matrix);
      }
      particlesRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [positions]);

  useEffect(() => {
    if (clustersRef.current) {
      const d = new THREE.Object3D();
      for (let i = 0; i < CLUSTER_COUNT; i++) {
        d.position.set(
          clusterPositions[i * 3], clusterPositions[i * 3 + 1], clusterPositions[i * 3 + 2]
        );
        d.scale.set(0.045, 0.045, 0.045);
        d.updateMatrix();
        clustersRef.current.setMatrixAt(i, d.matrix);
      }
      clustersRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [clusterPositions]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.08;
      meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.05;
      meshRef.current.rotation.z = Math.cos(time * 0.1) * 0.05;
    }

    if (particlesRef.current) {
      const d = dummy.current;
      const cur = currentPositions.current;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        const ox = initialPositions[i3], oy = initialPositions[i3 + 1], oz = initialPositions[i3 + 2];
        const dist = Math.sqrt(ox * ox + oy * oy + oz * oz) || 1;
        const nx = ox / dist, ny = oy / dist, nz = oz / dist;

        const breathe = Math.sin(time * 1.5 + i * 0.08) * 0.5 + 0.5;
        const escape = Math.max(0, (breathe - 0.82) * 5.5);
        const scale = 1 + escape * 0.9;
        const sizeScale = 0.022 * (1 + escape * 0.6);

        cur[i3] = ox + nx * (scale - 1) * dist;
        cur[i3 + 1] = oy + ny * (scale - 1) * dist;
        cur[i3 + 2] = oz + nz * (scale - 1) * dist;

        d.position.set(cur[i3], cur[i3 + 1], cur[i3 + 2]);
        d.scale.set(sizeScale, sizeScale, sizeScale);
        d.updateMatrix();
        particlesRef.current.setMatrixAt(i, d.matrix);
      }
      particlesRef.current.instanceMatrix.needsUpdate = true;
    }

    if (clustersRef.current) {
      clustersRef.current.rotation.y = time * -0.05;
      clustersRef.current.rotation.x = time * 0.02;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Premium Glass Cube */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2, 2, 2, 8, 8, 8]} />
        <meshPhysicalMaterial 
          color="#ffffff" 
          transmission={0.95} 
          opacity={1}
          metalness={0.05}
          roughness={0.05}
          ior={1.4}
          thickness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={1.5}
        />
        {/* Very subtle wireframe edges */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(2, 2, 2)]} />
          <lineBasicMaterial color="#2563EB" opacity={0.1} transparent />
        </lineSegments>
      </mesh>

      {/* Inner 3D Spheres with Escape Effect */}
      <instancedMesh
        ref={particlesRef}
        args={[sphereGeo, undefined, PARTICLE_COUNT]}
        castShadow
      >
        <meshPhysicalMaterial
          color="#3B82F6"
          metalness={0.3}
          roughness={0.2}
          envMapIntensity={1}
          transparent
          opacity={0.85}
        />
      </instancedMesh>

      {/* Outer Floating 3D Spheres */}
      <instancedMesh
        ref={clustersRef}
        args={[clusterGeo, undefined, CLUSTER_COUNT]}
      >
        <meshPhysicalMaterial
          color="#2563EB"
          metalness={0.2}
          roughness={0.3}
          envMapIntensity={0.8}
          transparent
          opacity={0.4}
        />
      </instancedMesh>
      
      {/* Inner Glow Light */}
      <pointLight position={[0, 0, 0]} intensity={1.5} color="#2563EB" distance={3} decay={2} />
    </group>
  );
};

export default function Canvas3D() {
  return (
    <div className="w-full h-[400px] md:h-[600px] absolute right-0 top-1/2 -translate-y-1/2 z-0 cursor-grab active:cursor-grabbing">
      
      {/* Faint animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

      <Canvas shadows camera={{ position: [0, 0, 6.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={1.2} />
        <spotLight position={[10, 15, 10]} angle={0.2} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#2563EB" />
        
        <PresentationControls 
          global={false} 
          cursor={false}
          snap={true} 
          speed={1.5} 
          zoom={1} 
          rotation={[0, -Math.PI / 4, 0]} 
          polar={[-Math.PI / 3, Math.PI / 3]} 
          azimuth={[-Math.PI / 2, Math.PI / 2]}
        >
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <ParticleCube />
          </Float>
        </PresentationControls>

        <Environment preset="city" />
        <ContactShadows position={[0, -2.5, 0]} opacity={0.15} scale={15} blur={3} far={5} color="#2563EB" />
      </Canvas>
    </div>
  );
}
