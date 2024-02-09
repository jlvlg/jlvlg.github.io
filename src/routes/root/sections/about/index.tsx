import styles from "./about.module.scss";

export type Props = {};

function AboutSection({}: Props) {
  return (
    <section className={styles.about}>
      <div>Sobre</div>
    </section>
  );
}

export default AboutSection;
