import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.nome_container}>
          <span>alison-lima</span>
        </div>

        <div className={styles.teste}>
          <div className={styles.nav_menu}>
            <ul>
              <li>
                <NavLink to="/" end>
                  _home
                </NavLink>
              </li>

              <li>
                <NavLink to={'/about'}>_about</NavLink>
              </li>
              <li>
                <NavLink to={'/projects'}>_projects</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
