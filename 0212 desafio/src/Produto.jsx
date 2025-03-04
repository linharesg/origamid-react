import React from 'react';

const Produto = ({ produto }) => {
  const propElement = produto.propriedades.map((propriedade, index) => (
    <li key={index}>{propriedade}</li>
  ));

  return (
    <div style={{ border: 'solid 1px black', margin: '10px', padding: '10px' }}>
      <p>{produto.nome}</p>
      <ul>{propElement}</ul>
    </div>
  );
};

export default Produto;
