import React from 'react';
import Produto from './Produto';

const Exemplos = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);
  const [ativo, setAtivo] = React.useState(false);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  React.useEffect(() => {
    document.title = `Total ${contar}`;
  }, [contar]);

  React.useEffect(() => {
    console.log('ativo:', ativo)
  }, [ativo])
  

  return (
    <div>
      {ativo && <Produto />}
      <button onClick={() => { setAtivo(!ativo)}}>Ativar</button>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>{dados.preco * contar}</p>
        </div>
      )}
      <button
        onClick={() => {
          setContar(contar + 1);
        }}
      >
        {contar}
      </button>
    </div>
  );
};

export default Exemplos;
