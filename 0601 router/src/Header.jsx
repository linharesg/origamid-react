import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation()

  React.useEffect(() => {
    console.log(`Rota nova: ${location.pathname}`)
  }, [location])
  
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
