import React from 'react';

const Botoes = ({ setProduto, opcoesProdutos, setCarregando }) => {
  async function fetchApi(url) {
    const response = await fetch(url);
    if (response.status !== 200) {
      console.log(response);
      return null;
    }
    return await response.json();
  }

  async function handleClick(event) {
    event.preventDefault();
    const url = event.currentTarget.dataset.url;

    setCarregando(true);
    const productData = await fetchApi(url);
    setProduto(productData);
    setCarregando(false);
  }

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {opcoesProdutos.map(({ nome, link }) => (
        <button
          onClick={handleClick}
          title={nome}
          type="button"
          data-url={link}
          key={nome}
        >
          {nome}
        </button>
      ))}
    </div>
  );
};

export default Botoes;
