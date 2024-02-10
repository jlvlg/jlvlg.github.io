import Atropos from "atropos/react";
import TypeIt from "typeit-react";
import styles from "./header.module.scss";

export type Props = {};

function Header({}: Props) {
  return (
    <Atropos
      className={styles.atropos}
      component="header"
      shadow={false}
      highlight={false}
      rotateYMax={10}
      rotateXMax={10}>
      <hgroup data-atropos-offset="5">
        <h1>Lucas Lopes</h1>
        <p>
          Desenvolvedor&nbsp;
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
  );
}

export default Header;
