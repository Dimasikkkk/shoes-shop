import React from "react";
import styles from "./Header.module.css";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.headerLogo}>
          <Link to={"/"}>
          <img src={logo} alt="" />
          </Link>
        </div>
        <nav>
          <ul className={styles.menu}>
            <Link className={styles.navItem} to={"/shoes"}>Кроссовки</Link>
            <li className={styles.navItem}>Одежда</li>
            <li className={styles.navItem}>Аксессуары</li>
            <li className={styles.navItem}>Доставка</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
