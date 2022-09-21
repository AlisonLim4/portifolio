import React from 'react';
import styles from './Footer.module.css';
import { RiLinkedinFill, RiInstagramFill, RiGithubFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <p>find me in:</p>
        <div className={styles.icons}>
          <div className={styles.icon_container}>
            <a href="https://www.linkedin.com/in/alison-lima/" target="_blank">
              <RiLinkedinFill size={'20px'} className={styles.icon} />
            </a>
          </div>
          <div className={styles.icon_container}>
            <RiInstagramFill size={'20px'} className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.github_container}>
        <a href="https://github.com/AlisonLim4" target="_blank">
          @AlisonLim4
        </a>
        <RiGithubFill size={'20px'} />
      </div>
    </footer>
  );
};

export default Footer;
