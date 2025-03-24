import React from 'react';

const coresArray = ['azul', 'roxo', 'laranja', 'verde'];

const ExercicioCores = () => {
  const [cores, setCores] = React.useState(['verde']);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function checkCor(cor) {
    return cores.includes(cor);
  }

  return (
    <>
      <h2>Exercício cores</h2>
      <div className="cores">
        {coresArray.map((cor) => {
          return (
            <label key={cor} style={{ textTransform: 'capitalize' }}>
              <input
                type="checkbox"
                value={cor}
                checked={checkCor(cor)}
                onChange={handleChange}
              />
              {cor}
            </label>
          );
        })}
      </div>
      {cores}
    </>
  );
};

export default ExercicioCores;
