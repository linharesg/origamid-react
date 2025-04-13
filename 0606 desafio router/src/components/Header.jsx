import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../modules/Header.module.css';

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink className={styles.link} to="/" end>
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/contato">
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
