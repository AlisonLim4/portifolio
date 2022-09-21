import React from 'react';
import styles from './Home.module.css';
import { Typewriter } from 'react-simple-typewriter';
import foto from '../../assets/img/Perfil.jpg';

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text_side}>
        <div>
          <p className={styles.hi}>Hi. I am</p>
          <h1 className={styles.title}>Alison Lima</h1>
          <p className={styles.stack}>
            &gt;{' '}
            <Typewriter
              words={['Front-end developer']}
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
            // I craft interactive and beautiful web apps, and I love what I do
          </p>
          <p className={styles.coment}>// View some of my personal projects!</p>
          <p className={styles.snippets}>
            {/* <span className={styles.const}>const</span>{' '} */}
            {/* <span className={styles.githublink}>githubLink</span> = */}
            {/* <span className={styles.link}>
              {' '}
              "
              <a href="https://github.com/AlisonLim4" target="blank">
                https://github.com/AlisonLim4
              </a>
              “
            </span> */}
            <span className={styles.const}>This website</span>{' '}
            <span className={styles.githublink}>are under</span>
            <span className={styles.link}>
              {' '}
              "<span>CONSTRUCTION</span>“
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
