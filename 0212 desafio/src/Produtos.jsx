import React from 'react';
import Titulo from './Titulo';
import Produto from './Produto';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  const productsList = produtos.map((produto) => {
    return <Produto key={produto.nome} produto={produto} />;
  });

  return (
    <section>
      <Titulo title="Produtos" />
      {productsList}
    </section>
  );
};

export default Produtos;
