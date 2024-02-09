"use client";
import { Sampler } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useCallback, useLayoutEffect, useRef } from "react";
import * as THREE from "three";

export type Props = {
  wireframe?: THREE.ColorRepresentation;
  instances: number;
  colors: THREE.ColorRepresentation[];
  position: [number, number, number] | THREE.Vector3;
  radius: number;
  animation?: (group: THREE.Group, delta: number) => void;
};

function Sphere({
  wireframe,
  instances,
  colors,
  position,
  radius,
  animation,
}: Props) {
  const instancesRef = useRef<THREE.InstancedMesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  const setRandomColor = useCallback(
    (i: number) => {
      instancesRef.current.setColorAt(
        i,
        new THREE.Color(colors[Math.floor(Math.random() * colors.length)])
      );
    },
    [colors]
  );

  useFrame((_, delta) => {
    animation && animation(groupRef.current, delta);

    for (let i = 0; i < instances / 100; i++)
      setRandomColor(Math.floor(Math.random() * instances + 1));

    if (instancesRef.current.instanceColor)
      instancesRef.current.instanceColor.needsUpdate = true;
  });

  useLayoutEffect(() => {
    for (let i = 0; i < instances; i++) {
      setRandomColor(i);
    }
  }, [instances, setRandomColor]);

  return (
    <group ref={groupRef} position={position}>
      <Sampler
        transform={({ dummy, position }) => {
          dummy.position.copy(position);
        }}
        count={instances}>
        <mesh>
          <sphereGeometry args={[radius, 14, 7]} />
          <meshBasicMaterial
            wireframe
            color={wireframe}
            visible={wireframe !== undefined}
          />
        </mesh>
        <instancedMesh
          ref={instancesRef}
          args={[undefined, undefined, instances]}>
          <sphereGeometry args={[0.005]} />
        </instancedMesh>
      </Sampler>
    </group>
  );
}
export default Sphere;
