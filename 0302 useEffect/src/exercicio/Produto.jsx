import React from 'react';

const Produto = ({ productData }) => {
  return (
    <div>
      <h2>{productData.nome}</h2>
      <p>Preço: R${productData.preco}</p>
    </div>
  );
};

export default Produto;
