import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export function useScreen() {
  const camera = useThree(
    (state) => state.camera
  ) as THREE.PerspectiveCamera & { manual?: boolean };

  const vFOV = THREE.MathUtils.degToRad(camera.fov);

  return {
    convertPoints: (...points: [number, number, number][]) =>
      points.map((point) => {
        const halfProjectedHeight =
          Math.tan(vFOV / 2) * Math.abs(camera.position.z - point[2]);
        const halfProjectedWidth = halfProjectedHeight * camera.aspect;

        return [
          halfProjectedWidth * point[0],
          halfProjectedHeight * point[1],
          point[2],
        ];
      }),
  };
}
