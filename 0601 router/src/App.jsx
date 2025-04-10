import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Header from './Header';
import Footer from './Footer';
import NaoEncontrada from './NaoEncontrada';
import Login from './Login';
import Produto from './Produto';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="sobre" element={<Sobre />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="produto">
          <Route path=":id" element={<Produto />}>
            <Route index element={<ProdutoDescricao />} />
            <Route path="avaliacao" element={<ProdutoAvaliacao />} />
            <Route path="customizado" element={<ProdutoCustomizado />} />
          </Route>
        </Route>
        <Route path="*" element={<NaoEncontrada />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
