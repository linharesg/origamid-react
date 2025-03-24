import React from 'react';

const Radio = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return (
    <>
      <h2>Cor: {cor}</h2>
      <label>
        <input type="radio" onChange={({target}) => setCor(target.value)} name="cor" value="azul" />
        Azul
      </label>
      <label>
        <input type="radio" onChange={({target}) => setCor(target.value)} name="cor" value="vermelho" />
        Vermelho
      </label>
      <h2>Produto: {produto}</h2>
      <label>
        <input
          type="radio"
          checked={produto === 'smartphone'}
          onChange={handleChange}
          value="smartphone"
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          checked={produto === 'notebook'}
          onChange={handleChange}
          value="notebook"
        />
        Notebook
      </label>
    </>
  );
};

export default Radio;
