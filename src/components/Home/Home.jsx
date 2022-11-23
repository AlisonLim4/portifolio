import React from "react";
import styles from "./Home.module.css";
import { Typewriter } from "react-simple-typewriter";
import foto from "../../assets/img/Perfil.jpg";

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text_side}>
        <div>
          <p className={styles.hi}>Olá. Eu sou </p>
          <h1 className={styles.title}>Alison Lima</h1>
          <p className={styles.stack}>
            &gt;{" "}
            <Typewriter
              words={["Desenvolvedor Front-end"]}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              loop={2}
            />
          </p>
        </div>
        <div>
          <p className={styles.coment}>
            // Eu desenvolvo aplicações web interativas e responsivas, e eu amo
            o que faço.
          </p>
          <p className={styles.coment}>
            // Fique a vontade para conferir meus projetos pessoais!
          </p>
          <p className={styles.snippets}>
            <span className={styles.const}>Esta página</span>{" "}
            <span className={styles.githublink}>está</span>
            <span className={styles.link}>
              {" "}
              "<span> EM CONSTRUÇÃO</span>“
            </span>
          </p>
        </div>
      </div>
      <div className={styles.img_side}>
        <div className={styles.photo_container}>
          <img className={styles.photo} src={foto} alt="Foto" />
        </div>
        <div className={styles.green_blur}></div>
        <div className={styles.blue_blur}></div>
      </div>
    </section>
  );
};

export default Home;
