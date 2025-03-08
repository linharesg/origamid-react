import React from 'react';
import Botoes from './Botoes';
import Produto from './Produto';
import Carregando from './Carregando';

const Exercicio = () => {
  const opcoesProdutos = [
    {
      nome: 'tablet',
      link: 'https://ranekapi.origamid.dev/json/api/produto/tablet',
    },
    {
      nome: 'smartphone',
      link: 'https://ranekapi.origamid.dev/json/api/produto/smartphone',
    },
    {
      nome: 'notebook',
      link: 'https://ranekapi.origamid.dev/json/api/produto/notebook',
    },
  ];
  const [produto, setProduto] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false);

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Botoes
          setCarregando={setCarregando}
          setProduto={setProduto}
          opcoesProdutos={opcoesProdutos}
        />
      </div>
      {carregando && <Carregando />}
      {!carregando && produto && <Produto produto={produto} />}
    </div>
  );
};

export default Exercicio;
