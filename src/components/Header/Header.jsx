import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.nome_container}>
        <span>alison-lima</span>
      </div>
      <HeaderNav />
    </header>
  );
};

export default Header;
