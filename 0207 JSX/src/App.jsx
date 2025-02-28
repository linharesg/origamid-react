import React from 'react';

const App = () => {
  return (
    <>
      {/* <Jsx0207 /> */}
      <Arrays0208 />
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

function Arrays0208() {
  function Exercicio() {
    const produtos = [
      {
        id: 1,
        nome: 'Smartphone',
        preco: 'R$ 2000',
        cores: ['#29d8d5', '#252a34', '#fc3766'],
      },
      {
        id: 2,
        nome: 'Notebook',
        preco: 'R$ 3000',
        cores: ['#ffd045', '#d4394b', '#f37c59'],
      },
      {
        id: 3,
        nome: 'Tablet',
        preco: 'R$ 1500',
        cores: ['#365069', '#47c1c8', '#f95786'],
      },
    ];

    const productList = produtos
      .filter(({ preco }) => +preco.replace(/\D*(\d+)/, '$1') > 1500)
      .map(({ id, nome, preco, cores }) => (
        <li style={{ listStyle: 'none' }} key={id}>
          <h1>{nome}</h1>
          <p>Preço: {preco}</p>
          <ul>
            {cores.map((cor) => (
              <li key={cor} style={{ color: '#fff', backgroundColor: cor }}>
                {cor}
              </li>
            ))}
          </ul>
        </li>
      ));

    return (
      <>
        <ul>{productList}</ul>
      </>
    );
  }

  const produtosArrayPura = ['Notebook', 'Tablet', 'Smartphone'];
  const produtosArrayModificada = [
    <li key="e1">Notebook</li>,
    <li key="e2">Tablet</li>,
    <li key="e3">Smartphone</li>,
  ];

  const produtosArrayMapeada = produtosArrayPura.map((produto) => (
    <li key={produto}>{produto}</li>
  ));

  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  const livrosAfter1998 = livros
    .filter(({ ano }) => ano >= 1998)
    .map(({ nome, ano }) => (
      <li key={nome}>
        {nome}, {ano}
      </li>
    ));

  return (
    <>
      {/* <ul>{produtosArrayPura}</ul>
      <ul>{produtosArrayModificada}</ul>
      <ul>{produtosArrayMapeada}</ul>
      <ul>{livrosAfter1998}</ul> */}
      <Exercicio />
    </>
  );
}

export default App;
