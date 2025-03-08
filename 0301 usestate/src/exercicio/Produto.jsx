import React from 'react';

const Produto = ({ produto}) => {
  return (
    <div>
      <h2>{produto.nome}</h2>
      <p>Preço: R${produto.preco}</p>
      <p>Descrição: {produto.descricao}</p>
      <div className="fotos" style={{display: 'flex', gap: '15px'}}>
        {produto.fotos.map(foto => (
          <img key={foto.titulo} style={{maxWidth: '200px', objectFit: 'contain', borderRadius: '4px' }} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
    </div>
  );
};

export default Produto;
