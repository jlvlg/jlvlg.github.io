import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atropos from "atropos/react";
import Sphere from "components/sphere";
import globals from "styles/globals.module.scss";
import * as THREE from "three";
import TypeIt from "typeit-react";
import styles from "./landing.module.scss";

export type Props = {};

function LandingSection({}: Props) {
  const black = new THREE.Color(globals.black);
  black.offsetHSL(0, 0, 0.01);

  return (
    <header className={styles.landing}>
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
      <Atropos
        className={styles.atropos}
        shadow={false}
        highlight={false}
        rotateYMax={10}
        rotateXMax={10}>
        <hgroup data-atropos-offset="5" className={styles.info}>
          <h1>Lucas Lopes</h1>
          <p>
            DESENVOLVEDOR&nbsp;
            <TypeIt
              as="strong"
              options={{
                lifeLike: true,
                loop: true,
                breakLines: false,
                deleteSpeed: 50,
                nextStringDelay: 1500,
                strings: [
                  "react",
                  "node",
                  "graphql",
                  "express.js",
                  "python",
                  "java",
                  "spring",
                ],
              }}
            />
          </p>
        </hgroup>
      </Atropos>
    </header>
  );
}

export default LandingSection;
