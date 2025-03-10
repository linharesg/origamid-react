import React from 'react';

const Botoes = ({ products, setProduct }) => {
  async function handleClick(event) {
    event.preventDefault();
    setProduct(event.currentTarget.dataset.product);
  }

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {products.map((product) => (
        <button
          data-product={product.nome}
          key={product.nome}
          onClick={handleClick}
        >
          {product.nome}
        </button>
      ))}
    </div>
  );
};

export default Botoes;
