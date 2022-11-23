import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useMedia from "../../Hooks/useMedia";
import styles from "./HeaderNav.module.css";
const HeaderNav = () => {
  const mobile = useMedia("(max-width: 750px)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

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
        <div className={styles.nav_menu}>
          <ul>
            <li>
              <NavLink to="/" end>
                home
              </NavLink>
            </li>

            <li>
              <NavLink to={"/about"}>sobre</NavLink>
            </li>
            <li>
              <NavLink to={"/projects"}>projetos</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HeaderNav;
