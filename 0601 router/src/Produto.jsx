import React from 'react';
import {
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';

const Produto = () => {
  const params = useParams();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  console.log(search.get('q'));
  return (
    <div>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <h1>Produto: {params.id}</h1>
      <Outlet />
    </div>
  );
};

export default Produto;
