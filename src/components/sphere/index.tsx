"use client";

import { Sampler } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useScreen } from "hooks/three";
import { useCallback, useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";

export type Props = {
  n: number;
  radius: number;
  wireframe?: THREE.Color;
  colors: THREE.Color[];
  black?: THREE.Color;
  points: [number, number, number][];
  progress: MotionValue<number>;
};

function Sphere({
  n,
  radius,
  wireframe,
  colors,
  black,
  points,
  progress,
}: Props) {
  const instancesRef = useRef<THREE.InstancedMesh>(null!);
  const { convertPoints } = useScreen();

  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        convertPoints(...points).map((point) => new THREE.Vector3(...point))
      ),
    [convertPoints, points]
  );

  const x = useTransform(
    () => curve.getPoint(Math.min(1, Math.max(0, progress.get()))).x
  );
  const y = useTransform(
    () => curve.getPoint(Math.min(1, Math.max(0, progress.get()))).y
  );
  const z = useTransform(
    () => curve.getPoint(Math.min(1, Math.max(0, progress.get()))).z
  );

  const setRandomColor = useCallback(
    (i: number) => {
      instancesRef.current.setColorAt(
        i,
        colors[Math.floor(Math.random() * colors.length)]
      );
    },
    [colors]
  );

  useFrame(() => {
    for (let i = 0; i < n / 100; i++)
      setRandomColor(Math.floor(Math.random() * n + 1));

    if (instancesRef.current.instanceColor)
      instancesRef.current.instanceColor.needsUpdate = true;
  });

  useLayoutEffect(() => {
    for (let i = 0; i < n; i++)
      if (black) instancesRef.current.setColorAt(i, black);
      else setRandomColor(i);

    if (instancesRef.current.instanceColor)
      instancesRef.current.instanceColor.needsUpdate = true;
  }, [black, n, setRandomColor]);

  return (
    <motion.group
      position-x={x}
      position-y={y}
      position-z={z}
      animate={{
        rotateX: 2 * Math.PI,
        rotateY: 2 * Math.PI,
        rotateZ: 2 * Math.PI,
      }}
      transition={{
        rotateX: { duration: 15, repeat: Infinity, ease: "linear" },
        rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
        rotateZ: { duration: 25, repeat: Infinity, ease: "linear" },
      }}>
      <Sampler
        transform={({ dummy, position }) => {
          dummy.position.copy(position);
        }}
        count={n}>
        <mesh>
          <sphereGeometry args={[radius, 14, 7]} />
          <meshBasicMaterial
            wireframe
            color={wireframe}
            visible={wireframe !== undefined}
          />
        </mesh>
        <instancedMesh ref={instancesRef} args={[undefined, undefined, n]}>
          <sphereGeometry args={[radius * 0.005]} />
        </instancedMesh>
      </Sampler>
    </motion.group>
  );
}
export default Sphere;
