import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../modules/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/contato">
        <button>Contato</button>
      </Link>
      <Link to="/">
        <button>Produtos</button>
      </Link>
    </nav>
  );
};

export default Navbar;
