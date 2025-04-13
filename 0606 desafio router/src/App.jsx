import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Produtos from './pages/Produtos.jsx';
import Produto from './pages/Produto.jsx';
import Navbar from './components/Navbar.jsx';
import Contato from './pages/Contato.jsx';
import './App.css';

const App = () => {
  React.useEffect(() => console.clear());
  return (
    <BrowserRouter>
      <div style={{ width: '80%', margin: 'auto' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Produtos />}></Route>
          <Route path="produtos/:id" element={<Produto />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
