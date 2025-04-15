import React from 'react';
import Exemplo from './Exemplo';

function reducer(state, action) {
  switch (action) {
    case 'AUMENTAR':
      return state + 1;
    case 'DIMINUIR':
      return state - 1;
    default:
      throw new Error('Opção não existe');
  }
}

const App = () => {
  // const [contar, setContar] = React.useState(0);
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch('AUMENTAR')}>+</button>
      <button onClick={() => dispatch('DIMINUIR')}>-</button>
      <p>{state}</p>
      <Exemplo />
    </div>
  );
};

export default App;
