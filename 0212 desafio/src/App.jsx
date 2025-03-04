import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Produtos from './Produtos';

const App = () => {
  const getCurrentPage = () => {
    return window.location.pathname === '/' ? <Home /> : <Produtos />
  }
  
  return (
    <>
      <Navbar />
      {getCurrentPage()}
    </>
  );  
};

export default App;
