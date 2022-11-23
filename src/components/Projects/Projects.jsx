import React from "react";
import Card from "../Card/Card";
import styles from "./Projects.module.css";
import cloneflix_thumb from "../../assets/img/cloneflix_thumb.png";
import dashboard_thumb from "../../assets/img/dashboard_thumb.png";
import portifolio_thumb from "../../assets/img/portifolio_thumb.png";

const Projects = () => {
  return (
    <section>
      <div className={styles.title_active}>
        <p>projects</p>
      </div>
      <div className={styles.container}>
        <div className={styles.cards}>
          <div className={styles.card_container}>
            <Card
              title="Netflix-clone"
              stack="_front-end"
              image={cloneflix_thumb}
              alt="Netflix thumbnail"
              description="Clone da página inicial da Netflix, desenvolvida com React, buscando dados através de API externa. (não é possivel reproduzir os titulos)"
              link="https://netflix-clone-b82icwbn8-alisonlim4.vercel.app/"
            />{" "}
          </div>
          <div className={styles.card_container}>
            <Card
              title="DS-Vendas"
              stack="_full-stack"
              image={dashboard_thumb}
              alt="Netflix thumbnail"
              description="Um dashboard de vendas, desenvolvido na semana spring-react.
          O projeto possui dados mockados mas pode ser facilmente integrado com uma API reativa"
              link="https://alisonlima-dsvendas.netlify.app/"
            />
          </div>
          <div className={styles.card_container}>
            <Card
              title="Portifolio"
              stack="_front-end"
              image={portifolio_thumb}
              alt="Portifolio thumbnail"
              description="site portifólio, para divulgação de projetos, e contatos com links para redes sociais e whatsapp. Este projeto é a página que você está navegando agora."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
