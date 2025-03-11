import React from 'react';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';

const Exemplos = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default Exemplos;
