import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Header from './Header';
import Footer from './Footer';
import NaoEncontrada from './NaoEncontrada';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="sobre" element={<Sobre />}></Route>
        <Route path="*" element={<NaoEncontrada />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
