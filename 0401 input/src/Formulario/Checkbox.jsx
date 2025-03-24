import React from 'react';

const Checkbox = () => {
  const [termos, setTermos] = React.useState(false);
  const [cores, setCores] = React.useState(['azul']);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
    console.log(target);
  }

  function checkCor(cor) {
    return cores.includes(cor);
  }
  

  return (
    <>
      <label>
        <input
          type="checkbox"
          value="Termos"
          checked={termos}
          onChange={({ target }) => setTermos(target.checked)}
        />
        Aceito os termos
      </label>
      {termos && <p>Aceitou os termos</p>}
      <div className="cores">
        <label>
          <input
            type="checkbox"
            value="azul"
            checked={checkCor('azul')}
            onChange={handleChange}
          />
          Azul
        </label>
        <label>
          <input
            type="checkbox"
            value="vermelho"
            checked={checkCor('vermelho')}
            onChange={handleChange}
          />
          Vermelho
        </label>
        {cores}
      </div>
    </>
  );
};

export default Checkbox;
