import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);
  if (global.produto) {

  return <ul>
    {global.produto.map((produto) => (
      <li key={produto.id}>{produto.nome}</li>
    ))}
  </ul>;
  }
  return null
};

export default Produto;
