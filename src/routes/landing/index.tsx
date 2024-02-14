import { Canvas } from "@react-three/fiber";
import Sphere from "components/sphere";
import { useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import globals from "styles/globals.module.scss";
import * as THREE from "three";
import styles from "./landing.module.scss";
import AboutMe from "./sections/aboutme";
import Header from "./sections/header";

function LandingPage() {
  const pageRef = useRef(null!);
  const { scrollYProgress } = useScroll({ container: pageRef });
  const spring = useSpring(scrollYProgress, { bounce: 0 });
  const black = new THREE.Color(globals.black);
  black.offsetHSL(0, 0, 0.01);

  return (
    <div ref={pageRef} id="page-container" className={styles.page}>
      <div className={styles.sphere}>
        <Canvas>
          <Sphere
            n={1000}
            radius={2}
            black={black}
            points={[
              [0, 0, 0],
              [0, 0, 5],
            ]}
            colors={[
              black,
              new THREE.Color(0x6d7178),
              new THREE.Color(globals.white),
            ]}
            progress={spring}
          />
        </Canvas>
      </div>
      <Header className={styles.section} />
      <AboutMe className={styles.section} />
    </div>
  );
}

export default LandingPage;
