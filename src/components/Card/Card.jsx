import React from 'react';
import Button from '../Button/Button';
import styles from './Card.module.css';

const Card = ({ title, subtitle, stack, image, alt, description, link }) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.title_container}>
          <span className={styles.blue}>{title}</span> <span>/</span>
          <span>{stack}</span>
        </div>
        <div className={styles.img_container}>
          <img src={image} alt={alt} />
        </div>
        <div className={styles.description_container}>
          <p>{description}</p>
          <a target="_blank" className={styles.button} href={link}>
            view-project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
