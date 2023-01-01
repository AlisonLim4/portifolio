import React from "react";
import { FaJava, FaNodeJs, FaUniversity } from "react-icons/fa";
import { RiCss3Fill, RiHtml5Fill, RiReactjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiBootstrap, SiSass } from "react-icons/si";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <div className={styles.education}>
      <h2>Análise e Desenvolvimento de Sistemas</h2>
      <div className={styles.university}>
        <FaUniversity /> <span>Universidade Estácio de Sá</span>
      </div>
      <p>08/2021</p>

      <h2>Cursos e habilidades complementares</h2>
      <ul>
        <li>
          <RiReactjsFill />
          React
        </li>
        <li>
          <IoLogoJavascript />
          Javascript ES6+
        </li>
        <li>
          <RiHtml5Fill />
          HTML5
        </li>
        <li>
          <FaNodeJs />
          NodeJS
        </li>
        <li>
          <RiCss3Fill />
          CSS3
        </li>
        <li>
          <SiBootstrap />
          Bootstrap
        </li>
        <li>
          <SiSass />
          SASS
        </li>
        <li>
          <FaJava />
          Java
        </li>
      </ul>
    </div>
  );
};

export default Education;
