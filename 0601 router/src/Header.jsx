import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="sobre">Sobre</Link>
      </nav>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>{' '}
        | <NavLink to="sobre">Sobre</NavLink>
      </nav>
      <nav>
        <NavLink to="login">Login</NavLink>
      </nav>
    </>
  );
};

export default Header;
