import TypeIt from "typeit-react";
import styles from "./header.module.scss";

export type Props = { className?: string };

function Header({ className }: Props) {
  return (
    <header className={`${styles.header} ${className || ""}`}>
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
    </header>
  );
}

export default Header;
