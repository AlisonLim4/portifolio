import React from 'react';
import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import styles from './MenuMobile.module.css';
const MenuMobile = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const menu = document.querySelector(`.${styles.container}`);
  useEffect(() => {
    if (menuIsVisible) {
      console.log('visivel');
    } else {
      menu.classList.add(`${styles.hidden}`);
    }
  }, [menuIsVisible]);

  return (
    <div className={styles.container}>
      <IoClose
        size={45}
        onClick={() => {
          setMenuIsVisible(!menuIsVisible);
          console.log(menuIsVisible);
          console.log(menu);
        }}
      />

      <div className={styles.teste}>
        <div className={styles.nav_menu}>
          <ul>
            <li>
              <Link to={'/'}>_hello</Link>
            </li>

            <li>
              <Link to={'/about'}>_about</Link>
            </li>
            <li>
              <Link to={'/projects'}>_projects</Link>
            </li>
            <li>
              <Link to={'/contact'}>_contact-me</Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MenuMobile;
