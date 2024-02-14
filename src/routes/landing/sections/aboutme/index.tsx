import { motion } from "framer-motion";
import styles from "./aboutme.module.scss";

export type Props = {
  className?: string;
};

function AboutMe({ className }: Props) {
  return (
    <section className={`${styles.aboutme} ${className || ""}`}>
      <div className={styles.container}>
        <h2>Sobre mim</h2>
        <div className={styles.photo}>
          <img src="public/me.jpeg" alt="Foto do autor" />
        </div>
        <motion.div
          className={styles.text}
          initial={{ height: 0 }}
          whileInView={{
            height: "min-content",
            transition: { delay: 0.3 },
          }}
          layout
          viewport={{ amount: "all", once: false }}>
          <p>
            Sou um desenvolvedor full-stack apaixonado por transformar ideias em
            realidade digital. Com uma sólida experiência em tecnologias como
            React, Node.js e AWS, busco constantemente aprimorar minhas
            habilidades para criar aplicações web eficientes e inovadoras.
          </p>
          <p>
            Acredito no poder da colaboração e estou sempre pronto para
            enfrentar desafios que impulsionem meu crescimento profissional.
            Além do código, sou entusiasta por boas práticas de desenvolvimento,
            design centrado no usuário e aprendizado contínuo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
