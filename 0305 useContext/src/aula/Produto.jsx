import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);
  return (
    <div>
      Produto: {global.nome}
      <button
        onClick={() => {
          global.setContar(global.contar + 1);
        }}
      >
        Total: {global.contar}
      </button>
      <button onClick={global.adicionarDois}>Total: {global.contar}</button>
    </div>
  );
};

export default Produto;
