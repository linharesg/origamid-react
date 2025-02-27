import React from 'react';

const App = () => {
  return (
    <>
      <Jsx0207 />
    </>
  );
};

function Jsx0207() {
    function Exercicio() {
      const luana = {
        cliente: 'Luana',
        idade: 27,
        compras: [
          { nome: 'Notebook', preco: 'R$ 2500' },
          { nome: 'Geladeira', preco: 'R$ 3000' },
          { nome: 'Smartphone', preco: 'R$ 1500' },
        ],
        ativa: true,
      };

      const mario = {
        cliente: 'Mario',
        idade: 31,
        compras: [
          { nome: 'Notebook', preco: 'R$ 2500' },
          { nome: 'Geladeira', preco: 'R$ 3000' },
          { nome: 'Smartphone', preco: 'R$ 1500' },
          { nome: 'Guitarra', preco: 'R$ 3500' },
        ],
        ativa: false,
      };

      const dados = luana;
      const valorTotal = dados.compras.reduce((acc, current) => {
        acc += +current.preco.replace(/\D*(\d+)/, '$1');
        return acc;
      }, 0);

      const gastandoMuito = valorTotal > 10000;
      return (
        <>
          <div>
            <p>Nome: {dados.cliente}</p>
            <p>Idade: {dados.idade}</p>
            <p>
              Situação:{' '}
              <span style={{ color: dados.ativa ? 'green' : 'red' }}>
                {dados.ativa ? 'Ativo' : 'Inativo'}
              </span>
            </p>
            <p>Gasto total: R${valorTotal}</p>
            {gastandoMuito && <p>Você está gastando muito</p>}
          </div>
        </>
      );
    }
  
  const titulo = <h1>Título da página</h1>;
  const nome = ' Gabriel  ';
  const style = {
    backgroundColor: '#ccc',
  };
  function retornoFuncao(string) {
    return `esse texto veio de uma funcao. argumento: ${string}`;
  }
  return (
    <>
      {titulo}
      {/* os atributos for e class são nomes reservados do javascript, então no react são className e htmlFor */}
      <label htmlFor="nome">Nome</label>
      {/* possível criar expressões dentro do html usando as chaves {} */}
      <input
        className="form-control"
        type="text"
        id="nome"
        defaultValue={nome ? nome.trim() : ''}
      />
      <p style={style}>{retornoFuncao('qualquer coisa')}</p>
      <p style={{ color: '#FB5' }}>{new Date().toISOString()}</p>
      <Exercicio />
    </>
  );
}


export default App;
