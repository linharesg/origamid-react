import React from 'react';

const Produto = () => {
  const [produtos, setProdutos] = React.useState([]);
  console.log('renderizou produto');
  return (
    <div>
      <p>Produtos: {produtos.join(', ')}</p>
      <button
        onClick={() =>
          setProdutos(() => [...produtos, (Math.random() * 100).toFixed(0)])
        }
      >
        Add produto
      </button>
    </div>
  );
};

export default React.memo(Produto);
