import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const FloatingShape = ({
  position,
  color,
  geometry,
  speed = 1,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  geometry: "sphere" | "torus" | "box" | "octa" | "icosa";
  speed?: number;
  scale?: number;
}) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh ref={ref} position={position} scale={scale} castShadow>
        {geometry === "sphere" && <sphereGeometry args={[0.7, 64, 64]} />}
        {geometry === "torus" && <torusGeometry args={[0.55, 0.22, 32, 100]} />}
        {geometry === "box" && <boxGeometry args={[1, 1, 1]} />}
        {geometry === "octa" && <octahedronGeometry args={[0.85, 0]} />}
        {geometry === "icosa" && <icosahedronGeometry args={[0.75, 0]} />}
        <MeshDistortMaterial
          color={color}
          roughness={0.15}
          metalness={0.3}
          distort={geometry === "sphere" ? 0.4 : 0.1}
          speed={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
};

const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.6, 0]} receiveShadow>
      <planeGeometry args={[40, 40]} />
      <meshStandardMaterial color="#fafafa" metalness={0.1} roughness={0.8} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-5, 3, -5]} color="#818cf8" intensity={2.5} />
      <pointLight position={[5, 2, 3]} color="#fb7185" intensity={2} />

      <Floor />

      <FloatingShape
        position={[-2.6, 0.6, 0]}
        color="#6366f1"
        geometry="sphere"
      />
      <FloatingShape
        position={[2.6, 0.9, -0.5]}
        color="#f43f5e"
        geometry="torus"
        speed={1.2}
      />
      <FloatingShape
        position={[0, -0.1, 1.2]}
        color="#f59e0b"
        geometry="icosa"
        speed={0.8}
      />
      <FloatingShape
        position={[-3.6, -0.4, -1.5]}
        color="#8b5cf6"
        geometry="octa"
        speed={1.5}
        scale={0.8}
      />
      <FloatingShape
        position={[3.6, -0.3, 1]}
        color="#06b6d4"
        geometry="box"
        speed={1.1}
        scale={0.8}
      />

      <ContactShadows
        position={[0, -1.55, 0]}
        opacity={0.25}
        scale={20}
        blur={2.5}
        far={5}
      />

      <Environment preset="apartment" />
    </>
  );
};

const HeroScene = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.2, 6.5], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default HeroScene;
