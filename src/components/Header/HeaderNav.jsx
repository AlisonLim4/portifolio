import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useMedia from '../../Hooks/useMedia';
import styles from './HeaderNav.module.css';
const HeaderNav = () => {
  const mobile = useMedia('(max-width: 750px)');
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <div>
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
    </>
  );
};

export default HeaderNav;
