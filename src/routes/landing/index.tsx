import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Sphere from "components/sphere";
import globals from "styles/globals.module.scss";
import * as THREE from "three";
import styles from "./landing.module.scss";
import Header from "./sections/header";

function LandingPage() {
  const black = new THREE.Color(globals.black);
  black.offsetHSL(0, 0, 0.01);

  return (
    <div className={styles.landing}>
      <div className={styles.sphere}>
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 3]} />
          <Sphere
            position={[0, 0, 0]}
            radius={1}
            instances={1000}
            colors={[black, 0x6d7178, globals.white]}
            animation={(group, delta) => {
              group.rotation.x += delta / 4;
              group.rotation.y += delta / 5;
              group.rotation.z += delta / 6;
            }}
          />
        </Canvas>
      </div>
      <Header />
    </div>
  );
}

export default LandingPage;
