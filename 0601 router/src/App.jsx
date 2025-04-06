import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Header from './Header';
import Footer from './Footer';
import NaoEncontrada from './NaoEncontrada';
import Login from './Login';
import Produto from './Produto';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="sobre" element={<Sobre />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NaoEncontrada />}></Route>
        <Route path="produto/:id" element={<Produto />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
