import React from 'react';
// import Contato from './Contato.jsx';

const Contato = React.lazy(() => import('./Contato.jsx'));

const App = () => {
  const [ativar, setAtivar] = React.useState(false);

  return (
    <div>
      {ativar && (
        <React.Suspense fallback={<div>Caregando</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button onClick={() => setAtivar(!ativar)}>
        {!ativar ? 'Ativar' : 'Desativar'}
      </button>
    </div>
  );
};

export default App;
