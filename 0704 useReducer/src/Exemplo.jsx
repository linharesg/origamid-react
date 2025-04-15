import React from 'react';

function funcaoQualquer(stateQualquer, actionQualquer) {
  switch (actionQualquer.type) {
    case 'REMOVER':
      return stateQualquer.filter(
        (item) => item !== actionQualquer.valueQualquer,
      );
    case 'ADICIONAR':
      return [...stateQualquer, actionQualquer.valueQualquer];
    default:
      throw new Error();
  }
}

const Exemplo = () => {
  const [stateQualquer, dispatchQualquer] = React.useReducer(funcaoQualquer, [
    'Banana',
    'Uva',
  ]);

  return (
    <div>
      <button
        onClick={() =>
          dispatchQualquer({ type: 'REMOVER', valueQualquer: 'Banana' })
        }
      >
        Remover banana
      </button>
      <button
        onClick={() =>
          dispatchQualquer({ type: 'ADICIONAR', valueQualquer: 'Manga' })
        }
      >
        Adicionar manga
      </button>
      {stateQualquer}
    </div>
  );
};

export default Exemplo;
